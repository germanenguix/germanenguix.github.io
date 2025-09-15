'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ContactFormStatic() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Formspree endpoint - reemplaza 'YOUR_FORM_ID' con tu ID real
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch {
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-sm bg-white p-6 rounded-lg border border-neutral-200 text-center space-y-4">
        <div className="text-green-600 text-4xl">✓</div>
        <h3 className="text-lg font-semibold text-neutral-900">¡Mensaje enviado!</h3>
        <p className="text-neutral-600 text-sm">
          Gracias por tu interés. Me pondré en contacto contigo pronto.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="secondary"
          className="w-full"
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-sm bg-white p-6 rounded-lg border border-neutral-200 space-y-3"
    >
      <div>
        <label htmlFor="centerName" className="block text-sm text-neutral-600 mb-1">
          Nombre del centro
        </label>
        <input 
          id="centerName"
          name="centerName"
          type="text"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Nombre de tu centro educativo" 
        />
      </div>

      <div>
        <label htmlFor="contactName" className="block text-sm text-neutral-600 mb-1">
          Nombre de contacto
        </label>
        <input 
          id="contactName"
          name="contactName"
          type="text"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Tu nombre completo" 
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-600 mb-1">
          Email
        </label>
        <input 
          id="email"
          name="_replyto"
          type="email" 
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="tu@email.com" 
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-600 mb-1">
          Mensaje
        </label>
        <textarea 
          id="message"
          name="message"
          required
          disabled={isSubmitting}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Cuéntanos sobre tu centro y qué tipo de charla o taller te interesa..." 
          rows={3} 
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-neutral-900">Como prefieres mi asistencia</p>
        <label className="flex items-center gap-2 text-sm text-neutral-900">
          <input 
            type="checkbox" 
            name="presencial"
            value="Presencial"
            disabled={isSubmitting}
            className="size-4 disabled:opacity-50" 
          /> 
          Presencial
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-900">
          <input 
            type="checkbox" 
            name="online"
            value="Online"
            disabled={isSubmitting}
            className="size-4 disabled:opacity-50" 
          /> 
          Online
        </label>
      </div>

      {/* Campo oculto para el asunto */}
      <input type="hidden" name="_subject" value="Nueva solicitud desde germanenguix.com" />
      
      {/* Campo oculto para evitar spam */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  )
}
