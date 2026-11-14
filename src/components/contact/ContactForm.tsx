import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  service: 'desarrollo-web',
  budget: '5k-10k',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email corporativo válido.';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = 'Por favor describe tu proyecto con al menos 15 caracteres.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulación de envío con latencia realista
    setTimeout(() => {
      setStatus('success');
      setFormData(initialForm);
    }, 1200);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
      {status === 'success' ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">¡Mensaje recibido con éxito!</h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm">
            Gracias por contactar a UVA Tech Solutions. Un arquitecto de soluciones revisará tus requerimientos y te responderá en menos de 24 horas laborables.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Carlos Rivera"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                    : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500'
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Email corporativo *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="carlos@empresa.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                    : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Empresa */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Empresa / Organización
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Servicio Requerido */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                Servicio principal
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                <option value="desarrollo-web">Desarrollo Web Moderno (Astro + React)</option>
                <option value="cloud-devops">Arquitectura Cloud & DevOps</option>
                <option value="seo-geo">Consultoría SEO Técnico & GEO</option>
                <option value="ia-agentes">Integración IA & Modelos de Lenguaje</option>
                <option value="otro">Auditoría / Otro</option>
              </select>
            </div>
          </div>

          {/* Presupuesto Estimado */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Presupuesto estimado
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: '3k-5k', label: '€3k - €5k' },
                { id: '5k-10k', label: '€5k - €10k' },
                { id: '10k-25k', label: '€10k - €25k' },
                { id: '+25k', label: '> €25k' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: b.id })}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition ${
                    formData.budget === b.id
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
              Detalles del proyecto o requerimiento *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Cuéntanos brevemente sobre tus metas técnicas, plazos y expectativas..."
              className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-red-300 focus:ring-red-400 bg-red-50/30'
                  : 'border-gray-200 focus:ring-primary-500 focus:border-primary-500'
              }`}
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando información...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Solicitar Propuesta Técnica
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
