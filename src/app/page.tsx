'use client';

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ContactFormStatic } from "@/components/contact-form-static";

type UserType = 'centro' | 'uni';

export default function Home() {
  const [selectedUserType, setSelectedUserType] = useState<UserType>('centro');
  return (
    <main className="flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-neutral-100">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="text-neutral-900 font-semibold tracking-tight">Germán Enguix</div>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-neutral-600">
              <a href="#home" className="hover:text-neutral-900">Home</a>
              <a href="#servicios" className="hover:text-neutral-900">Servicios</a>
              <a href="#sobre-mi" className="hover:text-neutral-900">Sobre mí</a>
            </nav>
            <div className="hidden sm:block">
              <a href="#contacto">
                <Button variant="secondary" className="h-8 px-3 text-xs">Contactar</Button>
          </a>
        </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="home" className="bg-neutral-100">
        <Container>
          <div className="py-16 sm:py-20 flex flex-col items-center text-center gap-6">
            <h1 className="max-w-[820px] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Inspiro y formo a la próxima generación en Inteligencia Artificial para el producto digital.
            </h1>
            <p className="max-w-[720px] text-neutral-600 text-base">
              Charlas, talleres y dinámicas grupales con un baño de realidad.
            </p>
            <Button className="mt-2">Invítame a tu centro</Button>
          </div>
        </Container>
      </section>

      {/* Select - quién eres */}
      <section id="servicios" className="bg-white">
        <Container>
          <div className="py-12 sm:py-16 space-y-8">
            <SectionHeading title="Elige quién eres" />
            <div className="grid gap-6 sm:grid-cols-2 max-w-xl">
              <button 
                onClick={() => setSelectedUserType('centro')}
                className={`rounded-md border p-4 text-left transition-all ${
                  selectedUserType === 'centro' 
                    ? 'border-neutral-800 bg-neutral-50' 
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-medium text-neutral-900">Soy un centro</div>
                <div className="text-sm text-neutral-600">Partner body</div>
              </button>
              <button 
                onClick={() => setSelectedUserType('uni')}
                className={`rounded-md border p-4 text-left transition-all ${
                  selectedUserType === 'uni' 
                    ? 'border-neutral-800 bg-neutral-50' 
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-medium text-neutral-900">Soy una uni</div>
                <div className="text-sm text-neutral-600">Partner body</div>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Productos */}
      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16 space-y-8">
            <SectionHeading title="Productos" subtitle="Subheading" />
            <div className="grid gap-6 sm:grid-cols-3">
              {selectedUserType === 'centro' ? (
                <>
                  <article className="rounded-lg border border-neutral-200 p-6 space-y-3">
                    <div className="text-neutral-600 text-sm">🎤 Charla</div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Los trabajos del futuro que ya existen</h3>
                    <p className="text-neutral-900 text-base">Descubre roles en tecnología que aún no están en el imaginario de los estudiantes</p>
                  </article>
                  <article className="rounded-lg border border-neutral-800 bg-neutral-800 p-6 space-y-3 text-white">
                    <div className="text-neutral-300 text-sm">⚡ Taller</div>
                    <h3 className="text-xl font-semibold tracking-tight">Tu primer proyecto con IA</h3>
                    <p className="text-base">Desde crear un logo hasta prototipar un producto sencillo</p>
                  </article>
                  <article className="rounded-lg border border-neutral-200 p-6 space-y-3">
                    <div className="text-neutral-600 text-sm">🎲 Reto en equipo</div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Imagina un producto con IA para tu centro</h3>
                    <p className="text-neutral-900 text-base">Dinámica gamificada para trabajar en equipo y aplicar lo aprendido</p>
                  </article>
                </>
              ) : (
                <>
                  <article className="rounded-lg border border-neutral-200 p-6 space-y-3">
                    <div className="text-neutral-600 text-sm">🎤 Talk</div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Cómo usamos la IA en una startup real</h3>
                    <p className="text-neutral-900 text-base">Lorem Ipsum</p>
                  </article>
                  <article className="rounded-lg border border-neutral-800 bg-neutral-800 p-6 space-y-3 text-white">
                    <div className="text-neutral-300 text-sm">⚡ Workshop</div>
                    <h3 className="text-xl font-semibold tracking-tight">Construye un MVP con IA desde 0</h3>
                    <p className="text-base">Lorem ipsum</p>
                  </article>
                  <article className="rounded-lg border border-neutral-200 p-6 space-y-3">
                    <div className="text-neutral-600 text-sm">🎲 Mentoría</div>
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900">Feedback para los proyectos de alumnos</h3>
                    <p className="text-neutral-900 text-base">Lorem Ipsum</p>
                  </article>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="bg-white">
        <Container>
          <div className="py-12 sm:py-16 space-y-8">
            <SectionHeading title="Beneficios" subtitle="Subheading" />
            <div className="grid gap-6 sm:grid-cols-3">
              {selectedUserType === 'centro' ? (
                <>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Descubren salidas profesionales que no conocían</h3>
                    <p className="text-neutral-600 text-sm">Descubren salidas profesionales que no conocían.</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Pierden el miedo a la tecnología con un enfoque lúdico</h3>
                    <p className="text-neutral-600 text-sm">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Se motivan al ver cómo pueden crear con IA sin necesidad de experiencia previa</h3>
                    <p className="text-neutral-600 text-sm">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                      <span className="text-neutral-600">ℹ</span>
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Ven casos de aplicación real en una startup digital</h3>
                    <p className="text-neutral-600 text-sm">Descubren salidas profesionales que no conocían.</p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                      <span className="text-neutral-600">ℹ</span>
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Aprenden herramientas que mejoran su empleabilidad inmediata</h3>
                    <p className="text-neutral-600 text-sm">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
                  </div>
                  <div className="rounded-lg border border-neutral-200 p-6 space-y-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                      <span className="text-neutral-600">ℹ</span>
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">Trabajan con dinámicas de equipo similares a las del mundo laboral</h3>
                    <p className="text-neutral-600 text-sm">Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Quién soy */}
      <section id="sobre-mi" className="bg-neutral-200/60">
        <Container>
          <div className="py-16 grid gap-8 sm:grid-cols-2 items-start">
            <div className="h-[260px] rounded-md bg-neutral-200" />
            <div className="space-y-4">
              <SectionHeading title="Quién soy" subtitle="Product designer @SesameHR" />
              <p className="text-neutral-900 text-base">
                Soy Product Design Lead en una startup SaaS con más de 300 empleados. Lidero un equipo de diseño donde aplicamos Inteligencia Artificial cada día para diseñar, prototipar y lanzar productos digitales. Después de ver cómo la IA está transformando la forma en la que trabajamos, decidí compartir mi experiencia con estudiantes para ayudarles a prepararse para el futuro del trabajo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-neutral-100">
        <Container>
          <div className="py-16 flex flex-col items-center gap-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Invitame a tu centro</h2>
              <p className="text-neutral-600">Rellena el formulario y pronto me pondré en contacto</p>
            </div>
            <ContactFormStatic />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-100">
        <Container>
          <div className="py-6 flex items-center justify-between text-sm text-neutral-900">
            <div className="font-semibold">G·</div>
            <div>© Charlas & Workshops IA, 2025</div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
