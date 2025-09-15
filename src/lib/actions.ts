'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

// Schema de validación para el formulario de contacto
const contactFormSchema = z.object({
  centerName: z.string().min(1, 'El nombre del centro es requerido'),
  contactName: z.string().min(1, 'El nombre de contacto es requerido'),
  email: z.string().email('Email inválido'),
  message: z.string().min(1, 'El mensaje es requerido'),
  presencial: z.boolean().optional(),
  online: z.boolean().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export interface ActionResult {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  try {
    // Extraer datos del FormData
    const rawData = {
      centerName: formData.get('centerName') as string,
      contactName: formData.get('contactName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      presencial: formData.get('presencial') === 'on',
      online: formData.get('online') === 'on',
    }

    // Validar los datos
    const validatedData = contactFormSchema.parse(rawData)

    // Preparar el contenido del email
    const preferencias = []
    if (validatedData.presencial) preferencias.push('Presencial')
    if (validatedData.online) preferencias.push('Online')
    const preferenciaTexto = preferencias.length > 0 ? preferencias.join(', ') : 'No especificado'

    const emailContent = `
      <h2>Nueva solicitud de contacto</h2>
      <p><strong>Centro:</strong> ${validatedData.centerName}</p>
      <p><strong>Contacto:</strong> ${validatedData.contactName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Preferencia de asistencia:</strong> ${preferenciaTexto}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    `

    // Enviar el email
    const { error } = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>', // Email por defecto de Resend
      to: [process.env.CONTACT_EMAIL || 'tu-email@ejemplo.com'], // Tu email
      replyTo: validatedData.email, // Para que puedas responder directamente
      subject: `Nueva solicitud de ${validatedData.centerName}`,
      html: emailContent,
    })

    if (error) {
      console.error('Error enviando email:', error)
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      }
    }

    return {
      success: true,
      message: 'Mensaje enviado correctamente. Te contactaré pronto.',
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Por favor, revisa los datos del formulario.',
        errors: error.flatten().fieldErrors,
      }
    }

    console.error('Error en submitContactForm:', error)
    return {
      success: false,
      message: 'Error inesperado. Por favor, inténtalo de nuevo.',
    }
  }
}
