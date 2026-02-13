import { Check, Download, Users, Target, Heart, Lightbulb, TrendingUp, ArrowLeft, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function TallerLiderazgo() {
  const STORAGE_KEY = 'tallerLiderazgo_completedExercises';
  
  // Cargar estado desde localStorage
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(() => {
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
  
  const totalExercises = 5; // 5 ejercicios
  const progress = (completedExercises.size / totalExercises) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedExercises)));
  }, [completedExercises]);

  const toggleExercise = (index: number) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const ejercicios = [
    {
      titulo: "Ejercicio 1: Define Tu Estilo de Liderazgo",
      duracion: "15 minutos",
      objetivo: "Descubrir qué tipo de líder eres naturalmente y cómo potenciarlo.",
      pasos: [
        "Responde: ¿Qué admiras en los líderes que has tenido? Escribe 5 cualidades.",
        "Responde: ¿Cuáles de esas cualidades ya tienes? Marca 2-3.",
        "Responde: ¿Cuáles necesitas desarrollar? Elige 1 para trabajar este mes.",
        "Escribe una frase: 'Yo lidero desde [TU FORTALEZA]'. Ejemplo: 'Yo lidero desde la empatía y el ejemplo.'"
      ],
      reflexion: "No hay un estilo de liderazgo 'correcto'. El mejor líder es el auténtico. Conoce tus fortalezas y úsalas."
    },
    {
      titulo: "Ejercicio 2: Practica la Escucha Activa",
      duracion: "1 semana",
      objetivo: "Convertirte en un líder que escucha, no solo que habla.",
      pasos: [
        "Esta semana, en cada conversación con tu equipo, haz 3 preguntas antes de dar tu opinión.",
        "Repite lo que la persona dijo antes de responder: 'Entonces, lo que estás diciendo es...'",
        "Anota en tu teléfono: ¿Qué aprendí hoy escuchando a mi equipo?",
        "Al final de la semana, pregunta a 2 personas de tu equipo: '¿Sientes que te escucho?'"
      ],
      reflexion: "Los líderes que escuchan crean equipos leales. La gente no quiere un jefe que hable, quiere un líder que entienda."
    },
    {
      titulo: "Ejercicio 3: Delega con Confianza",
      duracion: "2 semanas",
      objetivo: "Aprender a soltar el control y empoderar a tu equipo.",
      pasos: [
        "Identifica 1 tarea que siempre haces tú pero que alguien más podría hacer.",
        "Elige a 1 persona de tu equipo y explícale cómo hacerla (no solo le digas 'hazlo').",
        "Deja que lo haga a su manera (aunque no sea exactamente como tú lo harías).",
        "Después de 2 semanas, evalúa: ¿Lo hizo bien? ¿Qué aprendió? ¿Qué aprendiste tú?"
      ],
      reflexion: "Delegar no es perder control, es multiplicar tu impacto. Un líder que no delega es un cuello de botella."
    },
    {
      titulo: "Ejercicio 4: Crea Tu Visión de Equipo",
      duracion: "30 minutos",
      objetivo: "Definir hacia dónde va tu equipo y comunicarlo claramente.",
      pasos: [
        "Responde: ¿Dónde quiero que esté mi equipo en 6 meses? (Ejemplo: '10 personas activas generando $5,000 al mes')",
        "Responde: ¿Por qué esa visión importa? (Ejemplo: 'Porque cada persona merece libertad financiera')",
        "Escribe tu visión en 1 frase simple que un niño de 10 años entienda.",
        "Comparte esa visión con tu equipo esta semana en una llamada o reunión."
      ],
      reflexion: "Un equipo sin visión es un barco sin rumbo. Tu trabajo como líder es pintar el destino y acompañarlos hacia él."
    },
    {
      titulo: "Ejercicio 5: Manejo de Conflictos",
      duracion: "Cuando surja un conflicto",
      objetivo: "Resolver problemas sin perder miembros del equipo.",
      pasos: [
        "Cuando notes un conflicto, actúa en 24 horas (no esperes a que explote).",
        "Habla con ambas partes por separado primero. Pregunta: '¿Qué pasó desde tu perspectiva?'",
        "Reúne a ambas partes y di: 'Ambos quieren lo mismo: que el equipo funcione. ¿Cómo lo resolvemos?'",
        "Enfócate en soluciones, no en culpas. Pregunta: '¿Qué podemos hacer diferente para que no vuelva a pasar?'"
      ],
      reflexion: "Los conflictos son inevitables. Los líderes débiles los ignoran. Los líderes fuertes los resuelven rápido y aprenden de ellos."
    }
  ];

  const competencias = [
    {
      nombre: "Comunicación Clara",
      icono: <Brain className="w-6 h-6" />,
      descripcion: "Habla simple, directo, sin rodeos. Si un niño de 14 años no lo entiende, simplifica.",
      practica: "Graba un video de 1 minuto explicando tu negocio. Muéstraselo a alguien fuera del marketing en red. Si no lo entiende, reescríbelo."
    },
    {
      nombre: "Empatía",
      icono: <Heart className="w-6 h-6" />,
      descripcion: "Entiende que cada persona tiene sus propios miedos, metas y ritmo. No todos son como tú.",
      practica: "Antes de juzgar a alguien de tu equipo, pregúntate: '¿Qué está pasando en su vida que yo no sé?'"
    },
    {
      nombre: "Visión",
      icono: <Target className="w-6 h-6" />,
      descripcion: "Ve más allá del hoy. Pinta el futuro para tu equipo y haz que lo crean posible.",
      practica: "Cada semana, comparte 1 historia de alguien que logró lo que tu equipo quiere lograr."
    },
    {
      nombre: "Consistencia",
      icono: <TrendingUp className="w-6 h-6" />,
      descripcion: "Aparece todos los días. Los líderes inconsistentes crean equipos inconsistentes.",
      practica: "Comprométete a 1 acción diaria no negociable: una llamada, un mensaje, un post. Todos los días."
    },
    {
      nombre: "Responsabilidad",
      icono: <Check className="w-6 h-6" />,
      descripcion: "Cuando algo sale mal, el líder dice 'Es mi responsabilidad'. Cuando algo sale bien, dice 'Fue el equipo'.",
      practica: "La próxima vez que algo falle, di: 'Fue mi error. Esto es lo que voy a hacer diferente.'"
    },
    {
      nombre: "Desarrollo de Otros",
      icono: <Users className="w-6 h-6" />,
      descripcion: "Tu éxito se mide por cuántas personas ayudaste a tener éxito, no por tu propio éxito.",
      practica: "Dedica 30 minutos esta semana a entrenar a 1 persona de tu equipo en algo que no sabe hacer."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #2
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Taller de Habilidades de Liderazgo
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Conviértete en el líder que tu equipo necesita para crecer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>5 Ejercicios Prácticos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>6 Competencias Clave</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Workbook Completo</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Ejercicios Completados</span>
                <span className="text-sm sm:text-base font-bold">{completedExercises.size}/{totalExercises} completados</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada ejercicio que completes para ver tu progreso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-purple-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Puedes tener las mejores estrategias del mundo, pero si <strong className="text-purple-600">no sabes liderar</strong>, tu equipo no crecerá. El liderazgo no es un título, es una habilidad que se aprende.
            </p>
            <p>
              En marketing en red, <strong className="text-purple-600">tu éxito depende del éxito de tu equipo</strong>. Si no sabes motivarlos, entrenarlos y guiarlos, estarás solo. Y solo, no llegas lejos.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> Los líderes no nacen, se hacen. Este taller te da los ejercicios para convertirte en uno.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-purple-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> La Hoja de Ruta te lleva del punto A al B. Este taller te enseña cómo llevar a TU EQUIPO contigo.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas te ayudan a reclutar. Este taller te enseña a RETENER y MOTIVAR a quienes reclutaste.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists te dan tareas. Este taller te enseña a DELEGAR esas tareas y multiplicar tu impacto.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> Los principios te dan principios. Este taller te da EJERCICIOS para aplicar esos principios.</p>
            </div>
          </div>
        </div>

        {/* Competencias Clave */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            🎯 Las 6 Competencias de un Líder Efectivo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {competencias.map((competencia, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {competencia.icono}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {competencia.nombre}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed">
                  {competencia.descripcion}
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-purple-600">💪 Practica:</strong> {competencia.practica}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ejercicios Prácticos */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            📝 Workbook: 5 Ejercicios Prácticos
          </h2>
          {ejercicios.map((ejercicio, index) => {
            const isCompleted = completedExercises.has(index);
            return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${isCompleted ? 'border-purple-600' : 'border-gray-100'} transition-all`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 sm:p-8 ${isCompleted ? 'opacity-75' : ''}`}>
                <div className="flex items-start gap-4 mb-2">
                  <input 
                    type="checkbox" 
                    checked={isCompleted}
                    onChange={() => toggleExercise(index)}
                    className="w-6 h-6 mt-1 cursor-pointer accent-white"
                  />
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isCompleted ? 'line-through' : ''}`}>
                    {ejercicio.titulo}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base opacity-90">
                  <span>⏱️ Duración: {ejercicio.duracion}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🎯 Objetivo: {ejercicio.objetivo}</span>
                </div>
              </div>

              {/* Pasos */}
              <div className="p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                  📋 Pasos a Seguir:
                </h4>
                <div className="space-y-3 mb-6">
                  {ejercicio.pasos.map((paso, pIndex) => (
                    <div
                      key={pIndex}
                      className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400"
                    >
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        {pIndex + 1}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {paso}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Reflexión */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <strong className="text-amber-700">💭 Reflexión:</strong> {ejercicio.reflexion}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Plan de Acción */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-purple-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Tu Plan de Acción para Este Mes
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Completa el Ejercicio 1 esta semana (Define tu estilo de liderazgo)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Practica 1 competencia clave cada semana (empieza con Escucha Activa)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Pide feedback a tu equipo: "¿Cómo puedo ser un mejor líder para ti?"</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Repite todos los ejercicios cada 3 meses para seguir creciendo</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            El Liderazgo Se Practica, No Se Lee
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora que tienes los ejercicios, el siguiente paso es hacerlos. 
            Empieza con uno esta semana y ve cómo tu equipo responde.
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
