import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: '¿Qué es UVA ERP y cuál es su relación con UVASOFT?',
    answer:
      'UVASOFT es la empresa colombiana de ingeniería de software y UVA ERP es nuestro producto principal en la nube. A diferencia de programas contables tradicionales, UVA ERP ofrece una arquitectura modular y escalable con: contabilidad NIIF, facturación y nómina electrónica DIAN, inventarios, cartera, compras y módulos especializados para Parqueaderos, Restaurantes, Ferreterías, Droguerías y Producción.',
  },
  {
    question: '¿El producto UVA ERP está habilitado para Facturación y Nómina Electrónica ante la DIAN?',
    answer:
      'Sí, 100%. UVA ERP cumple con todas las exigencias y resoluciones técnicas de la DIAN en Colombia para facturación electrónica con validación previa (CUFE, QR), notas crédito/débito, documento soporte electrónico en compras a no obligados, nómina electrónica y eventos del sistema RADIAN.',
  },
  {
    question: '¿Puedo activar solo los módulos que mi negocio necesita?',
    answer:
      'Totalmente. Si tienes un restaurante puedes activar comanderas y control de mesas; si administras un parqueadero puedes usar el módulo de tarifas por minuto y control de placas; si tienes una ferretería dispones de ventas por metros/kilos y códigos múltiples. Pagas únicamente por lo que tu operación requiere.',
  },
  {
    question: '¿Cómo funciona la cartera y los recordatorios automáticos de cobro?',
    answer:
      'UVA ERP organiza tus cuentas por cobrar por edades de vencimiento (corriente, 30, 60, 90+ días) y te permite enviar avisos y estados de cuenta automáticos por correo electrónico y mensajes de WhatsApp a tus clientes con botón de pago directo, reduciendo drásticamente la cartera morosa.',
  },
  {
    question: '¿Puedo migrar mis datos de clientes, productos y saldos desde otro sistema?',
    answer:
      'Sí. Con UVA ERP puedes importar de forma masiva tus listas de clientes, catálogo de productos, proveedores, inventario inicial y saldos de cuentas contables mediante plantillas en Excel fáciles de diligenciar. Además, nuestro equipo de soporte técnico en Colombia te guía paso a paso en la migración sin costo extra.',
  },
  {
    question: '¿Qué incluye la prueba gratuita de 15 días?',
    answer:
      'Acceso total a todos los módulos de UVA ERP para que pruebes la emisión de facturas, el control de inventarios, la liquidación de nómina y los módulos de tu sector específico. No requieres tarjeta de crédito para iniciar y toda la información que cargues se conserva si decides continuar.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50/70 border-b border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
            UVASOFT • Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            Todo lo que necesitas saber sobre nuestro software UVA ERP
          </h2>
          <p className="text-base text-gray-600">
            ¿Tienes dudas sobre la implementación de UVA ERP en tu empresa? Chatea con los consultores de UVASOFT en Colombia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-indigo-100/80 overflow-hidden shadow-sm shadow-indigo-100/50 transition hover:border-indigo-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
