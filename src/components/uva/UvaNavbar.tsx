import React, { useState, useEffect } from 'react';
import {
  FileText,
  Calculator,
  Users,
  Package,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Truck,
  CreditCard,
  Car,
  UtensilsCrossed,
  Wrench,
  Pill,
  Factory,
  BarChart3,
  ShoppingBag,
  HeartHandshake,
  Zap
} from 'lucide-react';
import UvaLogo from './UvaLogo';

export default function UvaNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-indigo-100 shadow-md shadow-indigo-900/5'
          : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent border-b border-white/15'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo UVA SOFT / UVA ERP con colores de marca y dinamismo */}
          <div className="flex items-center gap-6 shrink-0">
            <a href="/" className="flex items-center gap-2.5 group shrink-0 whitespace-nowrap">
              <div className="shrink-0 group-hover:scale-105 transition-transform">
                <UvaLogo className="w-11 h-12" />
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span
                    className={`font-display text-2xl font-black tracking-tight italic transition-colors ${
                      isScrolled ? 'text-[#1E3047]' : 'text-white'
                    }`}
                  >
                    UVA<span className={isScrolled ? 'text-[#7C3AED]' : 'text-amber-300'}>SOFT</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap ${
                      isScrolled
                        ? 'bg-[#7C3AED] text-white'
                        : 'bg-white/20 text-white border border-white/30'
                    }`}
                  >
                    UVA ERP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span
                    className={`text-[10px] font-mono font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded whitespace-nowrap transition-colors ${
                      isScrolled
                        ? 'text-[#3366CC] bg-indigo-50 border border-indigo-200'
                        : 'text-white/90 bg-white/10 border border-white/25 backdrop-blur-sm'
                    }`}
                  >
                    Usability * Velocity * Automatizations
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 whitespace-nowrap">
              
              {/* Dropdown Módulos ERP */}
              <div
                className="relative shrink-0"
                onMouseEnter={() => setActiveDropdown('modulos')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-xl transition whitespace-nowrap ${
                    isScrolled
                      ? 'text-[#1E3047] hover:text-[#7C3AED] hover:bg-indigo-50/70'
                      : 'text-white hover:bg-white/15'
                  }`}
                  onClick={() => toggleDropdown('modulos')}
                >
                  <span>Módulos UVA ERP</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 ${isScrolled ? 'text-[#7C3AED]' : 'text-amber-300'}`} />
                </button>

                {activeDropdown === 'modulos' && (
                  <div className="absolute top-full left-0 w-[640px] bg-white rounded-2xl shadow-2xl shadow-indigo-950/15 border border-indigo-100 p-5 grid grid-cols-2 gap-3.5 z-50 whitespace-normal">
                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Contabilidad NIIF Instantánea</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Balances en vivo, PUC predefinido y exógena.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Facturación Electrónica (0.28s)</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Facturas, pedidos, remisiones, cotizaciones y devoluciones.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Package className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Inventarios Multi-Bodega</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Bodegas ilimitadas y Kardex sincronizado al instante.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Cartera & Transmisión</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Notas crédito, notas débito, transmisión electrónica y recaudo.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Proveedores & Compras</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Órdenes de compra, recepción de facturas y CxP.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Nómina Electrónica</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Liquidación veloz y transmisión electrónica.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">CRM de Clientes</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Seguimiento comercial rápido y fidelización.</p>
                      </div>
                    </a>

                    <a href="#modulos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <ShoppingBag className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Marketplace & Catálogos</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Tienda virtual conectada en vivo con tu stock.</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Dropdown Sectores Especializados */}
              <div
                className="relative shrink-0"
                onMouseEnter={() => setActiveDropdown('sectores')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-xl transition whitespace-nowrap ${
                    isScrolled
                      ? 'text-[#1E3047] hover:text-[#7C3AED] hover:bg-indigo-50/70'
                      : 'text-white hover:bg-white/15'
                  }`}
                  onClick={() => toggleDropdown('sectores')}
                >
                  <span>Sectores & Especialidades</span>
                  <span className="text-[10px] font-extrabold bg-[#7C3AED] text-white px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    AÑO 1 GRATIS
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 ${isScrolled ? 'text-[#7C3AED]' : 'text-amber-300'}`} />
                </button>

                {activeDropdown === 'sectores' && (
                  <div className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-2xl shadow-indigo-950/15 border border-indigo-100 p-5 grid grid-cols-2 gap-3.5 z-50 whitespace-normal">
                    <a href="#parqueaderos" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Car className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Parqueaderos QR</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Liquidación en 0.18s por minuto, placas y mensualidades.</p>
                      </div>
                    </a>

                    <a href="#restaurantes" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <UtensilsCrossed className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Restaurantes & Bares</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Comandas instantáneas a cocina, mesas y propinas.</p>
                      </div>
                    </a>

                    <a href="#ferreterias" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Ferreterías & Materiales</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Venta rápida por metro, kilo, rollo y listas de precios.</p>
                      </div>
                    </a>

                    <a href="#droguerias" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <Pill className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Droguerías & Farmacias</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Control FEFO de lotes, vencimientos e INVIMA.</p>
                      </div>
                    </a>

                    <a href="#produccion" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3366CC] flex items-center justify-center shrink-0 group-hover:bg-[#3366CC] group-hover:text-white transition">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#3366CC] mb-0.5">Producción & Fábricas</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Órdenes de ensamble BOM, materia prima y costeo.</p>
                      </div>
                    </a>

                    <a href="#reportes" className="p-3 rounded-xl hover:bg-indigo-50/80 transition flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:bg-[#7C3AED] group-hover:text-white transition">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#1E3047] group-hover:text-[#7C3AED] mb-0.5">Reportes en Tiempo Real</p>
                        <p className="text-[11px] text-gray-500 leading-snug whitespace-normal">Rentabilidad, flujo de caja y márgenes al instante.</p>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* Precios */}
              <a
                href="#precios"
                className={`px-3 py-2 text-sm font-bold rounded-xl transition whitespace-nowrap shrink-0 ${
                  isScrolled
                    ? 'text-[#1E3047] hover:text-[#7C3AED] hover:bg-indigo-50/70'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                Precios
              </a>

              {/* Para Contadores */}
              <a
                href="#contadores"
                className={`px-3 py-2 text-sm font-bold rounded-xl transition whitespace-nowrap shrink-0 ${
                  isScrolled
                    ? 'text-[#1E3047] hover:text-[#7C3AED] hover:bg-indigo-50/70'
                    : 'text-white hover:bg-white/15'
                }`}
              >
                Para Contadores
              </a>
            </nav>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-3 shrink-0 whitespace-nowrap">
            <a
              href="#registro"
              className={`text-sm font-bold transition px-3 py-2 whitespace-nowrap shrink-0 ${
                isScrolled ? 'text-[#1E3047] hover:text-[#7C3AED]' : 'text-white hover:text-amber-300'
              }`}
            >
              Ingresar
            </a>

            <a
              href="#registro"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#3366CC] text-white font-black text-sm uppercase tracking-wider transition shadow-lg shadow-purple-900/20 hover:scale-[1.03] active:scale-95 whitespace-nowrap shrink-0"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">Probar Gratis 15 Días</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-xl transition ${
                isScrolled ? 'text-[#1E3047] hover:bg-indigo-50' : 'text-white hover:bg-white/15'
              }`}
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden border-b border-indigo-100 bg-white px-5 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <p className="text-xs font-black text-[#3366CC] uppercase tracking-wider px-2 py-1">Módulos Básicos UVA ERP</p>
            <a href="#modulos" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Calculator className="w-4 h-4 text-[#3366CC]" /> Contabilidad & Facturación (0.28s)
            </a>
            <a href="#modulos" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Package className="w-4 h-4 text-[#3366CC]" /> Inventarios, Proveedores & Cartera
            </a>
            <a href="#modulos" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Users className="w-4 h-4 text-[#7C3AED]" /> Nómina Electrónica & CRM
            </a>
            <a href="#modulos" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <ShoppingBag className="w-4 h-4 text-[#7C3AED]" /> Marketplace & Catálogos Digitales
            </a>
          </div>

          <div className="pt-2 border-t border-indigo-100 space-y-1">
            <p className="text-xs font-black text-[#7C3AED] uppercase tracking-wider px-2 py-1">Módulos Especializados (Gratis 1er Año)</p>
            <a href="#parqueaderos" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Car className="w-4 h-4 text-[#3366CC]" /> Parqueaderos & Tarifas QR
            </a>
            <a href="#restaurantes" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <UtensilsCrossed className="w-4 h-4 text-[#7C3AED]" /> Restaurantes, Bares & Comandas
            </a>
            <a href="#ferreterias" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Wrench className="w-4 h-4 text-[#3366CC]" /> Ferreterías & Materiales
            </a>
            <a href="#droguerias" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Pill className="w-4 h-4 text-[#7C3AED]" /> Droguerías, Lotes & INVIMA
            </a>
            <a href="#produccion" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              <Factory className="w-4 h-4 text-[#3366CC]" /> Producción & Manufactura
            </a>
          </div>

          <div className="pt-3 border-t border-indigo-100 space-y-2">
            <a href="#precios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              Planes y Precios
            </a>
            <a href="#contadores" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-[#1E3047] hover:bg-indigo-50 rounded-lg">
              Portal para Contadores
            </a>
            <a
              href="#registro"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7C3AED] text-white font-black text-sm uppercase tracking-wider shadow-lg"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Probar UVA ERP 15 días gratis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
