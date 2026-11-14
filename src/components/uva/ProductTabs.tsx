import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  Users,
  Package,
  Truck,
  CreditCard,
  HeartHandshake,
  ShoppingBag,
  Car,
  UtensilsCrossed,
  Wrench,
  Pill,
  Factory,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ModuleItem {
  id: string;
  name: string;
  category: 'core' | 'sector';
  icon: any;
  headline: string;
  description: string;
  features: string[];
  mockup: {
    title: string;
    tag: string;
    items: { label: string; value: string }[];
    highlight: string;
  };
}

const erpModules: ModuleItem[] = [
  {
    id: 'contabilidad',
    name: 'Contabilidad NIIF',
    category: 'core',
    icon: Calculator,
    headline: 'Contabilidad automatizada bajo normas NIIF y PUC colombiano',
    description:
      'Cada venta, compra, pago o recaudo genera automáticamente los asientos contables correspondientes. Genera balances de prueba, estado de situación financiera, libros oficiales y formatos para información exógena DIAN.',
    features: [
      'Plan Único de Cuentas (PUC) colombiano preconfigurado y personalizable.',
      'Generación automática de medios magnéticos para Información Exógena DIAN.',
      'Cierres contables mensuales y anuales con un solo clic.',
      'Centros de costos y proyectos para análisis de rentabilidad por área.',
    ],
    mockup: {
      title: 'Balance General & Estados Financieros',
      tag: 'NIIF Pymes Actualizado',
      items: [
        { label: 'Activo Corriente', value: '$312.450.000 COP' },
        { label: 'Pasivo Total', value: '$98.320.000 COP' },
        { label: 'Patrimonio Neto', value: '$214.130.000 COP' },
        { label: 'Utilidad del Ejercicio', value: '$68.740.000 COP' },
      ],
      highlight: 'Asientos causados automáticamente al 100%',
    },
  },
  {
    id: 'facturacion',
    name: 'Facturación Electrónica',
    category: 'core',
    icon: FileText,
    headline: 'Facturas de venta DIAN, pedidos, remisiones, cotizaciones y devoluciones',
    description:
      'Controla todo el ciclo comercial: genera cotizaciones, conviértelas en pedidos, realiza despachos con remisiones, procesa devoluciones y emite facturas electrónicas avaladas por la DIAN en segundos.',
    features: [
      'Ciclo comercial completo: cotizaciones, pedidos, remisiones y devoluciones.',
      'Validación previa DIAN con entrega de código CUFE y código QR.',
      'Envío automático de XML y representación gráfica PDF al correo del cliente.',
      'Facturación recurrente automática para mensualidades o suscripciones.',
    ],
    mockup: {
      title: 'Factura de Venta FE-9842',
      tag: 'DIAN: Aprobada con CUFE',
      items: [
        { label: 'Cliente', value: 'Comercializadora del Valle S.A.S.' },
        { label: 'Subtotal Base', value: '$4.500.000 COP' },
        { label: 'IVA (19%)', value: '$855.000 COP' },
        { label: 'Retención en la Fuente', value: '-$112.500 COP' },
      ],
      highlight: 'Total Facturado: $5.242.500 COP',
    },
  },
  {
    id: 'inventario',
    name: 'Inventarios & Bodegas',
    category: 'core',
    icon: Package,
    headline: 'Control multisede, traslados entre bodegas y valorización precisa',
    description:
      'Gestiona existencias en tiempo real, múltiples bodegas, traslados internos, kardex valorizado por promedio ponderado y alertas inteligentes de stock mínimo para nunca quedarte desabastecido.',
    features: [
      'Control de inventario multi-bodega y múltiples sucursales.',
      'Kardex automático con método promedio ponderado exigido por la DIAN.',
      'Lector de código de barras e impresión masiva de etiquetas de precios.',
      'Alertas de reposición antes de agotar existencias críticas.',
    ],
    mockup: {
      title: 'Kardex Central Multi-Bodega',
      tag: 'Valorización al Día',
      items: [
        { label: 'Referencias Activas', value: '2.850 productos' },
        { label: 'Valor Total Inventario', value: '$245.800.000 COP' },
        { label: 'Bodega Principal', value: '1.920 unidades' },
        { label: 'Bodega Norte', value: '930 unidades' },
      ],
      highlight: 'Inventario conciliado con contabilidad',
    },
  },
  {
    id: 'nomina',
    name: 'Nómina Electrónica',
    category: 'core',
    icon: Users,
    headline: 'Liquidación laboral completa y transmisión a la DIAN',
    description:
      'Calcula nómina quincenal o mensual: salarios, horas extras diurnas/nocturnas, dominicales, recargos, auxilio de transporte, deducciones de salud/pensión, libranzas y provisiones de prestaciones sociales.',
    features: [
      'Transmisión masiva de documentos soporte de nómina electrónica a la DIAN.',
      'Envío del desprendible de pago en PDF al correo de cada empleado.',
      'Liquidación de cesantías, intereses, prima de servicios y vacaciones.',
      'Generación de archivos planos para operadores de PILA.',
    ],
    mockup: {
      title: 'Nómina Electrónica Mensual',
      tag: 'DIAN: Transmisión Exitosa',
      items: [
        { label: 'Colaboradores', value: '24 empleados' },
        { label: 'Salarios Netos', value: '$42.180.000 COP' },
        { label: 'Aportes Seguridad Social', value: '$8.450.000 COP' },
        { label: 'Provisiones Prestacionales', value: '$9.210.000 COP' },
      ],
      highlight: '24 desprendibles DIAN aprobados',
    },
  },
  {
    id: 'proveedores',
    name: 'Proveedores & Compras',
    category: 'core',
    icon: Truck,
    headline: 'Gestión de compras, órdenes y cuentas por pagar (CxP)',
    description:
      'Administra el ciclo completo de compras: cotizaciones a proveedores, órdenes de compra, recepción de mercancías contra factura, control de pagos programados y registro de causación con retenciones.',
    features: [
      'Órdenes de compra con aprobación y recepción en almacén.',
      'Control de Cuentas por Pagar (CxP) con programación de vencimientos.',
      'Causación automática de facturas de proveedores con retenciones de ley.',
      'Histórico de precios por proveedor para negociaciones más ventajosas.',
    ],
    mockup: {
      title: 'Gestión de Compras & Proveedores',
      tag: 'CxP Programadas',
      items: [
        { label: 'Órdenes de Compra del Mes', value: '38 órdenes' },
        { label: 'Cuentas por Pagar Pendientes', value: '$18.400.000 COP' },
        { label: 'Proveedores Activos', value: '62 empresas' },
        { label: 'Ahorro en Negociación', value: '6.4% estimado' },
      ],
      highlight: 'Vencimientos de pagos bajo control',
    },
  },
  {
    id: 'cartera',
    name: 'Cartera & Cuentas x Cobrar',
    category: 'core',
    icon: CreditCard,
    headline: 'Notas crédito, notas débito, transmisión electrónica y monitoreo de recaudos',
    description:
      'Gestiona tus cuentas por cobrar, genera notas crédito y notas débito con transmisión electrónica directa ante la DIAN, clasifica por edades de vencimiento (30, 60, 90+ días) y concilia abonos parciales.',
    features: [
      'Emisión de notas crédito y notas débito con transmisión electrónica a la DIAN.',
      'Reporte de edades de cartera detallado y consolidado.',
      'Recordatorios automáticos de pago vía email y mensajes de WhatsApp.',
      'Registro de recibos de caja y abonos parciales a facturas múltiples.',
    ],
    mockup: {
      title: 'Módulo de Cartera & Recaudos',
      tag: 'Eficiencia de Cobro: 96%',
      items: [
        { label: 'Cartera Total Corriente', value: '$58.900.000 COP' },
        { label: 'Cartera Vencida (>30 días)', value: '$4.200.000 COP' },
        { label: 'Recaudos de la Semana', value: '$22.400.000 COP' },
        { label: 'Días Promedio de Cobro', value: '28 días' },
      ],
      highlight: 'Recaudos optimizados con avisos automáticos',
    },
  },
  {
    id: 'crm',
    name: 'CRM & Clientes',
    category: 'core',
    icon: HeartHandshake,
    headline: 'Embudo de ventas, seguimiento comercial y cotizaciones',
    description:
      'Convierte más prospectos en clientes fieles. Administra el pipeline comercial, envía cotizaciones profesionales con botón de aceptación digital y mantén el historial completo de llamadas, visitas y compras.',
    features: [
      'Embudo de ventas visual (leads, cotizaciones, negociaciones, cierres).',
      'Conversión de cotizaciones a facturas electrónicas con un solo clic.',
      'Historial de compras y preferencias de cada cliente.',
      'Métricas de rendimiento por asesor comercial y comisiones.',
    ],
    mockup: {
      title: 'Pipeline Comercial & CRM',
      tag: 'Tasa de Cierre: 34%',
      items: [
        { label: 'Cotizaciones Activas', value: '45 propuestas' },
        { label: 'Valor en Negociación', value: '$84.500.000 COP' },
        { label: 'Nuevos Clientes del Mes', value: '18 cuentas' },
        { label: 'Ticket Promedio', value: '$4.690.000 COP' },
      ],
      highlight: 'Ventas en constante crecimiento',
    },
  },
  {
    id: 'marketplace',
    name: 'Marketplace & Catálogos',
    category: 'core',
    icon: ShoppingBag,
    headline: 'Catálogo digital interactivo y tienda online sincronizada',
    description:
      'Crea tu catálogo digital con un clic y compártelo por WhatsApp, redes o tu propia tienda web. Los pedidos de tus clientes entran directo a UVA ERP, reservando el stock y generando la factura.',
    features: [
      'Catálogo online con fotos, precios y disponibilidad sincronizada.',
      'Pedidos directos por WhatsApp con botón de compra rápida.',
      'Integración con pasarelas de pago (Wompi, PayU, Bold, Nequi).',
      'Control de listas de precios especiales para mayoristas.',
    ],
    mockup: {
      title: 'Tienda Virtual & Catálogo Digital',
      tag: 'Ventas Online Activas',
      items: [
        { label: 'Pedidos por Catálogo', value: '142 órdenes' },
        { label: 'Ventas Digitales del Mes', value: '$19.800.000 COP' },
        { label: 'Productos en Catálogo', value: '480 referencias' },
        { label: 'Canal Principal', value: 'WhatsApp & Web' },
      ],
      highlight: 'Inventario físico y online 100% sincronizado',
    },
  },
  {
    id: 'parqueaderos',
    name: 'Módulo Parqueaderos',
    category: 'sector',
    icon: Car,
    headline: 'Control de entradas, tarifas por minuto, placas y mensualidades',
    description:
      'Especializado para parqueaderos públicos, comerciales y privados. Lectura de placas, tiquetes con código de barras o QR, cálculo automático de tarifas por minuto, fracción, hora, día o contratos mensuales.',
    features: [
      'Ingreso rápido digitando placa con impresión instantánea de tiquete.',
      'Tarifas configurables por tipo de vehículo (carro, moto, bicicleta, pesado).',
      'Control de mensualidades y alertas de vencimiento de abonados.',
      'Arqueo de caja por turnos de cajero con auditoría estricta contra fugas.',
    ],
    mockup: {
      title: 'Control de Parqueadero & Acceso',
      tag: 'Caja Parqueadero Activa',
      items: [
        { label: 'Vehículos en Parqueadero', value: '68 / 80 cupos (85%)' },
        { label: 'Tiquetes Emitidos Hoy', value: '284 entradas' },
        { label: 'Recaudo Total Turno', value: '$1.420.000 COP' },
        { label: 'Abonados / Mensualidades', value: '42 contratos activos' },
      ],
      highlight: 'Cero discrepancias en cobro de tarifas',
    },
  },
  {
    id: 'restaurantes',
    name: 'Módulo Restaurantes & Bares',
    category: 'sector',
    icon: UtensilsCrossed,
    headline: 'Comandas de cocina, control de mesas, propinas y recetas',
    description:
      'Solución completa para gastronomía. Mapa visual de mesas, comandas digitales enviadas a pantallas o impresoras de cocina, división de cuentas entre comensales, propina sugerida y costeo de platos por receta.',
    features: [
      'Mapa interactivo de mesas con estados (libre, ocupada, por cobrar).',
      'Comanderas móviles en celular o tablet para que los meseros tomen pedidos.',
      'Control de recetas y descarga automática de ingredientes del inventario.',
      'Integración con módulos de domicilios propios y plataformas de delivery.',
    ],
    mockup: {
      title: 'Turno de Restaurante & Mesas',
      tag: 'Servicio Activo: 14 Mesas',
      items: [
        { label: 'Mesa 8 - Zona Terraza', value: '3 comensales • $215.000 COP' },
        { label: 'Comanda Cocina', value: '2 Platos Fuertes en marcha' },
        { label: 'Propina Voluntaria (10%)', value: '$21.500 COP' },
        { label: 'Ventas del Turno Almuerzo', value: '$3.890.000 COP' },
      ],
      highlight: 'Cocina y caja sincronizadas al segundo',
    },
  },
  {
    id: 'ferreterias',
    name: 'Módulo Ferreterías',
    category: 'sector',
    icon: Wrench,
    headline: 'Unidades de medida, cortes, múltiples códigos y combos',
    description:
      'Diseñado para el comercio ferretero y de materiales de construcción. Permite vender por metros, kilos, rollos o cajas, manejar múltiples listas de precios para contratistas y gestionar miles de referencias fácilmente.',
    features: [
      'Ventas en unidades fraccionadas (metros de cable, kilos de puntillas, bolsas).',
      'Múltiples códigos para un mismo producto (código interno, fábrica, barras).',
      'Listas de precios diferenciadas (mostrador, instalador, contratista, mayorista).',
      'Cotizaciones con bloqueo de precios por tiempo determinado.',
    ],
    mockup: {
      title: 'Punto de Venta Ferretero',
      tag: 'Stock & Conversión Unidades',
      items: [
        { label: 'Tubo Conduit 1/2" x 3m', value: '85 tubos (255 metros)' },
        { label: 'Cemento Gris 50kg', value: '140 bultos en bodega' },
        { label: 'Tornillo Drywall 1 1/4"', value: '18 cajas x 1000 unds' },
        { label: 'Lista Activa', value: 'Precio Contratista (-8%)' },
      ],
      highlight: 'Conversión de medidas exacta sin descuadres',
    },
  },
  {
    id: 'droguerias',
    name: 'Módulo Droguerías & Farmacias',
    category: 'sector',
    icon: Pill,
    headline: 'Control estricto de lotes, fechas de vencimiento y registro INVIMA',
    description:
      'Cumple con toda la reglamentación farmacéutica en Colombia. Trazabilidad por número de lote, semaforización de medicamentos próximos a vencer, registro INVIMA y control de medicamentos de control especial.',
    features: [
      'Alerta temprana de medicamentos próximos a vencer (30, 60, 90 días).',
      'Control de principio activo, laboratorio fabricante y presentación comercial.',
      'Gestión de registro sanitario INVIMA visible en el comprobante.',
      'Búsqueda inteligente por nombre comercial o principio activo genérico.',
    ],
    mockup: {
      title: 'Control Farmacéutico & Vencimientos',
      tag: 'INVIMA & Lotes Activos',
      items: [
        { label: 'Lote INV-94812', value: 'Vence: 15/Nov/2026 (Semáforo Verde)' },
        { label: 'Medicamentos x Vencer (<60d)', value: '2 referencias en promo' },
        { label: 'Principio Activo Asociado', value: 'Ibuprofeno 800mg' },
        { label: 'Laboratorio', value: 'Genfar / Sanofi' },
      ],
      highlight: 'Cero pérdidas por medicamentos vencidos',
    },
  },
  {
    id: 'produccion',
    name: 'Módulo Producción & Manufactura',
    category: 'sector',
    icon: Factory,
    headline: 'Órdenes de ensamble, materias primas, mermas y costeo real',
    description:
      'Para talleres, fábricas y empresas transformadoras. Define la estructura de tus productos (Bill of Materials), crea órdenes de producción, consume materias primas, registra mermas y determina el costo exacto del producto terminado.',
    features: [
      'Listas de materiales (BOM) y fórmulas de ensamble por producto.',
      'Descarga automática de materia prima e ingreso de producto terminado.',
      'Costeo real considerando materia prima, mano de obra y costos indirectos (CIF).',
      'Trazabilidad de lotes de producción para auditorías de calidad.',
    ],
    mockup: {
      title: 'Orden de Producción OP-402',
      tag: 'Ensamble en Proceso',
      items: [
        { label: 'Producto a Fabricar', value: 'Vitamina C Efervescente x 20' },
        { label: 'Cantidad Programada', value: '5.000 unidades terminadas' },
        { label: 'Materia Prima Asignada', value: 'Ácido ascórbico 250 kg' },
        { label: 'Costo Unitario Calculado', value: '$3.850 COP / unidad' },
      ],
      highlight: 'Margen de producción controlado con precisión',
    },
  },
  {
    id: 'reportes',
    name: 'Reportes & Analítica BI',
    category: 'core',
    icon: BarChart3,
    headline: 'Tableros de control gerencial e indicadores de negocio en tiempo real',
    description:
      'Toma decisiones basadas en datos reales. Gráficos interactivos de ventas por vendedor, márgenes brutos de ganancia, rotación de productos, flujo de caja proyectado y cumplimiento de metas comerciales.',
    features: [
      'Dashboard gerencial con KPIs financieros y operativos actualizados.',
      'Reporte de rentabilidad por producto, cliente y línea de negocio.',
      'Flujo de caja histórico y proyectado a 30, 60 y 90 días.',
      'Exportación ilimitada a Excel, PDF y conexión con herramientas de BI.',
    ],
    mockup: {
      title: 'Tablero Gerencial de Analítica',
      tag: 'KPIs en Tiempo Real',
      items: [
        { label: 'Ingresos Netos del Mes', value: '$184.500.000 COP' },
        { label: 'Margen Bruto Promedio', value: '42.8%' },
        { label: 'Top Producto en Ventas', value: 'Línea Premium Industrial' },
        { label: 'Flujo de Caja Libre', value: '$45.200.000 COP' },
      ],
      highlight: 'Decisiones informadas con datos confiables',
    },
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(erpModules[0].id);
  const [filterCategory, setFilterCategory] = useState<'all' | 'core' | 'sector'>('all');

  const filteredModules =
    filterCategory === 'all'
      ? erpModules
      : erpModules.filter((m) => m.category === filterCategory);

  const currentModule = erpModules.find((m) => m.id === activeTab) || erpModules[0];
  const Icon = currentModule.icon;

  return (
    <section id="modulos" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
            Arquitectura 100% Modular
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Un ERP modular que se adapta al ADN exacto de tu negocio
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            En <strong>UVA ERP</strong> no estás obligado a pagar por herramientas que no utilizas. Activa únicamente los módulos administrativos o las especialidades que tu empresa necesita y escala a tu propio ritmo.
          </p>

          {/* Filtro de Módulos */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filterCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos los Módulos ({erpModules.length})
            </button>
            <button
              onClick={() => setFilterCategory('core')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filterCategory === 'core'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Administrativos & Core (8)
            </button>
            <button
              onClick={() => setFilterCategory('sector')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                filterCategory === 'sector'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sectores & Especialidades (6)
            </button>
          </div>
        </div>

        {/* Pestañas de Módulos */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12 max-w-6xl mx-auto">
          {filteredModules.map((m) => {
            const TabIcon = m.icon;
            const isActive = activeTab === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 border border-gray-200/80'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Panel con el Módulo Seleccionado */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-indigo-50/40 border border-indigo-100 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Descripción y Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                    {currentModule.category === 'core' ? 'Módulo Core UVA ERP' : 'Especialidad de UVA ERP'}
                  </span>
                  <p className="text-xs text-gray-400 font-semibold mt-0.5">Desarrollado por UVASOFT • Producto: UVA ERP</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                {currentModule.headline}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                {currentModule.description}
              </p>

              <div className="space-y-3 pt-2">
                {currentModule.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="#registro"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition shadow-md shadow-indigo-600/25 active:scale-95"
                >
                  Probar {currentModule.name} en vivo
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#precios"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm font-bold hover:bg-gray-50 transition"
                >
                  Ver planes con este módulo
                </a>
              </div>
            </div>

            {/* Mockup del Módulo */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-100">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs font-bold text-gray-800 ml-2">{currentModule.mockup.title}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-indigo-50 border border-indigo-200 text-indigo-700 px-2.5 py-1 rounded-full">
                    {currentModule.mockup.tag}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {currentModule.mockup.items.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 border border-gray-100/70 text-xs">
                      <span className="text-gray-500 font-medium">{it.label}</span>
                      <span className="font-bold text-gray-900">{it.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-indigo-950 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                    <span className="text-xs font-semibold text-indigo-200">Garantía UVA ERP</span>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-white">{currentModule.mockup.highlight}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
