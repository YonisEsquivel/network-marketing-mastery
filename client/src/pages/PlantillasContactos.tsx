import { ArrowLeft, Copy, Check, MessageSquare, Users, Sparkles, Target, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function PlantillasContactos() {
  const STORAGE_KEY = 'plantillasContactos_completed';
  
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Cargar estado desde localStorage
  const [completedTemplates, setCompletedTemplates] = useState<Set<string>>(() => {
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
  
  const totalTemplates = 15; // Total de plantillas
  const progress = (completedTemplates.size / totalTemplates) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedTemplates)));
  }, [completedTemplates]);

  const toggleTemplate = (categoryIndex: number, templateIndex: number) => {
    const templateId = `${categoryIndex}-${templateIndex}`;
    setCompletedTemplates(prev => {
      const newSet = new Set(prev);
      if (newSet.has(templateId)) {
        newSet.delete(templateId);
      } else {
        newSet.add(templateId);
      }
      return newSet;
    });
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const plantillas = [
    {
      categoria: "Romper el Hielo",
      color: "from-green-400 to-emerald-500",
      descripcion: "Usa estos mensajes para reconectar con personas que no has hablado en un tiempo.",
      templates: [
        {
          nombre: "El Reencuentro",
          cuando: "Para amigos o conocidos que no ves hace meses",
          mensaje: "¡Hola [NOMBRE]! 😊 ¿Cómo has estado? Vi tu publicación sobre [ALGO ESPECÍFICO] y me acordé de ti. ¿Cómo te va con [TRABAJO/FAMILIA/PROYECTO]?",
          porque: "Es personal, muestra interés genuino y no suena a venta."
        },
        {
          nombre: "El Cumplido Sincero",
          cuando: "Para personas que admiras o respetas",
          mensaje: "Hola [NOMBRE], siempre he admirado tu [HABILIDAD/ACTITUD]. ¿Sigues trabajando en [INDUSTRIA]? Me encantaría saber cómo te va.",
          porque: "Los cumplidos sinceros abren puertas. La gente recuerda cómo la hiciste sentir."
        },
        {
          nombre: "La Recomendación",
          cuando: "Cuando alguien te recomendó contactar a esta persona",
          mensaje: "Hola [NOMBRE], [PERSONA QUE RECOMENDÓ] me habló muy bien de ti. Me dijo que eres [CUALIDAD]. ¿Tienes unos minutos para conversar?",
          porque: "Las referencias de terceros generan confianza instantánea."
        }
      ]
    },
    {
      categoria: "Generar Interés",
      color: "from-blue-400 to-cyan-500",
      descripcion: "Después de reconectar, usa estos mensajes para despertar curiosidad sin sonar vendedor.",
      templates: [
        {
          nombre: "La Pregunta Curiosa",
          cuando: "Después de conversar un poco",
          mensaje: "Oye, cambiando de tema... ¿estarías abierto/a a ganar dinero extra desde casa? No es nada raro, solo quiero saber si te interesaría.",
          porque: "Es directo pero no agresivo. Deja que ellos pregunten."
        },
        {
          nombre: "La Historia Personal",
          cuando: "Cuando ya hay confianza",
          mensaje: "Te cuento algo: hace [TIEMPO] empecé un proyecto que me está ayudando a [BENEFICIO]. No sé si te interese, pero pensé en ti porque [RAZÓN].",
          porque: "Las historias personales conectan emocionalmente. No estás vendiendo, estás compartiendo."
        },
        {
          nombre: "El Problema Compartido",
          cuando: "Cuando sabes que tienen un problema similar al tuyo",
          mensaje: "Oye, sé que hace un tiempo mencionaste que [PROBLEMA]. Yo estaba en la misma y encontré algo que me ayudó. ¿Te gustaría que te cuente?",
          porque: "Ofreces una solución a un problema real. Eso es valioso."
        }
      ]
    },
    {
      categoria: "Invitación a Conocer Más",
      color: "from-yellow-400 to-amber-500",
      descripcion: "Cuando muestran interés, invítalos a ver más información sin presionar.",
      templates: [
        {
          nombre: "El Video Corto",
          cuando: "Para personas ocupadas",
          mensaje: "Perfecto. Te voy a enviar un video de 5 minutos que lo explica mejor que yo. Después me dices qué piensas, sin compromiso.",
          porque: "Los videos venden mejor que tú. Deja que el contenido haga el trabajo."
        },
        {
          nombre: "La Llamada Rápida",
          cuando: "Para personas que prefieren hablar",
          mensaje: "¿Tienes 15 minutos mañana para una llamada? Te explico de qué va y respondes tus preguntas. Si no es para ti, no hay problema.",
          porque: "15 minutos no asusta. Y aclaras que no hay presión."
        },
        {
          nombre: "El Evento Virtual",
          cuando: "Cuando hay webinars o presentaciones grupales",
          mensaje: "Hay una presentación en vivo el [DÍA] a las [HORA]. Dura 30 minutos y ahí explican todo. ¿Te anoto?",
          porque: "Los eventos grupales quitan presión. No eres solo tú vendiendo."
        }
      ]
    },
    {
      categoria: "Manejo de Objeciones",
      color: "from-teal-400 to-green-500",
      descripcion: "Respuestas inteligentes a las objeciones más comunes sin sonar desesperado.",
      templates: [
        {
          nombre: '"No tengo tiempo"',
          cuando: "Cuando dicen que están muy ocupados",
          mensaje: "Te entiendo perfectamente. Justamente por eso esto me llamó la atención, porque puedes hacerlo en tus tiempos libres. ¿Tienes 10 minutos esta semana para que te cuente cómo funciona?",
          porque: "Validas su objeción y ofreces flexibilidad."
        },
        {
          nombre: '"No tengo dinero"',
          cuando: "Cuando dicen que no pueden invertir",
          mensaje: "Esa es exactamente la razón por la que muchos empiezan. La inversión inicial es mínima y puedes recuperarla rápido. ¿Quieres que te muestre cómo?",
          porque: "Conviertes la objeción en una razón para empezar."
        },
        {
          nombre: '"Déjame pensarlo"',
          cuando: "Cuando están indecisos",
          mensaje: "Claro, tómate tu tiempo. ¿Hay algo específico que te preocupa o que quieras saber antes de decidir?",
          porque: "Descubres la verdadera objeción. 'Déjame pensarlo' casi siempre esconde algo más."
        }
      ]
    },
    {
      categoria: "Seguimiento",
      color: "from-indigo-400 to-blue-500",
      descripcion: "El 80% de las ventas se cierran después del seguimiento. Usa estos mensajes.",
      templates: [
        {
          nombre: "El Check-in Casual",
          cuando: "3-5 días después de enviar información",
          mensaje: "Hola [NOMBRE], ¿pudiste ver el video/info que te envié? ¿Tienes alguna pregunta?",
          porque: "Simple y directo. No presiona, solo pregunta."
        },
        {
          nombre: "El Valor Agregado",
          cuando: "1 semana después",
          mensaje: "Hola [NOMBRE], vi este artículo/video sobre [TEMA RELACIONADO] y pensé en ti. Te lo comparto por si te sirve. Por cierto, ¿ya pensaste en lo que hablamos?",
          porque: "Aportas valor primero, luego preguntas. No solo persigues la venta."
        },
        {
          nombre: "La Última Oportunidad",
          cuando: "Cuando hay una promoción o deadline",
          mensaje: "Hola [NOMBRE], no quiero molestarte, pero hay una promoción que termina el [FECHA]. Si te interesa, avísame hoy para que no la pierdas.",
          porque: "La urgencia real (no falsa) motiva a decidir."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-primary text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            💬 HERRAMIENTA #2
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Plantillas para Contactos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Scripts probados para contactar, generar interés y cerrar sin sonar vendedor
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>15 Plantillas Listas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Copia y Pega</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Lenguaje Natural</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Plantillas Usadas</span>
                <span className="text-sm sm:text-base font-bold">{completedTemplates.size}/{totalTemplates} completadas</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada plantilla que uses para seguir tu progreso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-secondary/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            📱 Cómo Usar Estas Plantillas
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-secondary">1. NO las copies exactamente.</strong> Personalízalas con tu estilo. Si suenas robótico, la gente lo notará.
            </p>
            <p>
              <strong className="text-secondary">2. Reemplaza [NOMBRE], [ALGO ESPECÍFICO], etc.</strong> con información real. Mientras más personal, mejor.
            </p>
            <p>
              <strong className="text-secondary">3. Usa emojis con moderación.</strong> 1-2 por mensaje está bien. Más de 3 parece spam.
            </p>
            <p>
              <strong className="text-secondary">4. Lee el mensaje en voz alta</strong> antes de enviarlo. Si suena raro al decirlo, suena raro al leerlo.
            </p>
            <p className="bg-accent/20 border-l-4 border-accent p-4 rounded">
              <strong>💡 Consejo Pro:</strong> Guarda tus plantillas favoritas en las notas de tu teléfono para acceso rápido.
            </p>
          </div>
        </div>

        {/* Plantillas por Categoría */}
        <div className="space-y-8 md:space-y-12">
          {plantillas.map((categoria, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
            >
              {/* Header de Categoría */}
              <div className={`bg-gradient-to-r ${categoria.color} text-white p-6 sm:p-8`}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {categoria.categoria}
                </h3>
                <p className="text-base sm:text-lg opacity-90">
                  {categoria.descripcion}
                </p>
              </div>

              {/* Templates */}
              <div className="p-6 sm:p-8 space-y-6">
                {categoria.templates.map((template, tempIndex) => {
                  const globalIndex = catIndex * 100 + tempIndex;
                  const templateId = `${catIndex}-${tempIndex}`;
                  const isCompleted = completedTemplates.has(templateId);
                  return (
                    <div
                      key={tempIndex}
                      className={`border-2 ${isCompleted ? 'border-secondary bg-blue-50' : 'border-gray-200'} rounded-xl p-4 sm:p-6 hover:border-secondary/50 transition-all`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            checked={isCompleted}
                            onChange={() => toggleTemplate(catIndex, tempIndex)}
                            className="w-5 h-5 mt-1 cursor-pointer accent-secondary"
                          />
                          <h4 className={`text-lg sm:text-xl font-bold ${isCompleted ? 'line-through text-gray-500' : 'text-foreground'}`}>
                            {template.nombre}
                          </h4>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 italic">
                          {template.cuando}
                        </span>
                      </div>

                      {/* Mensaje */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-base sm:text-lg text-foreground leading-relaxed mb-3">
                          "{template.mensaje}"
                        </p>
                        <div className="flex justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(template.mensaje, globalIndex)}
                          >
                            {copiedIndex === globalIndex ? (
                              <>
                                <Check className="w-4 h-4 mr-1" />
                                Copiado
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4 mr-1" />
                                Copiar
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      {/* Por qué funciona */}
                      <div className="bg-accent/10 border-l-4 border-accent p-3 sm:p-4 rounded-r-lg">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          <strong className="text-accent">✓ Por qué funciona:</strong> {template.porque}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Finales */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            🎯 Tips Finales para Tus Mensajes
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Sé Breve</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Mensajes largos asustan. 2-3 líneas es perfecto.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Haz Preguntas</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Las preguntas invitan a responder. Las afirmaciones, no.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">No Presiones</h4>
                <p className="text-sm sm:text-base text-muted-foreground">"Sin compromiso" quita presión y aumenta respuestas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Sé Tú Mismo</h4>
                <p className="text-sm sm:text-base text-muted-foreground">La autenticidad vende más que cualquier script perfecto.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-secondary to-primary rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Empezar a Contactar?
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora tienes 15 plantillas probadas. El siguiente paso es usarlas. 
            Contacta a 5 personas hoy mismo y ve qué pasa.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-bold text-base sm:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all w-full sm:w-auto"
            onClick={() => window.location.href = '/'}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Ver Todas las Herramientas
          </Button>
        </div>
      </div>
    </div>
  );
}
