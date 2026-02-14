# Network Marketing Mastery - TODO

## Base de Datos y Backend
- [x] Migrar schema de base de datos con tablas users y user_progress
- [x] Configurar Drizzle ORM para MySQL
- [x] Migrar helpers de base de datos (getUserProgress, saveProgress)
- [x] Migrar routers tRPC con endpoints de autenticación
- [x] Implementar endpoints de seguimiento de progreso

## Frontend - Páginas Principales
- [x] Migrar página Home (landing page con funnel de ventas)
- [x] Migrar página Upsell ($19.97 pack premium)
- [x] Migrar página Downsell ($9.97 oferta especial)
- [x] Migrar página ThankYou (confirmación post-compra)
- [x] Migrar página NotFound (404)

## Frontend - Herramientas Principales ($9.97)
- [x] Migrar Hoja de Ruta Interactiva (15 pasos con checkboxes)
- [x] Migrar Plantillas para Contactos (15 plantillas probadas)
- [x] Migrar Checklists de Éxito Semanal (35 tareas)
- [x] Migrar Guías sobre Liderazgo (18 principios)

## Frontend - Recursos Premium ($19.97)
- [x] Migrar Estrategias de Atracción Efectivas
- [x] Migrar Taller de Habilidades de Liderazgo
- [x] Migrar Adaptación a Nuevas Tendencias
- [x] Migrar Programa de Motivación Colectiva
- [x] Migrar Rediseño de Vida y Propósito
- [x] Migrar Calculadora de Certeza

## Estilos y Diseño
- [x] Migrar estilos globales con paleta "Comunidad y Conexión"
- [x] Configurar colores: púrpura #7C4DFF, coral #FF7043, amarillo #FFD54F, crema #FFF8E1
- [x] Migrar configuración de Tailwind CSS
- [x] Migrar componentes UI personalizados
- [x] Migrar componentes shadcn/ui

## Hooks y Utilidades
- [x] Implementar hook useProgress para seguimiento de progreso
- [x] Configurar sincronización localStorage + base de datos
- [x] Migrar utilidades y helpers del frontend

## Configuración y Rutas
- [x] Configurar rutas en App.tsx para todas las páginas
- [x] Migrar configuración de Vite
- [x] Migrar configuración de TypeScript
- [x] Verificar configuración de tRPC client

## Testing y Verificación
- [x] Verificar funcionamiento de todas las páginas
- [x] Verificar seguimiento de progreso en herramientas
- [x] Verificar flujo completo del funnel de ventas
- [x] Crear tests unitarios para endpoints de progreso
- [ ] Crear checkpoint final

## Actualización de Precios (Febrero 2026)
- [x] Actualizar precio base de $7 a $9.97 en página Home
- [x] Actualizar precio en página Upsell ($19.99 a $19.97)
- [x] Actualizar precio en página Downsell ($9.99 a $9.97)
- [x] Verificar consistencia de precios en todo el funnel
- [x] Crear checkpoint con nuevos precios

## Diseño de Marketing (Febrero 2026)
- [x] Crear imagen de producto Pack Premium para Hotmart
- [x] Crear imagen Pack Premium con precio $19.97 visible
- [x] Crear imagen producto principal ($9.97) para Hotmart
- [x] Crear imagen producto principal sin precio para Hotmart
- [x] Documentar estilos CSS de botones para Hotmart

## Integración con Hotmart (Febrero 2026)
- [x] Integrar widget de Sales Funnel en página Upsell
- [x] Integrar widget de Sales Funnel en página Downsell
- [x] Verificar funcionamiento del checkout (compilación exitosa)

## Documentación (Febrero 2026)
- [x] Actualizar precios en README.md
- [x] Actualizar precios en GUIA_RAPIDA.md
- [x] Actualizar precios en VERIFICACION.md
- [x] Actualizar precios en todo.md
- [x] Verificar consistencia en toda la documentación

## Modal de Checkout (Febrero 2026)
- [x] Crear tabla checkout_leads en schema de base de datos
- [x] Crear endpoint tRPC para guardar leads
- [x] Crear componente CheckoutModal
- [x] Integrar modal en todos los botones de Home (3 botones CTA)
- [x] Verificar redirección a Hotmart con datos pre-rellenados
- [x] Crear y ejecutar tests unitarios (5/5 pasaron)
