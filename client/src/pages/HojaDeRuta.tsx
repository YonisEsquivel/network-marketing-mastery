import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Lightbulb, Target, TrendingUp, Users, Zap, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/useProgress";

export default function HojaDeRuta() {
  // Use custom hook for DB + localStorage sync
  const [completedSteps, setCompletedSteps, isLoading] = useProgress<string[]>(
    'hoja_ruta',
    []
  );
  
  // Ensure completedSteps is always an array
  const safeCompletedSteps = Array.isArray(completedSteps) ? completedSteps : [];
  const completedSet = new Set(safeCompletedSteps);
  const totalSteps = 15; // 5 fases × 3 pasos cada una
  const progress = (completedSet.size / totalSteps) * 100;

  const toggleStep = (faseIndex: number, pasoIndex: number) => {
    const stepId = `${faseIndex}-${pasoIndex}`;
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return Array.from(newSet);
    });
  };

  const fases = [
    {
      numero: 1,
      titulo: "Preparación: Define Tu Por Qué",
      duracion: "Semana 1",
      color: "from-green-400 to-emerald-500",
      pasos: [
        {
          titulo: "Escribe tu razón principal",
          descripcion: "¿Por qué quieres tener éxito en el marketing en red? Puede ser pagar deudas, viajar más, ayudar a tu familia, o tener más tiempo libre.",
          ejemplo: "Ejemplo: 'Quiero ganar $2,000 extra al mes para pagar la universidad de mi hijo.'"
        },
        {
          titulo: "Identifica tus miedos",
          descripcion: "¿Qué te da miedo? ¿Hablar con desconocidos? ¿Que te digan que no? Escríbelo. Conocer tus miedos es el primer paso para superarlos.",
          ejemplo: "Ejemplo: 'Me da miedo que mis amigos piensen que soy vendedor molesto.'"
        },
        {
          titulo: "Establece tu meta mensual",
          descripcion: "¿Cuánto dinero quieres ganar al mes? Sé específico. No digas 'mucho', di un número exacto.",
          ejemplo: "Ejemplo: '$1,500 al mes en 3 meses.'"
        }
      ]
    },
    {
      numero: 2,
      titulo: "Construcción: Crea Tu Lista de Contactos",
      duracion: "Semana 2-3",
      color: "from-blue-400 to-cyan-500",
      pasos: [
        {
          titulo: "Haz una lista de 100 personas",
          descripcion: "Escribe el nombre de todas las personas que conoces: familia, amigos, compañeros de trabajo, vecinos, gente del gym, etc. No importa si crees que no les interesa.",
          ejemplo: "Usa tu lista de contactos del teléfono, Facebook, Instagram."
        },
        {
          titulo: "Clasifícalos en 3 grupos",
          descripcion: "Grupo A: Personas que confían en ti (familia cercana, mejores amigos). Grupo B: Conocidos que te respetan. Grupo C: Contactos nuevos o lejanos.",
          ejemplo: "Empieza siempre por el Grupo A, son los más fáciles."
        },
        {
          titulo: "Prepara tu mensaje inicial",
          descripcion: "Crea un mensaje corto y natural para romper el hielo. No vendas todavía, solo reconecta.",
          ejemplo: "'¡Hola! ¿Cómo has estado? Hace tiempo que no hablamos.'"
        }
      ]
    },
    {
      numero: 3,
      titulo: "Acción: Contacta a 5 Personas Diarias",
      duracion: "Semana 4-8",
      color: "from-yellow-400 to-amber-500",
      pasos: [
        {
          titulo: "Usa la regla del 5-2-1",
          descripcion: "Contacta a 5 personas al día. De esas 5, al menos 2 responderán. De esas 2, al menos 1 mostrará interés. Esto es un juego de números.",
          ejemplo: "Si contactas 5 al día durante 30 días = 150 contactos = 30 interesados."
        },
        {
          titulo: "Haz preguntas, no vendas",
          descripcion: "En lugar de decir 'Tengo un negocio increíble', pregunta: '¿Estarías abierto a ganar dinero extra desde casa?' Deja que ellos pregunten.",
          ejemplo: "'¿Te gustaría tener más ingresos sin dejar tu trabajo actual?'"
        },
        {
          titulo: "Comparte tu historia",
          descripcion: "Cuenta por qué TÚ empezaste. La gente se conecta con historias reales, no con discursos de ventas.",
          ejemplo: "'Yo empecé porque quería pagar mis deudas y en 3 meses logré...'"
        }
      ]
    },
    {
      numero: 4,
      titulo: "Crecimiento: Construye Tu Equipo",
      duracion: "Mes 3-6",
      color: "from-teal-400 to-green-500",
      pasos: [
        {
          titulo: "Identifica a tus líderes potenciales",
          descripcion: "No todos serán líderes. Busca personas que sean constantes, positivas y que tomen acción sin que los empujes.",
          ejemplo: "Señales: Hacen preguntas, toman notas, cumplen lo que prometen."
        },
        {
          titulo: "Entrena a tu equipo",
          descripcion: "Comparte lo que aprendiste. Enséñales a contactar, a presentar el negocio, a manejar objeciones. Tu éxito depende de su éxito.",
          ejemplo: "Haz llamadas en grupo, comparte scripts, celebra sus logros."
        },
        {
          titulo: "Crea un sistema de seguimiento",
          descripcion: "Usa una hoja de cálculo o app para registrar: quién contactaste, cuándo, qué dijeron, cuándo hacer seguimiento.",
          ejemplo: "Columnas: Nombre | Fecha | Interés (Sí/No/Tal vez) | Próxima acción"
        }
      ]
    },
    {
      numero: 5,
      titulo: "Dominio: Escala y Automatiza",
      duracion: "Mes 6+",
      color: "from-indigo-400 to-blue-500",
      pasos: [
        {
          titulo: "Usa redes sociales estratégicamente",
          descripcion: "Publica contenido de valor (no spam): tips, historias de éxito, motivación. Atrae personas en lugar de perseguirlas.",
          ejemplo: "Publica 3 veces por semana: 1 tip, 1 historia personal, 1 resultado."
        },
        {
          titulo: "Crea un embudo de ventas simple",
          descripción: "Ofrece algo gratis (checklist, video, plantilla) a cambio de su email. Luego envíales contenido útil y tu oferta.",
          ejemplo: "Anuncio → Página de captura → Email con valor → Llamada de cierre"
        },
        {
          titulo: "Delega y multiplica",
          descripción: "Enseña a tus líderes a entrenar a otros. Tu trabajo es acompañar, no hacer todo tú mismo.",
          ejemplo: "Si tienes 5 líderes y cada uno recluta 5 = 25 personas en tu red."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🗺️ HERRAMIENTA #1
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Hoja de Ruta Interactiva
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Tu mapa paso a paso para dominar el marketing en red sin sentirte perdido
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>5 Fases Claras</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>15 Pasos Accionables</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Ejemplos Reales</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Tu Progreso</span>
                <span className="text-sm sm:text-base font-bold">{completedSet.size}/{totalSteps} completados</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada paso como completado para ver tu avance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cómo Usar Esta Herramienta */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-primary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            📋 Cómo Usar Esta Hoja de Ruta
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-primary">1. Lee cada fase completa</strong> antes de empezar. No saltes pasos.
            </p>
            <p>
              <strong className="text-primary">2. Completa los pasos en orden.</strong> Cada fase construye sobre la anterior.
            </p>
            <p>
              <strong className="text-primary">3. Toma notas</strong> en un cuaderno o documento. Escribe tus respuestas a cada pregunta.
            </p>
            <p>
              <strong className="text-primary">4. Sé paciente.</strong> El éxito en marketing en red toma tiempo. La mayoría ve resultados en 3-6 meses.
            </p>
            <p className="bg-accent/20 border-l-4 border-accent p-4 rounded">
              <strong>💡 Consejo:</strong> Imprime esta hoja de ruta y márcala con un resaltador a medida que avanzas. Ver tu progreso te mantendrá motivado.
            </p>
          </div>
        </div>

        {/* Fases */}
        <div className="space-y-8 md:space-y-12">
          {fases.map((fase, index) => (
            <div
              key={fase.numero}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary/20 transition-all"
            >
              {/* Header de la Fase */}
              <div className={`bg-gradient-to-r ${fase.color} text-white p-6 sm:p-8`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold">
                      {fase.numero}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                        {fase.titulo}
                      </h3>
                      <p className="text-sm sm:text-base opacity-90">{fase.duracion}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pasos de la Fase */}
              <div className="p-6 sm:p-8 space-y-6">
                {fase.pasos.map((paso, pasoIndex) => {
                  const stepId = `${index}-${pasoIndex}`;
                  const isCompleted = completedSet.has(stepId);
                  return (
                  <div
                    key={pasoIndex}
                    className={`border-l-4 ${isCompleted ? 'border-primary bg-green-50' : 'border-primary/20'} pl-4 sm:pl-6 py-2 transition-all cursor-pointer hover:bg-gray-50 rounded-r-lg`}
                    onClick={() => toggleStep(index, pasoIndex)}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 flex items-start gap-2">
                      <input 
                        type="checkbox" 
                        checked={isCompleted}
                        onChange={() => toggleStep(index, pasoIndex)}
                        className="w-5 h-5 mt-1 cursor-pointer accent-primary"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className={isCompleted ? 'line-through text-gray-500' : ''}>{paso.titulo}</span>
                    </h4>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                      {paso.descripcion}
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-lg">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <strong className="text-amber-700">📌 {paso.ejemplo}</strong>
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>

              {/* Indicador de Progreso */}
              {index < fases.length - 1 && (
                <div className="flex justify-center py-4 bg-gray-50">
                  <ArrowRight className="w-6 h-6 text-primary animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Empezar Tu Viaje?
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora que tienes la hoja de ruta completa, el siguiente paso es tomar acción. 
            Explora las otras herramientas para complementar tu estrategia.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-bold text-base sm:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all w-full sm:w-auto"
            onClick={() => window.location.href = '/'}
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Ver Todas las Herramientas
          </Button>
        </div>
      </div>
    </div>
  );
}
