import { Check, Download, TrendingUp, Smartphone, Video, Zap, Globe, Users, Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function AdaptacionTendencias() {
  const STORAGE_KEY = 'adaptacionTendencias_completedTrends';
  
  // Cargar estado desde localStorage
  const [completedTrends, setCompletedTrends] = useState<Set<number>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });
  
  const totalTrends = 5;
  const progress = (completedTrends.size / totalTrends) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedTrends)));
  }, [completedTrends]);

  const toggleTrend = (index: number) => {
    setCompletedTrends(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const tendencias = [
    {
      nombre: "Video Corto (Reels, TikTok, Shorts)",
      icono: <Video className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      porQue: "El 82% de las personas prefieren ver un video de 15 segundos que leer un post largo. Si no estás en video, eres invisible.",
      comoAdaptarte: [
        "Graba 1 video corto al día (15-60 segundos) mostrando tu día, un tip rápido, o una historia.",
        "No necesitas producción perfecta. Usa tu teléfono, luz natural, y sé tú mismo.",
        "Usa trending sounds (sonidos populares) para que el algoritmo te muestre a más gente.",
        "Termina cada video con un CTA simple: 'Sígueme para más tips' o 'Manda DM si quieres saber cómo'."
      ],
      herramientas: ["CapCut (edición gratis)", "Canva (miniaturas)", "TikTok/Instagram/YouTube Shorts"]
    },
    {
      nombre: "Marketing de Influencers (Micro-Influencers)",
      icono: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      porQue: "No necesitas 1 millón de seguidores. Con 1,000-10,000 seguidores comprometidos, ya eres un micro-influencer. La gente confía en personas reales, no en celebridades.",
      comoAdaptarte: [
        "Posiciónate como experto en 1 nicho específico (ej: 'Marketing en red para mamás trabajadoras').",
        "Comparte contenido educativo constante: tips, errores, lecciones aprendidas.",
        "Colabora con otros micro-influencers: haz lives juntos, comparte sus posts, crea alianzas.",
        "Monetiza tu audiencia: ofrece tu negocio de marketing en red como solución a sus problemas."
      ],
      herramientas: ["Instagram/TikTok (para crecer)", "Linktree (para centralizar links)", "Calendly (para agendar llamadas)"]
    },
    {
      nombre: "Automatización y Chatbots",
      icono: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      porQue: "No puedes responder 50 mensajes al día manualmente. La automatización te ahorra tiempo y cierra ventas mientras duermes.",
      comoAdaptarte: [
        "Configura respuestas automáticas en Instagram/Facebook para preguntas frecuentes.",
        "Usa un chatbot simple (ManyChat, Chatfuel) para calificar prospectos antes de hablar contigo.",
        "Crea un embudo automatizado: mensaje de bienvenida → video explicativo → link a llamada.",
        "Automatiza seguimientos: si alguien no responde en 3 días, el bot le envía un recordatorio."
      ],
      herramientas: ["ManyChat (chatbot para Instagram/Facebook)", "Zapier (conectar apps)", "Google Forms (capturar info)"]
    },
    {
      nombre: "Contenido Educativo (No Solo Venta)",
      icono: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      porQue: "La gente odia que le vendan, pero ama aprender. Si educas primero, la venta viene sola.",
      comoAdaptarte: [
        "Sigue la regla 80/20: 80% contenido educativo, 20% venta directa.",
        "Crea series educativas: 'Lunes de Motivación', 'Miércoles de Tips', 'Viernes de Historias de Éxito'.",
        "Responde preguntas reales de tu audiencia en videos o posts (usa encuestas para saber qué quieren aprender).",
        "Regala valor gratis: PDFs, checklists, mini-cursos. Construye confianza antes de pedir dinero."
      ],
      herramientas: ["Canva (crear PDFs/infografías)", "Google Docs (escribir recursos)", "Loom (grabar tutoriales)"]
    },
    {
      nombre: "Comunidades Privadas (Grupos, Discord, Telegram)",
      icono: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      porQue: "Las redes sociales son ruidosas. Las comunidades privadas crean lealtad. Tu equipo necesita un lugar donde sentirse parte de algo.",
      comoAdaptarte: [
        "Crea un grupo privado (Facebook, WhatsApp, Telegram) solo para tu equipo y prospectos calificados.",
        "Publica contenido exclusivo ahí: entrenamientos, sesiones de Q&A, celebraciones de logros.",
        "Fomenta interacción: pide que compartan sus victorias, hagan preguntas, se apoyen entre sí.",
        "Usa la comunidad para lanzar ofertas especiales: 'Solo para miembros del grupo'."
      ],
      herramientas: ["Facebook Groups (gratis y fácil)", "Telegram (más privado)", "Discord (para equipos grandes)"]
    }
  ];

  const checklist = [
    {
      categoria: "Video Corto",
      items: [
        "Descarga CapCut y practica editar 1 video simple",
        "Graba tu primer Reel/TikTok esta semana (aunque te dé pena)",
        "Usa 1 trending sound esta semana y observa el alcance",
        "Publica 3 videos cortos esta semana (lunes, miércoles, viernes)"
      ]
    },
    {
      categoria: "Micro-Influencer",
      items: [
        "Define tu nicho en 1 frase: 'Ayudo a [QUIÉN] a [QUÉ]'",
        "Publica 1 post educativo al día durante 7 días",
        "Colabora con 1 micro-influencer de tu nicho este mes",
        "Ofrece tu negocio en 1 de cada 5 posts (regla 80/20)"
      ]
    },
    {
      categoria: "Automatización",
      items: [
        "Configura respuestas automáticas en Instagram para preguntas frecuentes",
        "Crea un mensaje de bienvenida automático para nuevos seguidores",
        "Usa Google Forms para capturar info de prospectos interesados",
        "Programa 1 seguimiento automático para prospectos que no responden"
      ]
    },
    {
      categoria: "Contenido Educativo",
      items: [
        "Crea 1 PDF gratis con tips de tu nicho (usa Canva)",
        "Publica 4 posts educativos esta semana (80%) y 1 de venta (20%)",
        "Pregunta a tu audiencia qué quieren aprender (usa encuestas)",
        "Graba 1 tutorial corto resolviendo una duda común"
      ]
    },
    {
      categoria: "Comunidad Privada",
      items: [
        "Crea un grupo privado en Facebook o Telegram esta semana",
        "Invita a tu equipo actual y prospectos calificados",
        "Publica contenido exclusivo 3 veces por semana en el grupo",
        "Fomenta interacción: pide que compartan victorias y hagan preguntas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #3
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Adaptación a Nuevas Tendencias
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Mantente relevante y crece con las tendencias del mercado
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>5 Tendencias Actuales</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Checklist de Implementación</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Herramientas Recomendadas</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Tendencias Implementadas</span>
                <span className="text-sm sm:text-base font-bold">{completedTrends.size}/{totalTrends} completadas</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada tendencia que implementes para ver tu progreso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-cyan-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              El marketing cambia cada 6 meses. Lo que funcionaba el año pasado <strong className="text-cyan-600">ya no funciona hoy</strong>. Si no te adaptas, te quedas atrás.
            </p>
            <p>
              Los líderes que crecen son los que <strong className="text-cyan-600">adoptan las nuevas tendencias rápido</strong>. No necesitas ser experto, solo necesitas empezar antes que tu competencia.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> No se trata de seguir todas las tendencias. Se trata de elegir 1-2 que funcionen para ti y dominarlas.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-cyan-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> La Hoja de Ruta te da el camino. Estas tendencias te dan las herramientas MODERNAS para recorrerlo más rápido.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas funcionan mejor cuando las adaptas a las plataformas ACTUALES (video, chatbots, etc.).</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists te dan tareas. Estas tendencias te dan NUEVAS tareas para agregar y mantenerte relevante.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> Un líder que no se adapta pierde a su equipo. Estas tendencias te mantienen como líder innovador.</p>
            </div>
          </div>
        </div>

        {/* Tendencias */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            🚀 Las 5 Tendencias que Debes Dominar Ahora
          </h2>
          {tendencias.map((tendencia, index) => {
            const isCompleted = completedTrends.has(index);
            return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${isCompleted ? 'border-cyan-600' : 'border-gray-100'} transition-all`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${tendencia.color} text-white p-6 sm:p-8 ${isCompleted ? 'opacity-75' : ''}`}>
                <div className="flex items-start gap-4 mb-3">
                  <input 
                    type="checkbox" 
                    checked={isCompleted}
                    onChange={() => toggleTrend(index)}
                    className="w-6 h-6 mt-2 cursor-pointer accent-white"
                  />
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    {tendencia.icono}
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isCompleted ? 'line-through' : ''}`}>
                    {tendencia.nombre}
                  </h3>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    ¿Por Qué Importa?
                  </h4>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {tendencia.porQue}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    ✅ Cómo Adaptarte:
                  </h4>
                  <div className="space-y-3">
                    {tendencia.comoAdaptarte.map((paso, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg border-l-4 border-cyan-400"
                      >
                        <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                          {pIndex + 1}
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {paso}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <strong className="text-amber-700">🛠️ Herramientas:</strong> {tendencia.herramientas.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
        </div>

        {/* Checklist de Implementación */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-cyan-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            ✅ Checklist de Implementación (Próximas 4 Semanas)
          </h3>
          <div className="space-y-6">
            {checklist.map((cat, index) => (
              <div key={index}>
                <h4 className="text-lg sm:text-xl font-bold text-cyan-600 mb-3">
                  {cat.categoria}
                </h4>
                <div className="space-y-2">
                  {cat.items.map((item, iIndex) => (
                    <div
                      key={iIndex}
                      className="flex items-start gap-3 p-3 bg-cyan-50 rounded-lg border-2 border-gray-200 hover:border-cyan-400 transition-all"
                    >
                      <div className="w-6 h-6 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5"></div>
                      <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Adaptarse No Es Opcional, Es Supervivencia
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Elige 1 tendencia de esta lista y domínala en las próximas 4 semanas. 
            Luego pasa a la siguiente. En 6 meses, estarás años adelante de tu competencia.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-bold text-base sm:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all w-full sm:w-auto"
            onClick={() => window.location.href = '/upsell'}
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Ver Todos los Recursos Premium
          </Button>
        </div>
      </div>
    </div>
  );
}
