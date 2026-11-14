---
title: "Plataforma Fintech Aurora"
description: "Rediseño arquitectónico y migración completa a Astro + React para una fintech líder en pagos transfronterizos."
client: "Aurora Financial Group"
year: 2025
category: "Fintech & Web App"
image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
tags:
  - "Astro"
  - "React"
  - "TypeScript"
  - "Tailwind CSS"
  - "Cloudflare Pages"
metrics:
  - label: "PageSpeed Score"
    value: "99/100"
  - label: "Reducción de Latencia"
    value: "-65%"
  - label: "Incremento Conversión"
    value: "+34%"
featured: true
---

## El Desafío

Aurora operaba sobre una arquitectura monolítica con tiempos de carga superiores a los 4.5 segundos en dispositivos móviles. Esta fricción causaba una tasa de rebote del 48% en sus landing pages de captación de clientes institucionales.

## La Solución

Implementamos una arquitectura moderna basada en Astro utilizando el patrón de **Astro Islands**:

- **Arquitectura de islas**: El contenido estático se entrega como HTML puro desde el Edge con Cloudflare Pages.
- **Calculadora interactiva en React**: Solo el cotizador de divisas en tiempo real carga JavaScript en el navegador.
- **Validación con Zod**: Formularios de onboarding tipados y seguros contra ataques comunes.

## Resultados

En los primeros 60 días tras el lanzamiento, el equipo de Aurora reportó un aumento del 34% en solicitudes de apertura de cuenta y una puntuación perfecta en Core Web Vitals.

