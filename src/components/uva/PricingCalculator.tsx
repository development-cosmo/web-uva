import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Users,
  Building2,
  UtensilsCrossed,
  Car,
  Wrench,
  Pill,
  Factory,
  Briefcase,
  ShoppingBag,
  Layers,
  Infinity as InfinityIcon,
  Crown,
  Gift
} from 'lucide-react';
import UvaLogo from './UvaLogo';

interface AdditionalModule {
  id: string;
  name: string;
  category: 'gestion' | 'especialidad';
  description: string;
  monthlyPrice: number;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export default function PricingCalculator() {
  const [isAnnual, setIsAnnual] = useState(true);

  // Precios base fijos oficial UVA ERP
  const BASE_MONTHLY_PRICE = 98825;
  const BASE_ANNUAL_PRICE = 66900;
  const ANNUAL_DISCOUNT_RATIO = 66900 / 98825; // ~32.3% de ahorro en pago anual

  // Módulos básicos incluidos en el precio base
  const basicModules = [
    { name: 'Módulo de Administración', desc: 'Configuración general, roles y control operativo de la empresa' },
    { name: 'Facturación electrónica DIAN', desc: 'Pedidos, remisiones, cotizaciones, devoluciones y facturas de venta' },
    { name: 'Módulo de Cartera', desc: 'Notas crédito, notas débito, transmisión electrónica y cuentas por cobrar' },
    { name: 'Módulo de Inventario', desc: 'Kardex en tiempo real, múltiples listas de precios y control de stock' },
    { name: 'Módulo de Proveedores', desc: 'Cuentas por pagar (CxP), órdenes de compra y control de egresos' },
    { name: 'Módulo de Contabilidad', desc: 'Contabilidad NIIF, plan único de cuentas (PUC), balances y auxiliares' },
  ];

  // Capacidades ILIMITADAS incluidas en el precio base
  const unlimitedPerks = [
    { title: 'Bodegas ilimitadas', desc: 'Crea todas las bodegas de almacenamiento que requieras sin costo adicional' },
    { title: 'Sucursales ilimitadas', desc: 'Opera múltiples sedes o puntos de venta sin pagar licencias extras' },
    { title: 'Usuarios administradores ilimitados', desc: 'Todo tu equipo directivo y operativo con rol de administración' },
  ];

  // Módulos adicionales disponibles
  const additionalModules: AdditionalModule[] = [
    // Gestión y Expansión Comercial
    {
      id: 'nomina',
      name: 'Nómina Electrónica DIAN',
      category: 'gestion',
      description: 'Liquidación de nómina, devengos, deducciones y transmisión directa a la DIAN.',
      monthlyPrice: 35000,
      icon: Users,
      badge: 'Popular',
    },
    {
      id: 'crm',
      name: 'CRM de Clientes & Cotizaciones',
      category: 'gestion',
      description: 'Pipeline comercial, cotizaciones formales y seguimiento de clientes.',
      monthlyPrice: 30000,
      icon: Briefcase,
    },
    {
      id: 'marketplace',
      name: 'Marketplace & Tienda Online',
      category: 'gestion',
      description: 'Catálogo digital en la web conectado al inventario para ventas online y WhatsApp.',
      monthlyPrice: 35000,
      icon: ShoppingBag,
    },

    // Sectores Especializados
    {
      id: 'restaurante',
      name: 'Especialidad Restaurantes & Bares',
      category: 'especialidad',
      description: 'Comandas táctiles a cocina, mapa visual de mesas, cuentas separadas y propinas.',
      monthlyPrice: 40000,
      icon: UtensilsCrossed,
      badge: 'Sectorial',
    },
    {
      id: 'parqueadero',
      name: 'Especialidad Parqueaderos',
      category: 'especialidad',
      description: 'Tarifas por minuto, hora, día o mensualidad con liquidación automática y tiquetes.',
      monthlyPrice: 40000,
      icon: Car,
      badge: 'Sectorial',
    },
    {
      id: 'ferreteria',
      name: 'Especialidad Ferreterías & Materiales',
      category: 'especialidad',
      description: 'Venta por metros, kilos, bultos o fracciones con múltiples listas de precios y códigos de barras.',
      monthlyPrice: 40000,
      icon: Wrench,
      badge: 'Sectorial',
    },
    {
      id: 'drogueria',
      name: 'Especialidad Droguerías & Farmacias',
      category: 'especialidad',
      description: 'Control de lotes, fechas de vencimiento, registros INVIMA y dispensación.',
      monthlyPrice: 40000,
      icon: Pill,
      badge: 'Sectorial',
    },
    {
      id: 'produccion',
      name: 'Especialidad Producción & Manufactura',
      category: 'especialidad',
      description: 'Estructuras de ensamble (BOM), órdenes de producción y control de materias primas.',
      monthlyPrice: 50000,
      icon: Factory,
      badge: 'Sectorial',
    },
  ];

  // Estado de módulos adicionales seleccionados
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Cálculo de totales dinámicos
  // PROMOCIÓN: Pagando el plan básico en facturación anual, TODOS los módulos adicionales son GRATIS el 1er año
  const currentBasePrice = isAnnual ? BASE_ANNUAL_PRICE : BASE_MONTHLY_PRICE;

  const modulesSubtotal = isAnnual
    ? 0
    : selectedModules.reduce((acc, modId) => {
        const mod = additionalModules.find((m) => m.id === modId);
        return acc + (mod ? mod.monthlyPrice : 0);
      }, 0);

  // Ahorro que recibe el cliente en módulos adicionales durante el primer año
  const annualSavedFromModules = selectedModules.reduce((acc, modId) => {
    const mod = additionalModules.find((m) => m.id === modId);
    return acc + (mod ? mod.monthlyPrice * 12 : 0);
  }, 0);

  const effectiveMonthly = currentBasePrice + modulesSubtotal;
  const totalAnnualBilled = effectiveMonthly * 12;

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="precios" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full inline-block mb-3">
            Precios Modulares Transparentes • UVA ERP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Precio base fijo + solo los módulos que uses
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            En <strong>UVA SOFT</strong> el Plan Base Fijo te entrega los módulos esenciales para operar sin límites de bodegas, sucursales ni usuarios administradores. Agrega solo los módulos especializados que tu negocio necesite.
          </p>

          {/* Selector Segmentado: Facturación Mensual vs Facturación Anual */}
          <div className="flex items-center justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200/80 shadow-inner">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  !isAnnual
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                    : 'text-gray-600 hover:text-indigo-900 hover:bg-white/60'
                }`}
              >
                Facturación Mensual
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 ${
                  isAnnual
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                    : 'text-gray-600 hover:text-indigo-900 hover:bg-white/60'
                }`}
              >
                <span>Facturación Anual</span>
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full transition-colors ${
                    isAnnual ? 'bg-white text-indigo-700' : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  Módulos Gratis 1er Año 🎁
                </span>
              </button>
            </div>
          </div>

          {/* Banner Promocional: Módulos adicionales GRATIS el primer año */}
          <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-600 via-indigo-700 to-purple-800 text-white shadow-xl shadow-indigo-900/15 border-2 border-emerald-400/40 relative overflow-hidden text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 text-amber-300 shadow-inner">
                  <Gift className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400 text-emerald-950 font-black text-[10px] uppercase tracking-wider mb-1">
                    🎁 Oferta Especial Primer Año
                  </div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight">
                    ¡El primer año pagando los módulos básicos, todos los módulos adicionales son GRATIS!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-snug mt-1">
                    Paga tu primer año del Plan Base Fijo a tarifa preferencial ({formatCOP(BASE_ANNUAL_PRICE)}/mes) y activa <strong>todos los módulos adicionales que tu negocio necesite por $0 COP</strong> durante los primeros 12 meses.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`shrink-0 px-5 py-3 rounded-2xl font-black text-xs transition-all shadow-md active:scale-95 ${
                  isAnnual
                    ? 'bg-emerald-400 text-emerald-950 shadow-emerald-400/30'
                    : 'bg-white text-indigo-900 hover:bg-emerald-50'
                }`}
              >
                {isAnnual ? '✓ Promo 1er Año Activa' : 'Activar Promo 1er Año'}
              </button>
            </div>
          </div>
        </div>

        {/* Layout en dos columnas: Selector Modular a la izquierda, Resumen a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: Plan Base Fijo + Módulos Adicionales (7 cols) */}
          <div className="lg:col-span-7 space-y-6">

            {/* 1. PLAN BASE FIJO (CORE UVA ERP) */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#1E3047] via-[#1E3047] to-[#0F0F2D] text-white border-2 border-indigo-400 shadow-xl shadow-indigo-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Plan Base Fijo Esencial</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-indigo-200 block font-semibold">
                    {isAnnual ? 'Facturación Anual:' : 'Facturación Mensual:'}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-white">
                      {formatCOP(isAnnual ? BASE_ANNUAL_PRICE : BASE_MONTHLY_PRICE)}
                    </span>
                    <span className="text-xs text-indigo-300">/mes</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-2 flex items-center gap-2">
                <span>Módulos Básicos Incluidos</span>
                <Crown className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed mb-6">
                Tu suscripción base incluye de forma permanente los 6 módulos neurálgicos de administración y control:
              </p>

              {/* Grid de los 6 Módulos Básicos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {basicModules.map((mod, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-indigo-300/15 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-0.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{mod.name}</span>
                    </div>
                    <p className="text-[11px] text-indigo-200/80 pl-6 leading-tight">
                      {mod.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Destacado: TODO ESTO ES ILIMITADO */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-indigo-500/20 to-purple-500/15 border border-emerald-400/40">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300 mb-2.5">
                  <InfinityIcon className="w-4 h-4 text-emerald-400" />
                  <span>Sin restricciones de crecimiento (100% Ilimitado en la base)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {unlimitedPerks.map((perk, pIdx) => (
                    <div key={pIdx} className="text-left">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{perk.title}</span>
                      </div>
                      <p className="text-[10px] text-indigo-200/80 leading-snug mt-0.5">
                        {perk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 2. MÓDULOS ADICIONALES ACTIVABLES */}
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-indigo-100/80 shadow-sm shadow-indigo-100/50">
              <div className="mb-6">
                <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  Potencia Tu ERP
                </span>
                <h4 className="text-xl font-black text-gray-900">
                  Módulos Adicionales a la Medida
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Activa solo las herramientas adicionales que tu sector o equipo necesite.
                </p>
              </div>

              {/* Categoría: Gestión y Expansión */}
              <div className="mb-6">
                <h5 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Módulos de Gestión y Nómina
                </h5>
                <div className="space-y-3">
                  {additionalModules
                    .filter((m) => m.category === 'gestion')
                    .map((mod) => {
                      const isSelected = selectedModules.includes(mod.id);
                      const IconComp = mod.icon;
                      const modPrice = isAnnual ? Math.round(mod.monthlyPrice * ANNUAL_DISCOUNT_RATIO) : mod.monthlyPrice;

                      return (
                        <div
                          key={mod.id}
                          onClick={() => toggleModule(mod.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                            isSelected
                              ? 'bg-indigo-50/70 border-indigo-600 shadow-sm shadow-indigo-100'
                              : 'bg-white border-gray-200/80 hover:border-indigo-300 hover:bg-gray-50/50'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition ${
                                isSelected
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold text-gray-900">
                                  {mod.name}
                                </span>
                                {mod.badge && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.2 rounded bg-indigo-100 text-indigo-700">
                                    {mod.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                                {mod.description}
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            {isAnnual ? (
                              <div>
                                <span className="text-[11px] text-gray-400 line-through block">
                                  +{formatCOP(mod.monthlyPrice)}/mes
                                </span>
                                <span className="text-xs sm:text-sm font-black text-emerald-600 block">
                                  ¡GRATIS 1er año!
                                </span>
                                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                  $0 COP
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span className="text-xs sm:text-sm font-black text-indigo-700 block">
                                  +{formatCOP(mod.monthlyPrice)}
                                </span>
                                <span className="text-[10px] text-gray-400">/mes</span>
                              </div>
                            )}
                            <div className="mt-1 flex justify-end">
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                                  isSelected
                                    ? 'bg-indigo-600 border-indigo-600 text-white'
                                    : 'border-gray-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Categoría: Especialidades por Sector */}
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Módulos Especializados por Sector Económico
                </h5>
                <div className="space-y-3">
                  {additionalModules
                    .filter((m) => m.category === 'especialidad')
                    .map((mod) => {
                      const isSelected = selectedModules.includes(mod.id);
                      const IconComp = mod.icon;
                      const modPrice = isAnnual ? Math.round(mod.monthlyPrice * ANNUAL_DISCOUNT_RATIO) : mod.monthlyPrice;

                      return (
                        <div
                          key={mod.id}
                          onClick={() => toggleModule(mod.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                            isSelected
                              ? 'bg-indigo-50/70 border-indigo-600 shadow-sm shadow-indigo-100'
                              : 'bg-white border-gray-200/80 hover:border-indigo-300 hover:bg-gray-50/50'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition ${
                                isSelected
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              <IconComp className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold text-gray-900">
                                  {mod.name}
                                </span>
                                {mod.badge && (
                                  <span className="text-[10px] font-black uppercase px-2 py-0.2 rounded bg-indigo-100 text-indigo-700">
                                    {mod.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                                {mod.description}
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            {isAnnual ? (
                              <div>
                                <span className="text-[11px] text-gray-400 line-through block">
                                  +{formatCOP(mod.monthlyPrice)}/mes
                                </span>
                                <span className="text-xs sm:text-sm font-black text-emerald-600 block">
                                  ¡GRATIS 1er año!
                                </span>
                                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                  $0 COP
                                </span>
                              </div>
                            ) : (
                              <div>
                                <span className="text-xs sm:text-sm font-black text-indigo-700 block">
                                  +{formatCOP(mod.monthlyPrice)}
                                </span>
                                <span className="text-[10px] text-gray-400">/mes</span>
                              </div>
                            )}
                            <div className="mt-1 flex justify-end">
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                                  isSelected
                                    ? 'bg-indigo-600 border-indigo-600 text-white'
                                    : 'border-gray-300 bg-white'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

            </div>

          </div>

          {/* COLUMNA DERECHA: Resumen de Cotización en Tiempo Real (5 cols, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-indigo-600 shadow-2xl shadow-indigo-600/10">
              
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full inline-block">
                    Cotización Dinámica
                  </span>
                  <h4 className="text-lg font-black text-gray-900 mt-1">Tu UVA ERP Personalizado</h4>
                </div>
                <UvaLogo className="w-11 h-12 shrink-0" />
              </div>

              {/* Desglose de Precios */}
              <div className="space-y-3 mb-6">
                
                {/* Item Base */}
                <div className="p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-900 mb-1">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Plan Base Fijo ({isAnnual ? 'Facturación Anual' : 'Facturación Mensual'})</span>
                    </div>
                    <span className="font-black text-indigo-700">
                      {formatCOP(isAnnual ? BASE_ANNUAL_PRICE : BASE_MONTHLY_PRICE)}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    Incluye Administración, Facturación DIAN, Cartera, Inventario, Proveedores, Contabilidad + Bodegas, Sucursales y Usuarios administradores ilimitados.
                  </p>
                </div>

                {/* Módulos adicionales seleccionados */}
                {selectedModules.length > 0 ? (
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400 block">
                        Módulos Adicionales Activos:
                      </span>
                      {isAnnual && (
                        <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          🎁 100% Gratis 1er Año
                        </span>
                      )}
                    </div>
                    {selectedModules.map((modId) => {
                      const mod = additionalModules.find((m) => m.id === modId);
                      if (!mod) return null;

                      return (
                        <div key={modId} className="flex items-center justify-between text-xs text-gray-700 pl-1">
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                            <span className="truncate font-medium">{mod.name}</span>
                          </div>
                          {isAnnual ? (
                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="text-[11px] text-gray-400 line-through">
                                +{formatCOP(mod.monthlyPrice)}
                              </span>
                              <span className="font-black text-emerald-600 text-xs">
                                $0 COP
                              </span>
                            </div>
                          ) : (
                            <span className="font-bold text-indigo-700 shrink-0">+{formatCOP(mod.monthlyPrice)}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[11px] text-gray-400 italic text-center py-2">
                    No has agregado módulos adicionales aún.
                  </p>
                )}
              </div>

              {/* Total Final */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/50 border border-indigo-100 mb-6">
                <span className="text-xs font-black text-indigo-700 uppercase tracking-wider block mb-1">
                  {isAnnual ? 'Facturación Anual Estimada' : 'Facturación Mensual Estimada'}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-indigo-700 tracking-tight">
                    {formatCOP(effectiveMonthly)}
                  </span>
                  <span className="text-xs text-gray-500 font-bold">/mes</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  {isAnnual
                    ? `Facturación Anual: ${formatCOP(totalAnnualBilled)} / año (¡Módulos adicionales 100% GRATIS por el 1er año!)`
                    : 'Facturación Mensual recurrente sin cláusula de permanencia'}
                </p>

                {isAnnual && selectedModules.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-emerald-200/80 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span className="flex items-center gap-1">
                      <span>🎁 Regalo 1er año en módulos:</span>
                    </span>
                    <span className="font-black text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                      +{formatCOP(annualSavedFromModules)} COP Ahorrados
                    </span>
                  </div>
                )}
              </div>

              {/* Botón CTA */}
              <a
                href="#registro"
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-95 text-center mb-4"
              >
                <span>Probar esta configuración 15 días gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="pt-3 border-t border-gray-100 space-y-1.5 text-[11px] text-gray-500">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Sin contratos de amarre: cancela cuando quieras</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Bodegas, sucursales y admin ilimitados incluidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Activa o retira módulos con 1 clic</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Garantías Footer de Precios */}
        <div className="mt-14 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-gray-600 text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Sin contratos de amarre: puedes cancelar cuando desees</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Activación de módulos en minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Resoluciones DIAN 2025 actualizadas automáticamente</span>
          </div>
        </div>

      </div>
    </section>
  );
}
