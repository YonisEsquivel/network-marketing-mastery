import { useEffect, useState } from "react";

export default function Upsell() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simular barra de carga
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowContent(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: "Estrategias de Atracción Efectivas",
      image: "/upsell-mockups/producto-1-atraccion.png",
      description: "Tácticas específicas sobre cómo utilizar las redes sociales y otros medios de contacto para atraer nuevos prospectos de forma constante.",
      price: 19.97,
      format: "Guía Paso a Paso"
    },
    {
      id: 2,
      name: "Taller de Habilidades de Liderazgo",
      image: "/upsell-mockups/producto-2-liderazgo.png",
      description: "Ejercicios prácticos y consejos sobre cómo inspirar y acompañar a otros en su viaje de marketing en red. Conviértete en un líder efectivo.",
      price: 19.97,
      format: "Workbook Interactivo"
    },
    {
      id: 3,
      name: "Adaptación a Nuevas Tendencias",
      image: "/upsell-mockups/producto-3-tendencias.png",
      description: "Herramientas y pautas sobre cómo implementar las nuevas tendencias de marketing y ajustar tu enfoque para mantenerte relevante.",
      price: 19.97,
      format: "Checklist Actualizable"
    },
    {
      id: 4,
      name: "Programa de Motivación Colectiva",
      image: "/upsell-mockups/producto-4-motivacion.png",
      description: "Recursos y actividades para mantener alta la moral en el equipo y comprometer a cada miembro hacia el éxito colectivo.",
      price: 19.97,
      format: "Plan de Acción"
    },
    {
      id: 5,
      name: "Rediseño de Vida y Propósito",
      image: "/upsell-mockups/producto-5-proposito.png",
      description: "Alinea tus metas personales con tu negocio. Integra tus deseos y objetivos en tu estrategia de marketing para vivir con propósito.",
      price: 19.97,
      format: "Hoja de Ruta Personal"
    },
    {
      id: 6,
      name: "Calculadora de Certeza: Tu Plan de Libertad Diaria",
      image: "/upsell-mockups/producto-6-calculadora.png",
      description: "Herramienta de ingeniería inversa que traduce tus metas económicas en acciones diarias simples. Calcula tu 'Número Mágico Diario' de prospectos.",
      price: 19.97,
      format: "Software Interactivo"
    },
  ];

  const totalIndividual = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Barra de carga */}
      {!showContent && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-4">
          <div className="max-w-md w-full space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary mb-4"></div>
              <h2 className="text-2xl font-bold text-foreground">
                Creando tu área de miembros...
              </h2>
              <p className="text-muted-foreground">
                Estamos preparando todo para ti
              </p>
            </div>

            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>

            <p className="text-center text-sm text-gray-500">
              {loadingProgress}% completado
            </p>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      {showContent && (
        <div className="container max-w-6xl mx-auto px-4 py-12 animate-fade-in">
          {/* Header con copy persuasivo */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ OFERTA EXCLUSIVA - SOLO AQUÍ
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              ¡Felicidades! Ya tienes Network Marketing Mastery 🎉
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Pero antes de que empieces, necesito contarte algo importante...
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary p-6 rounded-r-lg text-left">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                <strong className="text-primary">El 70% de las personas que han tenido éxito inicial en el marketing en red enfrentan un nuevo problema:</strong>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Logran establecer su negocio. Consiguen sus primeros prospectos. Generan sus primeras ventas. 
                <strong className="text-foreground"> Todo eso lo logran.</strong>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Pero después... <strong className="text-primary">¿Y ahora qué?</strong>
              </p>

              <ul className="space-y-3 text-muted-foreground mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">❌</span>
                  <span>No saben cómo motivar y liderar nuevos miembros de la red</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">❌</span>
                  <span>Sienten estrés al intentar equilibrar la vida personal con el crecimiento profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">❌</span>
                  <span>Tienen dificultad para innovar y mantenerse actualizados con las tendencias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">❌</span>
                  <span>La presión de mantener siempre un crecimiento constante genera ansiedad</span>
                </li>
              </ul>

              <p className="text-lg font-semibold text-foreground">
                Logran establecer su negocio... pero no saben cómo sostener su crecimiento.
              </p>
            </div>

            <p className="text-xl text-foreground leading-relaxed">
              Y es por eso que creé el <strong className="text-primary">Pack Premium de Crecimiento Sostenible</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Son 6 recursos que te acompañan <strong>paso a paso</strong> en lo que viene después del éxito inicial. 
              No solo para que lo mantengas, sino para que <strong className="text-primary">nunca más vuelvas a sentirte estancado</strong>.
            </p>
          </div>

          {/* Productos en grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Lo que incluye el Pack Premium
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada uno de estos productos se vende individualmente a $19.97. 
              Pero hoy, solo en esta página, puedes llevarte los 6 por un único pago.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => {
                // Gradientes alternados para cada card
                const gradients = [
                  'from-green-400 to-emerald-500',
                  'from-blue-400 to-cyan-500',
                  'from-yellow-400 to-amber-500',
                  'from-teal-400 to-green-500',
                  'from-indigo-400 to-blue-500',
                  'from-orange-400 to-yellow-500'
                ];
                const gradient = gradients[index % gradients.length];
                
                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-2 border-gray-100 hover:border-primary/20"
                  >
                    {/* Imagen del producto con gradiente mejorado */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Gradiente de fondo */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      {/* Patrón decorativo */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-20 -translate-x-20"></div>
                      </div>

                      {/* Contenido de la imagen */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const placeholder = document.createElement('div');
                              placeholder.className = 'w-full h-full flex flex-col items-center justify-center text-center';
                              placeholder.innerHTML = `
                                <div class="w-32 h-32 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mb-6 shadow-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
                                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <p class="text-base font-bold text-muted-foreground px-4">${product.format}</p>
                              `;
                              parent.appendChild(placeholder);
                            }
                          }}
                        />
                      </div>

                      {/* Badge de formato mejorado */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}>
                          {product.format}
                        </div>
                      </div>

                      {/* Número del producto */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-lg font-bold text-muted-foreground">{product.id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contenido mejorado */}
                    <div className="p-5 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-base md:text-sm">
                        {product.description}
                      </p>

                      {/* Precio individual con diseño mejorado */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border-2 border-gray-200">
                        <span className="text-sm font-semibold text-muted-foreground">Valor individual:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-400 line-through">
                            ${product.price}
                          </span>
                          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sección de comparación de precios */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Valor Total del Pack Premium
                </h3>

                {/* Precio individual vs Pack */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2">Si compras cada uno por separado:</p>
                    <p className="text-4xl md:text-5xl font-bold line-through opacity-75">
                      ${totalIndividual.toFixed(2)}
                    </p>
                  </div>

                  <div className="text-4xl md:text-5xl font-bold">→</div>

                  <div className="text-center">
                    <p className="text-sm opacity-90 mb-2">Precio del Pack Premium HOY:</p>
                    <p className="text-5xl md:text-6xl font-bold">
                      $19.97
                    </p>
                    <p className="text-sm opacity-90 mt-2">Un único pago</p>
                  </div>
                </div>

                {/* Ahorro */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
                  <p className="text-lg">
                    <strong>Ahorras ${(totalIndividual - 19.99).toFixed(2)}</strong> (83% de descuento)
                  </p>
                </div>

                {/* Beneficios */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-sm">Acceso inmediato a los 6 recursos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-sm">Acceso web 24/7</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="text-sm">Tuyos para siempre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
              <p className="text-lg font-semibold text-yellow-900 mb-2">
                ⚠️ Esta oferta SOLO está disponible en esta página
              </p>
              <p className="text-yellow-800">
                Si sales ahora, perderás el acceso al Pack Premium para siempre. 
                No podrás volver a acceder a este precio.
              </p>
            </div>

            {/* Botón CTA */}
            <div id="hotmart-upsell-button" className="py-8">
              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 shadow-2xl hover:shadow-primary/50 transition-all cursor-pointer">
                <p className="text-3xl font-bold mb-4">
                  Sí, quiero el Pack Premium por $19.97
                </p>
                <p className="text-lg opacity-90">
                  Porque estoy listo para sostener mi crecimiento a largo plazo
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              * Pago único. Acceso inmediato. Garantía de 7 días.
            </p>
          </div>

          {/* Sección final de persuasión */}
          <div className="max-w-3xl mx-auto mt-16 text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              ¿Por qué necesitas el Pack Premium?
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Porque establecer tu negocio es solo el primer paso. Lo que viene después es lo que determina 
              si vas a <strong className="text-primary">estancarte</strong> o si vas a 
              <strong className="text-primary"> crecer exponencialmente</strong>.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg text-left">
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Imagina esto:</strong>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                En 30 días, no solo habrás mantenido tu negocio. También sabrás exactamente cómo liderar tu equipo, 
                qué estrategias usar, y cómo construir un crecimiento sostenible.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                No más estancamiento. No más ansiedad por el futuro. No más sentirte perdido después del éxito inicial.
              </p>
            </div>

            <p className="text-xl font-semibold text-foreground">
              Este es tu momento de decidir: ¿Mantienes el éxito o lo multiplicas para siempre?
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
