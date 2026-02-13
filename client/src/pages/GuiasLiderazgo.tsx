import { ArrowLeft, Users, Brain, Heart, Target, TrendingUp, Zap, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function GuiasLiderazgo() {
  const STORAGE_KEY = 'guiasLiderazgo_completedPrinciples';
  
  // Cargar estado desde localStorage
  const [completedPrinciples, setCompletedPrinciples] = useState<Set<string>>(() => {
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
  
  const totalPrinciples = 18; // 6 guías × 3 principios cada una
  const progress = (completedPrinciples.size / totalPrinciples) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedPrinciples)));
  }, [completedPrinciples]);

  const togglePrinciple = (guideIndex: number, principleIndex: number) => {
    const principleId = `${guideIndex}-${principleIndex}`;
    setCompletedPrinciples(prev => {
      const newSet = new Set(prev);
      if (newSet.has(principleId)) {
        newSet.delete(principleId);
      } else {
        newSet.add(principleId);
      }
      return newSet;
    });
  };

  const recursos = [
    {
      titulo: "Liderazgo por Ejemplo",
      icono: <Users className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      descripcion: "Los mejores líderes no dan órdenes, inspiran con sus acciones.",
      principios: [
        {
          nombre: "Haz lo que predicas",
          explicacion: "Si le dices a tu equipo que contacte 5 personas al día, tú contacta 10. Tu equipo hará lo que TÚ haces, no lo que dices.",
          ejemplo: "Si quieres que tu equipo sea constante, tú sé constante. Si quieres que sean positivos, tú sé positivo primero."
        },
        {
          nombre: "Comparte tus fracasos",
          explicacion: "No solo muestres tus éxitos. Cuenta las veces que fallaste y cómo te levantaste. Eso humaniza y motiva.",
          ejemplo: "'Esta semana contacté 50 personas y solo 3 respondieron. Pero esas 3 se convirtieron en 2 ventas. Así funciona.'"
        },
        {
          nombre: "Celebra los logros de otros",
          explicacion: "Cuando alguien de tu equipo logra algo, celébralo públicamente. Eso motiva a todos a querer ser celebrados también.",
          ejemplo: "Publica en el grupo: '¡Felicidades a María por su primera venta! 🎉 ¿Quién será el siguiente?'"
        }
      ]
    },
    {
      titulo: "Comunicación Clara",
      icono: <Brain className="w-8 h-8" />,
      color: "from-blue-400 to-cyan-500",
      descripcion: "Un líder confuso crea un equipo confuso. La claridad es poder.",
      principios: [
        {
          nombre: "Usa lenguaje simple",
          explicacion: "No uses palabras complicadas para sonar inteligente. Si un niño de 14 años no lo entiende, simplifica.",
          ejemplo: "En lugar de 'optimizar tu embudo de conversión', di 'conseguir más personas interesadas'."
        },
        {
          nombre: "Repite lo importante",
          explicacion: "La gente necesita escuchar algo 7 veces para recordarlo. No asumas que porque lo dijiste una vez, lo entendieron.",
          ejemplo: "Repite tu mensaje principal en cada reunión: 'Nuestro objetivo es contactar 5 personas al día. ¿Lo están haciendo?'"
        },
        {
          nombre: "Escucha más de lo que hablas",
          explicacion: "Haz preguntas. Deja que tu equipo hable. Los mejores líderes son los mejores oyentes.",
          ejemplo: "En lugar de decir 'Haz esto', pregunta: '¿Qué crees que deberías hacer?' Deja que ellos lleguen a la respuesta."
        }
      ]
    },
    {
      titulo: "Motivación Constante",
      icono: <Heart className="w-8 h-8" />,
      color: "from-yellow-400 to-amber-500",
      descripcion: "Tu equipo tendrá días malos. Tu trabajo es mantenerlos enfocados en el por qué.",
      principios: [
        {
          nombre: "Recuérdales su 'Por Qué'",
          explicacion: "Cuando alguien quiera rendirse, pregúntale: '¿Por qué empezaste?' Eso los reconecta con su motivación original.",
          ejemplo: "'Recuerda que empezaste esto para pagar la universidad de tu hijo. ¿Vas a rendirte ahora?'"
        },
        {
          nombre: "Comparte historias de éxito",
          explicacion: "Las historias inspiran más que los números. Comparte cómo alguien logró algo que parecía imposible.",
          ejemplo: "'Juan no tenía experiencia en ventas. Hoy gana $3,000 al mes. Si él pudo, tú también puedes.'"
        },
        {
          nombre: "Reconoce el esfuerzo, no solo resultados",
          explicacion: "A veces alguien trabaja duro pero no ve resultados todavía. Reconoce su esfuerzo para que no se rinda.",
          ejemplo: "'Sé que contactaste 50 personas esta semana y nadie compró. Pero estás haciendo lo correcto. Los resultados vienen.'"
        }
      ]
    },
    {
      titulo: "Desarrollo de Tu Equipo",
      icono: <TrendingUp className="w-8 h-8" />,
      color: "from-teal-400 to-green-500",
      descripcion: "Tu éxito depende del éxito de tu equipo. Invierte en ellos.",
      principios: [
        {
          nombre: "Entrena constantemente",
          explicacion: "No asumas que porque alguien se unió, sabe qué hacer. Entrena, entrena, entrena.",
          ejemplo: "Haz llamadas de práctica, comparte scripts, graba videos explicando cómo manejar objeciones."
        },
        {
          nombre: "Identifica fortalezas",
          explicacion: "Cada persona es buena en algo diferente. Unos son buenos contactando, otros presentando, otros cerrando. Usa sus fortalezas.",
          ejemplo: "'María es tímida pero escribe muy bien. Que ella maneje los mensajes de texto mientras Juan hace las llamadas.'"
        },
        {
          nombre: "Crea líderes, no seguidores",
          explicacion: "Tu objetivo no es que dependan de ti, sino que puedan liderar su propio equipo. Enséñales a enseñar.",
          ejemplo: "'Hoy te voy a enseñar cómo entrenar a tu equipo. Observa cómo lo hago y luego tú lo haces con los tuyos.'"
        }
      ]
    },
    {
      titulo: "Manejo de Conflictos",
      icono: <Brain className="w-8 h-8" />,
      color: "from-indigo-400 to-blue-500",
      descripcion: "Los conflictos son inevitables. Cómo los manejes define tu liderazgo.",
      principios: [
        {
          nombre: "Actúa rápido",
          explicacion: "Los problemas pequeños se vuelven grandes si los ignoras. Resuelve conflictos apenas los notes.",
          ejemplo: "Si dos miembros del equipo están peleando, habla con ellos HOY, no la próxima semana."
        },
        {
          nombre: "Escucha ambos lados",
          explicacion: "Nunca tomes partido sin escuchar las dos versiones. La verdad casi siempre está en el medio.",
          ejemplo: "'Entiendo tu punto, Juan. Ahora déjame escuchar lo que María tiene que decir.'"
        },
        {
          nombre: "Enfócate en soluciones, no culpas",
          explicacion: "No pierdas tiempo buscando quién tiene la culpa. Pregunta: '¿Cómo lo resolvemos?'",
          ejemplo: "'Ya sé que hubo un malentendido. ¿Qué podemos hacer para que no vuelva a pasar?'"
        }
      ]
    },
    {
      titulo: "Cultura de Equipo",
      icono: <Users className="w-8 h-8" />,
      color: "from-pink-400 to-rose-500",
      descripcion: "La cultura de tu equipo determina su éxito a largo plazo.",
      principios: [
        {
          nombre: "Define valores claros",
          explicacion: "¿Qué representa tu equipo? ¿Honestidad? ¿Trabajo duro? ¿Apoyo mutuo? Define 3-5 valores y repítelos siempre.",
          ejemplo: "'En este equipo valoramos: 1) Honestidad, 2) Constancia, 3) Apoyo mutuo. Si no compartes estos valores, este no es tu lugar.'"
        },
        {
          nombre: "Crea rituales",
          explicacion: "Los rituales crean identidad. Puede ser una reunión semanal, un saludo especial, o una forma de celebrar logros.",
          ejemplo: "'Todos los lunes a las 8pm hacemos una llamada grupal de 30 minutos para compartir logros y metas.'"
        },
        {
          nombre: "Elimina toxicidad",
          explicacion: "Una persona negativa puede destruir la moral de todo el equipo. Si alguien es constantemente tóxico, déjalo ir.",
          ejemplo: "'He notado que siempre te quejas y desanimas a otros. Si no cambias tu actitud, no puedes seguir en el equipo.'"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            👑 HERRAMIENTA #4
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Principios de Liderazgo
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Conviértete en el líder que tu equipo necesita para alcanzar el éxito
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>6 Pilares de Liderazgo</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>18 Principios Prácticos</span>
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
                <span className="text-sm sm:text-base font-semibold">Principios Dominados</span>
                <span className="text-sm sm:text-base font-bold">{completedPrinciples.size}/{totalPrinciples} completados</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada principio que apliques en tu liderazgo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-indigo-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Qué Hace a un Gran Líder?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Un líder no es alguien que tiene un título o un rango. Un líder es alguien que <strong className="text-indigo-600">inspira a otros a tomar acción</strong> y los ayuda a convertirse en la mejor versión de sí mismos.
            </p>
            <p>
              En el marketing en red, tu éxito no depende solo de tus ventas, sino de <strong className="text-indigo-600">cuántas personas puedes ayudar a tener éxito</strong>. Por eso el liderazgo es la habilidad más importante que puedes desarrollar.
            </p>
            <p className="bg-accent/20 border-l-4 border-accent p-4 rounded">
              <strong>💡 Recuerda:</strong> Los líderes no nacen, se hacen. Si estás leyendo esto, ya diste el primer paso.
            </p>
          </div>
        </div>

        {/* Principios de Liderazgo */}
        <div className="space-y-8 md:space-y-12">
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${recurso.color} text-white p-6 sm:p-8`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    {recurso.icono}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {recurso.titulo}
                    </h3>
                    <p className="text-base sm:text-lg opacity-90">
                      {recurso.descripcion}
                    </p>
                  </div>
                </div>
              </div>

              {/* Principios */}
              <div className="p-6 sm:p-8 space-y-6">
                {recurso.principios.map((principio, pIndex) => {
                  const principleId = `${index}-${pIndex}`;
                  const isCompleted = completedPrinciples.has(principleId);
                  return (
                  <div
                    key={pIndex}
                    className={`border-l-4 ${isCompleted ? 'border-indigo-600 bg-indigo-50' : 'border-indigo-300'} pl-4 sm:pl-6 py-2 rounded-r-lg transition-all`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <input 
                        type="checkbox" 
                        checked={isCompleted}
                        onChange={() => togglePrinciple(index, pIndex)}
                        className="w-5 h-5 mt-1 cursor-pointer accent-indigo-600"
                      />
                      <h4 className={`text-lg sm:text-xl font-bold ${isCompleted ? 'line-through text-gray-500' : 'text-foreground'}`}>
                        {pIndex + 1}. {principio.nombre}
                      </h4>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-3">
                      {principio.explicacion}
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-3 sm:p-4 rounded-r-lg">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <strong className="text-indigo-600">💬 Ejemplo:</strong> {principio.ejemplo}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Errores Comunes */}
        <div className="mt-12 bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-red-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            ⚠️ Errores Comunes de Liderazgo (Evítalos)
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Micromanagement</h4>
                <p className="text-sm sm:text-base text-muted-foreground">No controles cada paso de tu equipo. Confía en ellos y dales espacio para crecer.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Falta de Comunicación</h4>
                <p className="text-sm sm:text-base text-muted-foreground">No asumas que tu equipo sabe qué hacer. Comunica expectativas claras.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">No Dar Feedback</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Si alguien está haciendo algo mal, díselo. El silencio no ayuda a nadie.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Favoritismo</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Trata a todos con el mismo respeto. El favoritismo destruye equipos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Plan de Acción */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-indigo-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Tu Plan de Acción para Esta Semana
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Identifica 1 área de liderazgo en la que necesitas mejorar</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Aplica 1 principio de este sistema con tu equipo esta semana</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Pide feedback a tu equipo: "¿Cómo puedo ser un mejor líder para ti?"</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Celebra públicamente el logro de al menos 1 miembro de tu equipo</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            El Liderazgo Se Practica, No Se Aprende
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora que conoces los principios, el siguiente paso es aplicarlos. 
            Empieza hoy mismo con 1 principio y ve cómo tu equipo responde.
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
