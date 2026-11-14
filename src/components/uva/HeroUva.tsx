import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Zap,
  CheckCircle2,
  Activity,
  Gauge,
  Flame,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers
} from 'lucide-react';

type SectorKey = 'general' | 'restaurante' | 'parqueadero' | 'ferreteria' | 'drogueria' | 'produccion';

const SECTOR_KEYS: SectorKey[] = [
  'general',
  'restaurante',
  'parqueadero',
  'ferreteria',
  'drogueria',
  'produccion',
];

export default function HeroUva() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeSector, setActiveSector] = useState<SectorKey>('general');
  const [autoCycle, setAutoCycle] = useState(true);

  // Estado del reproductor de video Pantalla Completa (Toma 1 estilo Ferrari)
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const heroVideoSlides = [
    {
      overline: '01 // UVASOFT PRESENTA · USABILITY * VELOCITY * AUTOMATIZATIONS',
      title: 'UVA ERP EN MOVIMIENTO',
      subtitle: 'El software bandera de UVASOFT: arquitectura modular diseñada para operar a 0.28 segundos.',
      ctaText: 'DESCUBRIR EL PRODUCTO UVA ERP',
      ctaHref: '#segunda-toma',
    },
    {
      overline: '02 // INGENIERÍA UVASOFT · ESCALABILIDAD SIN LÍMITES',
      title: 'UVA ERP: BODEGAS Y SEDES ILIMITADAS',
      subtitle: 'Crece en toda Colombia con UVA ERP sincronizado en tiempo real en PC, POS, Tablet y Móvil.',
      ctaText: 'EXPLORAR UVA ERP',
      ctaHref: '#segunda-toma',
    },
    {
      overline: '03 // BENEFICIO EXCLUSIVO UVASOFT ($66.900/MES)',
      title: 'MÓDULOS EXTRA DE UVA ERP A $0 COP',
      subtitle: 'Activa el Plan Básico Anual de UVA ERP y recibe gratis todos los módulos adicionales durante el 1er año.',
      ctaText: 'VER PLANES DE UVA ERP',
      ctaHref: '#precios',
    },
  ];

  // Rotación de los títulos cinematográficos sobre el video pantalla completa
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroVideoSlides.length);
    }, 5500);
    return () => clearInterval(slideTimer);
  }, []);

  // Simulador de Velocidad en Vivo (Cronómetro de Emisión UVA ERP en Toma 2)
  const [isSimulating, setIsSimulating] = useState(false);
  const [simTimer, setSimTimer] = useState(28); // 0.28s
  const [liveTxCount, setLiveTxCount] = useState(14892);
  const [liveFeedIndex, setLiveFeedIndex] = useState(0);

  const liveEvents = [
    {
      tag: 'MOTOR UVA ERP',
      title: 'Factura #FE-9841 emitida y sincronizada',
      time: '0.26s',
      detail: 'Contabilidad NIIF + Cartera actualizadas al instante',
    },
    {
      tag: 'RESTAURANTES POS',
      title: 'Comanda Mesa #14 enviada a Cocina y Bar',
      time: '0.11s',
      detail: 'Receta descontada de inventario automáticamente',
    },
    {
      tag: 'PARQUEADERO QR',
      title: 'Salida Placa KLM-942 liquidada en caja',
      time: '0.18s',
      detail: 'Recibo POS emitido al instante sin filas',
    },
    {
      tag: 'MULTI-BODEGA',
      title: 'Traslado entre 4 sucursales sincronizado',
      time: '0.09s',
      detail: 'Kardex promedio ponderado recalculado en vivo',
    },
  ];

  // Rotación automática de eventos en tiempo real y contador de operaciones
  useEffect(() => {
    const eventInterval = setInterval(() => {
      setLiveFeedIndex((prev) => (prev + 1) % liveEvents.length);
      setLiveTxCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2800);
    return () => clearInterval(eventInterval);
  }, []);

  // Rotación automática de sectores si el usuario no ha pausado
  useEffect(() => {
    if (!autoCycle) return;
    const sectorInterval = setInterval(() => {
      setActiveSector((prev) => {
        const idx = SECTOR_KEYS.indexOf(prev);
        return SECTOR_KEYS[(idx + 1) % SECTOR_KEYS.length];
      });
    }, 4500);
    return () => clearInterval(sectorInterval);
  }, [autoCycle]);

  // Controles de video pantalla completa
  const togglePlayVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMuteVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Disparador del test de velocidad en vivo (0.00s -> 0.28s)
  const triggerSpeedTest = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimTimer(0);
    let current = 0;
    const timer = setInterval(() => {
      current += 2;
      if (current >= 28) {
        setSimTimer(28);
        setIsSimulating(false);
        setLiveTxCount((prev) => prev + 1);
        clearInterval(timer);
      } else {
        setSimTimer(current);
      }
    }, 25);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const sectorData: Record<
    SectorKey,
    {
      label: string;
      speedBadge: string;
      headline: string;
      desc: string;
      speedStat: string;
      savingNote: string;
    }
  > = {
    general: {
      label: '⚡ 6 Módulos Base',
      speedBadge: 'MOTOR UVA ERP · 0.28 SEGUNDOS',
      headline: 'UVA ERP: Facturación, Cartera, Inventarios y Contabilidad en un solo clic',
      desc: 'Registra una venta y mira cómo UVA ERP emite la factura, descuenta bodega, alimenta cartera y genera el asiento contable automáticamente en milisegundos.',
      speedStat: '300% más rápido que un software tradicional',
      savingNote: 'Incluido en el Plan Base ($66.900/mes anual)',
    },
    restaurante: {
      label: '🍽️ Restaurantes & POS',
      speedBadge: 'COMANDAS EN 0.11 SEGUNDOS',
      headline: 'Disparo instantáneo a cocina, mapa de mesas en vivo y propinas',
      desc: 'Toma el pedido desde tablet o celular y la comanda suena en cocina al instante. Divide cuentas, controla recetas y factura en caja sin cuellos de botella.',
      speedStat: '+45% más rotación de mesas en hora pico',
      savingNote: 'GRATIS todo el 1er año con tu Plan Básico Anual ($0 COP)',
    },
    parqueadero: {
      label: '🚗 Parqueaderos QR',
      speedBadge: 'LIQUIDACIÓN EN 0.18 SEGUNDOS',
      headline: 'Lectura veloz de placas y QR sin filas en la barrera de salida',
      desc: 'Cálculo exacto al milisegundo por minuto, hora, fracción o mensualidad. Cierres de turno blindados y facturación POS instantánea.',
      speedStat: 'Cero filas y 0% fugas de dinero en turno',
      savingNote: 'GRATIS todo el 1er año con tu Plan Básico Anual ($0 COP)',
    },
    ferreteria: {
      label: '🔧 Ferreterías',
      speedBadge: 'BÚSQUEDA EN 0.05 SEGUNDOS',
      headline: 'Vende por metro, kilo, rollo o bulto a velocidad de mostrador',
      desc: 'Cotiza 50 ítems en segundos y conviértelos en factura o remisión con un clic. Kardex sincronizado entre todas tus bodegas y sucursales sin límite.',
      speedStat: 'Atención de mostrador 3 veces más ágil',
      savingNote: 'GRATIS todo el 1er año con tu Plan Básico Anual ($0 COP)',
    },
    drogueria: {
      label: '💊 Droguerías INVIMA',
      speedBadge: 'ALERTA FEFO EN TIEMPO REAL',
      headline: 'Dispensación rápida por blíster, sobre o caja con control de lotes',
      desc: 'Lector de código de barras ultra-rápido con bloqueo automático de medicamentos próximos a vencer y trazabilidad INVIMA al instante.',
      speedStat: '0% pérdidas por vencimiento de lotes',
      savingNote: 'GRATIS todo el 1er año con tu Plan Básico Anual ($0 COP)',
    },
    produccion: {
      label: '🏭 Producción & BOM',
      speedBadge: 'COSTEO AUTOMÁTICO EN VIVO',
      headline: 'Transforma materia prima en producto terminado sin hojas de Excel',
      desc: 'Órdenes de producción por etapas, explosión de materiales (BOM), control de mermas y contabilización automática del costo real.',
      speedStat: 'Control exacto de costos en tiempo real',
      savingNote: 'GRATIS todo el 1er año con tu Plan Básico Anual ($0 COP)',
    },
  };

  const current = sectorData[activeSector];
  const currentLiveEvent = liveEvents[liveFeedIndex];
  const currentVideoSlide = heroVideoSlides[activeHeroSlide];

  return (
    <div className="w-full">
      {/* =====================================================================
          PRIMERA TOMA (ESTILO FERRARI.COM): VIDEO PANTALLA COMPLETA (100VH)
      ===================================================================== */}
      <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#070B14] text-white overflow-hidden select-none">
        {/* Video a Pantalla Completa de borde a borde */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/plataformas_1.jpeg"
        >
          {/* Ruta local lista para colocar tu propio video en public/videos/demo-uva-erp.mp4 */}
          <source src="/videos/demo-uva-erp.mp4" type="video/mp4" />
          {/* Video HD de respaldo mientras colocas tu archivo local */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-Hands-of-a-man-working-on-a-laptop-and-smartphone-41646-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Velo Cinematográfico Oscuro estilo Ferrari para lectura perfecta */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,15,45,0.45) 0%, rgba(15,15,45,0.15) 45%, rgba(15,15,45,0.88) 100%)',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0F2D]/80 via-transparent to-transparent" />

        {/* Controles Superiores de Cabina sobre el Video (debajo del Header Transparente Flotante) */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-24 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 bg-[#1E3047]/80 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap">
              UVASOFT // PRODUCTO: UVA ERP EN VIVO
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlayVideo}
              className="px-3.5 py-2 rounded-full bg-[#1E3047]/80 hover:bg-[#7C3AED] backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition whitespace-nowrap"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span>{isPlaying ? 'PAUSAR VIDEO' : 'REPRODUCIR'}</span>
            </button>
            <button
              type="button"
              onClick={toggleMuteVideo}
              className="p-2 rounded-full bg-[#1E3047]/80 hover:bg-[#3366CC] backdrop-blur-md border border-white/20 text-white transition"
              title={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Contenido Inferior Cinematográfico Estilo Ferrari */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-8 sm:pb-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-[#C0C0C0] mb-3">
                {currentVideoSlide.overline}
              </p>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white mb-4 italic">
                {currentVideoSlide.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl mb-6 font-medium">
                {currentVideoSlide.subtitle}
              </p>

              {/* Botón de Descubrimiento con Círculo de Flecha Estilo Ferrari */}
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={currentVideoSlide.ctaHref}
                  className="group inline-flex items-center gap-4 text-white font-display text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  <span>{currentVideoSlide.ctaText}</span>
                  <span className="w-12 h-12 rounded-full border-2 border-white group-hover:border-[#7C3AED] group-hover:bg-[#7C3AED] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>

                <a
                  href="#registro"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#1E3047] backdrop-blur-md border border-white/30 font-extrabold text-xs uppercase tracking-[0.18em] transition whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Probar Gratis 15 Días</span>
                </a>
              </div>
            </div>

            {/* Barra de Progreso de 3 Tomas Estilo Ferrari + Botón de Bajar a Segunda Toma */}
            <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 flex-1 max-w-2xl">
                {heroVideoSlides.map((slide, idx) => {
                  const isCurrent = activeHeroSlide === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveHeroSlide(idx)}
                      className="text-left group"
                    >
                      <div className="w-full h-[3px] bg-white/25 mb-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isCurrent ? 'w-full bg-[#7C3AED]' : 'w-0 group-hover:w-1/2 bg-white/60'
                          }`}
                        />
                      </div>
                      <span
                        className={`font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] block truncate ${
                          isCurrent ? 'text-white font-extrabold' : 'text-gray-400 group-hover:text-white'
                        }`}
                      >
                        0{idx + 1} · {slide.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <a
                href="#segunda-toma"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition whitespace-nowrap self-start sm:self-auto"
              >
                <span>VER POTENCIA UVA ERP</span>
                <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SEGUNDA TOMA (ESPACIO COMPLETO DEDICADO A UVA ERP SIN IMAGEN PEQUEÑA)
      ===================================================================== */}
      <section
        id="segunda-toma"
        className="relative bg-gradient-to-b from-white via-indigo-50/40 to-white text-[#1E3047] overflow-hidden border-b border-indigo-100 scroll-mt-20"
      >
        {/* FONDO DINÁMICO BLANCO CON ESTELAS DE VELOCIDAD EN COLORES UVA (#3366CC y #7C3AED) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                'linear-gradient(115deg, rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(51,102,204,0.06) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />

          {/* Estelas de velocidad animadas en Púrpura UVA y Azul Eléctrico */}
          <div className="absolute top-[20%] left-0 w-96 h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-speed-line-1" />
          <div className="absolute top-[48%] left-0 w-[500px] h-[2px] bg-gradient-to-r from-transparent via-[#3366CC] to-transparent animate-speed-line-2" />
          <div className="absolute top-[76%] left-0 w-80 h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-speed-line-3" />

          {/* Resplandores suaves UVA sobre blanco */}
          <div className="absolute -top-24 right-0 w-[650px] h-[550px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-[#3366CC]/10 rounded-full blur-[120px]" />
        </div>

        {/* CINTA CONTINUA DE ALTA VELOCIDAD (MARQUEE EN VIVO CON COLORES UVA) */}
        <div className="relative z-10 bg-indigo-50/90 border-b border-indigo-100 py-2.5 overflow-hidden">
          <div className="animate-marquee-fast flex items-center gap-10 text-xs font-mono uppercase tracking-wider">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex items-center gap-10 shrink-0">
                <span className="flex items-center gap-2 text-[#7C3AED] font-extrabold">
                  <Zap className="w-3.5 h-3.5 fill-[#7C3AED] text-[#7C3AED]" />
                  POTENCIA UVA ERP EN VIVO: 0.28 SEGUNDOS POR OPERACIÓN
                </span>
                <span className="text-indigo-200">|</span>
                <span className="flex items-center gap-2 text-[#1E3047] font-semibold">
                  <Gauge className="w-3.5 h-3.5 text-[#3366CC]" />
                  OPERACIONES PROCESADAS HOY EN UVA ERP: <strong className="text-[#3366CC] font-extrabold">{liveTxCount.toLocaleString('es-CO')}</strong>
                </span>
                <span className="text-indigo-200">|</span>
                <span className="flex items-center gap-2 text-[#7C3AED] font-extrabold">
                  <Flame className="w-3.5 h-3.5 fill-[#7C3AED] text-[#7C3AED]" />
                  PLAN ANUAL ($66.900/MES): TODOS LOS MÓDULOS ADICIONALES GRATIS EL 1ER AÑO ($0 COP)
                </span>
                <span className="text-indigo-200">|</span>
                <span className="flex items-center gap-2 text-[#1E3047] font-semibold">
                  <Layers className="w-3.5 h-3.5 text-[#3366CC]" />
                  BODEGAS, SUCURSALES Y USUARIOS ADMIN ILIMITADOS
                </span>
                <span className="text-indigo-200">|</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENIDO DE LA SEGUNDA TOMA A ANCHO COMPLETO (100% PROTAGONISMO PARA UVA ERP) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-16 lg:pt-16 lg:pb-24">
          
          {/* Cabecera centrada de alto impacto */}
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-10">
            
            {/* Insignias Aerodinámicas Inclinadas (-skew-x-6) + Evento en Vivo */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 -skew-x-6 shadow-sm whitespace-nowrap shrink-0">
                <span className="skew-x-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#3366CC] whitespace-nowrap">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
                  </span>
                  POR UVASOFT · PRODUCTO OFICIAL UVA ERP
                </span>
              </div>

              <a
                href="#precios"
                className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#1E3047] text-white px-3.5 py-1.5 -skew-x-6 transition shadow-md shadow-purple-900/15 whitespace-nowrap shrink-0"
              >
                <span className="skew-x-6 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
                  <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
                  1er Año: Todos los Módulos Extra GRATIS ($0 COP)
                </span>
              </a>

              <div className="inline-flex items-center gap-2 bg-white border border-indigo-200 px-3.5 py-1.5 -skew-x-6 shadow-sm whitespace-nowrap shrink-0">
                <span className="skew-x-6 flex items-center gap-2 text-xs font-bold text-[#1E3047]">
                  <Zap className="w-3.5 h-3.5 text-[#7C3AED] fill-[#7C3AED]" />
                  <span>{currentLiveEvent.tag}:</span>
                  <strong className="text-[#7C3AED] font-mono">{currentLiveEvent.time}</strong>
                </span>
              </div>
            </div>

            {/* Titular Monumental a Ancho Completo */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[68px] font-bold tracking-tight leading-[1.02] text-[#1E3047]">
              <span className="text-[#7C3AED] font-black">UVA ERP:</span> Crecimiento modular y control total a{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3366CC] via-[#7C3AED] to-[#1E3047] italic pr-2">
                velocidad récord.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Desarrollado por <strong className="text-[#1E3047]">UVASOFT</strong>, nuestro software <strong className="text-[#7C3AED]">UVA ERP</strong> impulsa toda tu empresa: factura al instante, sincroniza inventarios multi-bodega, controla cartera y automatiza tu contabilidad en <strong className="text-[#7C3AED] font-bold">menos de un tercio de segundo</strong>.
            </p>
          </div>

          {/* PANEL CENTRAL AMPLIO: SELECTOR DINÁMICO DE SECTORES + SIMULADOR DE VELOCIDAD EN VIVO */}
          <div
            className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-900/10 mb-10"
            onMouseEnter={() => setAutoCycle(false)}
            onMouseLeave={() => setAutoCycle(true)}
          >
            {/* Cabecera del Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-indigo-100">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#3366CC] font-extrabold flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#7C3AED] animate-pulse" />
                DINAMISMO MODULAR EN TIEMPO REAL — ELIGE TU SECTOR:
              </span>
              <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#7C3AED] bg-purple-50 border border-purple-200 px-3.5 py-1 rounded-full">
                {current.speedBadge}
              </span>
            </div>

            {/* Botonera de Sectores Amplia */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
              {SECTOR_KEYS.map((key) => {
                const isActive = activeSector === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setActiveSector(key);
                      setAutoCycle(false);
                    }}
                    className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap text-center ${
                      isActive
                        ? 'bg-[#7C3AED] text-white shadow-lg shadow-purple-900/25 scale-[1.02]'
                        : 'bg-indigo-50/70 text-[#1E3047] hover:bg-indigo-100 border border-indigo-100'
                    }`}
                  >
                    {sectorData[key].label}
                  </button>
                );
              })}
            </div>

            {/* Detalle del Sector Seleccionado + Cronómetro Interactivo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Info del Sector (7 columnas) */}
              <div className="lg:col-span-7 bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-2xl font-extrabold text-[#1E3047] mb-2">
                    {current.headline}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    {current.desc}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-indigo-100 text-xs sm:text-sm">
                  <span className="font-extrabold text-[#3366CC] flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-[#7C3AED]" />
                    {current.speedStat}
                  </span>
                  <span className="font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    ✓ {current.savingNote}
                  </span>
                </div>
              </div>

              {/* Simulador de Velocidad UVA ERP (5 columnas) */}
              <div className="lg:col-span-5 bg-[#1E3047] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-200 font-bold block">
                      CRONÓMETRO MOTOR UVA ERP
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-mono text-3xl font-extrabold text-amber-400">
                        0.{simTimer.toString().padStart(2, '0')}s
                      </span>
                      <span className="text-xs font-bold text-white">
                        {isSimulating ? 'Acelerando...' : '¡Respuesta Instantánea!'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={triggerSpeedTest}
                    className="px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#3366CC] text-white font-extrabold text-xs uppercase tracking-wider transition flex items-center gap-1.5 shadow-md active:scale-95 whitespace-nowrap shrink-0"
                  >
                    <Play className="w-3.5 h-3.5 fill-white shrink-0" />
                    <span>Probar 0.28s</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                    <div className="flex justify-between text-white font-bold mb-1">
                      <span>1. VENTA</span>
                      <span className="text-amber-300 font-extrabold">0.12s</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all duration-150"
                        style={{ width: `${Math.min(100, (simTimer / 12) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                    <div className="flex justify-between text-white font-bold mb-1">
                      <span>2. KARDEX</span>
                      <span className="text-sky-300 font-extrabold">0.08s</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sky-400 transition-all duration-150"
                        style={{ width: `${Math.min(100, Math.max(0, ((simTimer - 10) / 10) * 100))}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/15">
                    <div className="flex justify-between text-white font-bold mb-1">
                      <span>3. CONTABLE</span>
                      <span className="text-emerald-300 font-extrabold">0.08s</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 transition-all duration-150"
                        style={{ width: `${Math.min(100, Math.max(0, ((simTimer - 18) / 10) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FORMULARIO DE ARRANQUE INSTANTÁNEO CENTRADO A ANCHO AMPLIO */}
          <div id="registro" className="max-w-3xl mx-auto scroll-mt-24">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo empresarial para activar tu cuenta..."
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-indigo-200 text-[#1E3047] placeholder-gray-400 focus:outline-none focus:border-[#7C3AED] shadow-md transition text-sm sm:text-base font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#1E3047] text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-purple-900/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 shrink-0 whitespace-nowrap"
                >
                  <Zap className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
                  <span className="whitespace-nowrap">Probar Gratis 15 Días</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </form>
            ) : (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm sm:text-base font-bold flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <span>¡Motor activado! Revisa <strong>{email}</strong> para entrar en segundos a tu prueba de 15 días.</span>
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 font-bold">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />
                15 días gratis sin tarjeta de crédito
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#3366CC]" />
                Bodegas, sucursales y admins ilimitados
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Plan Anual ($66.900/mes): Módulos extra gratis el 1er año
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
