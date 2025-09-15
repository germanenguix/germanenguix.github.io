'use client'

import { useActionState } from 'react'
import { Button } from '@/components/ui/button'
import { submitContactForm, type ActionResult } from '@/lib/actions'

const initialState: ActionResult = {
  success: false,
  message: '',
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <form action={formAction} className="w-full max-w-sm bg-white p-6 rounded-lg border border-neutral-200 space-y-3">
      {/* Mensaje de estado */}
      {state.message && (
        <div className={`p-3 rounded-md text-sm ${
          state.success 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {state.message}
        </div>
      )}

      <div>
        <label htmlFor="centerName" className="block text-sm text-neutral-600 mb-1">
          Nombre del centro
        </label>
        <input 
          id="centerName"
          name="centerName"
          type="text"
          required
          disabled={isPending}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Nombre de tu centro educativo" 
        />
        {state.errors?.centerName && (
          <p className="text-red-600 text-xs mt-1">{state.errors.centerName[0]}</p>
        )}
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
          disabled={isPending}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Tu nombre completo" 
        />
        {state.errors?.contactName && (
          <p className="text-red-600 text-xs mt-1">{state.errors.contactName[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-neutral-600 mb-1">
          Email
        </label>
        <input 
          id="email"
          name="email"
          type="email" 
          required
          disabled={isPending}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="tu@email.com" 
        />
        {state.errors?.email && (
          <p className="text-red-600 text-xs mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-neutral-600 mb-1">
          Mensaje
        </label>
        <textarea 
          id="message"
          name="message"
          required
          disabled={isPending}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed" 
          placeholder="Cuéntanos sobre tu centro y qué tipo de charla o taller te interesa..." 
          rows={3} 
        />
        {state.errors?.message && (
          <p className="text-red-600 text-xs mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-sm text-neutral-900">Como prefieres mi asistencia</p>
        <label className="flex items-center gap-2 text-sm text-neutral-900">
          <input 
            type="checkbox" 
            name="presencial"
            disabled={isPending}
            className="size-4 disabled:opacity-50" 
          /> 
          Presencial
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-900">
          <input 
            type="checkbox" 
            name="online"
            disabled={isPending}
            className="size-4 disabled:opacity-50" 
          /> 
          Online
        </label>
      </div>

      <Button 
        type="submit" 
        disabled={isPending}
        className="w-full"
      >
        {isPending ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  )
}
