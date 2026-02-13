import { ArrowLeft, Heart, Users, Trophy, Star, Calendar, Zap, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function ProgramaMotivacion() {
  const STORAGE_KEY = 'programaMotivacion_completedActivities';
  
  // Cargar estado desde localStorage
  const [completedActivities, setCompletedActivities] = useState<Set<number>>(() => {
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
  
  const totalActivities = 6; // 6 actividades
  const progress = (completedActivities.size / totalActivities) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedActivities)));
  }, [completedActivities]);

  const toggleActivity = (index: number) => {
    setCompletedActivities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const actividades = [
    {
      nombre: "Reuniones Semanales de Victoria",
      frecuencia: "Cada semana (30 minutos)",
      objetivo: "Celebrar logros y mantener la moral alta",
      comoHacerlo: [
        "Agenda una llamada semanal con tu equipo (Zoom, Google Meet, o WhatsApp video).",
        "Pide a cada persona que comparta 1 victoria de la semana (por pequeña que sea).",
        "Celebra en grande: aplaude, felicita, reconoce el esfuerzo.",
        "Termina con un reto para la próxima semana: '¿Quién hará X esta semana?'"
      ],
      porQueFunciona: "La gente necesita sentir que su esfuerzo importa. Cuando celebras victorias, creas un equipo que quiere seguir ganando."
    },
    {
      nombre: "Desafíos Mensuales con Premios",
      frecuencia: "Cada mes",
      objetivo: "Crear competencia sana y motivar acción",
      comoHacerlo: [
        "Crea un desafío simple: 'Quien reclute 5 personas este mes gana [PREMIO]'.",
        "El premio no tiene que ser caro: una cena, un libro, reconocimiento público.",
        "Comparte el progreso cada semana: '¡María va ganando con 3 reclutados!'",
        "Al final del mes, celebra al ganador públicamente (video, post, mención en grupo)."
      ],
      porQueFunciona: "La competencia sana motiva. Los premios no tienen que ser grandes, solo significativos."
    },
    {
      nombre: "Historias de Éxito Compartidas",
      frecuencia: "2-3 veces por semana",
      objetivo: "Inspirar con ejemplos reales de tu equipo",
      comoHacerlo: [
        "Pide permiso a alguien de tu equipo para compartir su historia.",
        "Publica un post o video contando su logro: '¡María hizo su primera venta!'",
        "Incluye el 'antes y después': 'Hace 2 meses no sabía nada, hoy ganó $500'.",
        "Etiqueta a la persona y celebra su esfuerzo públicamente."
      ],
      porQueFunciona: "Ver que otros lo logran hace que parezca posible. Las historias inspiran más que las estadísticas."
    },
    {
      nombre: "Sesiones de Motivación Grupal",
      frecuencia: "Cada 2 semanas (45-60 minutos)",
      objetivo: "Recargar energía y recordar el 'por qué'",
      comoHacerlo: [
        "Agenda una sesión donde NO hablen de ventas ni estrategias.",
        "Pide a cada persona que comparta su 'por qué': ¿Por qué empezaron? ¿Qué quieren lograr?",
        "Comparte un video motivacional corto (5-10 minutos) que inspire.",
        "Termina con una afirmación grupal: 'Vamos a lograrlo juntos'."
      ],
      porQueFunciona: "El estrés y la presión queman a la gente. Estas sesiones los reconectan con su propósito."
    },
    {
      nombre: "Sistema de Reconocimiento Público",
      frecuencia: "Diario o semanal",
      objetivo: "Hacer que cada persona se sienta vista y valorada",
      comoHacerlo: [
        "Crea un canal de 'Reconocimientos' en tu grupo (WhatsApp, Telegram, Facebook).",
        "Cada día, reconoce a 1 persona por algo específico: 'Gracias a Juan por ayudar a María con su primera llamada'.",
        "Pide a tu equipo que también reconozcan a otros: 'Menciona a alguien que te ayudó esta semana'.",
        "Usa emojis, GIFs, y energía positiva. Haz que sea divertido."
      ],
      porQueFunciona: "La gente no renuncia a equipos donde se sienten valorados. El reconocimiento es gratis pero poderoso."
    },
    {
      nombre: "Retiros o Eventos Presenciales (Opcionales)",
      frecuencia: "1-2 veces al año",
      objetivo: "Crear conexión profunda y recuerdos compartidos",
      comoHacerlo: [
        "Organiza un evento presencial simple: una cena, un día en el parque, un café grupal.",
        "No tiene que ser caro. El objetivo es conocerse fuera del trabajo.",
        "Toma fotos, haz videos, crea contenido para redes sociales.",
        "Después del evento, comparte los momentos: 'Así se ve un equipo unido'."
      ],
      porQueFunciona: "Los equipos que se conocen en persona crean lazos más fuertes. Los recuerdos compartidos generan lealtad."
    }
  ];

  const recursos = [
    {
      nombre: "Plantilla de Agenda para Reuniones Semanales",
      descripcion: "Un formato simple para estructurar tus reuniones de victoria sin perder tiempo.",
      contenido: [
        "Bienvenida y energía (2 min)",
        "Victorias de la semana (15 min - 2 min por persona)",
        "Lección aprendida (5 min - comparte 1 tip)",
        "Reto de la semana (3 min - define el desafío)",
        "Cierre motivacional (5 min - frase o video corto)"
      ]
    },
    {
      nombre: "Ideas de Premios para Desafíos (Bajo Presupuesto)",
      descripcion: "No necesitas gastar mucho. Estos premios motivan sin romper tu bolsillo.",
      contenido: [
        "Reconocimiento público en redes sociales",
        "Una cena o café pagado por ti",
        "Un libro de desarrollo personal",
        "Una sesión 1 a 1 de mentoría contigo",
        "Un certificado impreso de 'Top Performer del Mes'",
        "Acceso exclusivo a un entrenamiento especial"
      ]
    },
    {
      nombre: "Frases Motivacionales para Compartir",
      descripcion: "Usa estas frases en tus reuniones, posts, o mensajes para mantener la energía alta.",
      contenido: [
        "'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'",
        "'No se trata de ser el mejor. Se trata de ser mejor que ayer.'",
        "'Los equipos ganadores no nacen, se construyen con consistencia.'",
        "'Tu única competencia eres tú mismo. Supérate cada día.'",
        "'La motivación te hace empezar. El hábito te hace continuar.'",
        "'Juntos somos más fuertes. Nadie llega solo a la cima.'"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header con Barra de Progreso */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          {/* Barra de Progreso */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Tu Progreso</span>
              <span className="text-sm font-semibold">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-white/20" />
            <p className="text-xs mt-2 opacity-90">
              {completedActivities.size} de {totalActivities} actividades completadas
            </p>
          </div>
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #4
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Programa de Motivación Colectiva
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Mantén a tu equipo motivado, comprometido y leal
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>6 Actividades Probadas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Recursos Listos para Usar</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Plan de Acción Mensual</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-pink-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              El mayor problema en marketing en red no es reclutar. Es <strong className="text-pink-600">mantener a la gente motivada</strong>. El 80% de los que empiezan renuncian en los primeros 3 meses por falta de motivación.
            </p>
            <p>
              Un equipo desmotivado es un equipo muerto. Tu trabajo como líder no es solo enseñar estrategias, es <strong className="text-pink-600">mantener la moral alta</strong> cuando las cosas se ponen difíciles.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> La motivación no es un evento de una vez. Es un sistema que construyes y mantienes activo.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-pink-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> La Hoja de Ruta te dice QUÉ hacer. Este programa te asegura que tu EQUIPO tenga energía para hacerlo.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas te ayudan a reclutar. Este programa te ayuda a RETENER y MOTIVAR a quienes reclutaste.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists dan tareas. Este programa hace que tu equipo QUIERA completar esas tareas.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> Los principios te enseñan a liderar. Este programa te da ACTIVIDADES para aplicar ese liderazgo.</p>
            </div>
          </div>
        </div>

        {/* Actividades */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            🎉 6 Actividades para Mantener la Motivación Alta
          </h2>
          {actividades.map((actividad, index) => {
            const isCompleted = completedActivities.has(index);
            return (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${isCompleted ? 'border-pink-600' : 'border-gray-100'} transition-all`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 sm:p-8 ${isCompleted ? 'opacity-75' : ''}`}>
                <div className="flex items-start gap-4 mb-3">
                  <input 
                    type="checkbox" 
                    checked={isCompleted}
                    onChange={() => toggleActivity(index)}
                    className="w-6 h-6 mt-2 cursor-pointer accent-white"
                  />
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isCompleted ? 'line-through' : ''}`}>
                    {actividad.nombre}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base opacity-90">
                  <span>📅 {actividad.frecuencia}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>🎯 {actividad.objetivo}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className={`p-6 sm:p-8 space-y-6 ${isCompleted ? 'opacity-60' : ''}`}>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    ✅ Cómo Hacerlo:
                  </h4>
                  <div className="space-y-3">
                    {actividad.comoHacerlo.map((paso, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-400"
                      >
                        <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
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
                    <strong className="text-amber-700">💡 Por Qué Funciona:</strong> {actividad.porQueFunciona}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Recursos */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            📦 Recursos Listos para Usar
          </h2>
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 border-2 border-pink-200 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {recurso.nombre}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4">
                {recurso.descripcion}
              </p>
              <div className="space-y-2">
                {recurso.contenido.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg"
                  >
                    <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Plan de Acción Mensual */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-pink-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Tu Plan de Acción para Este Mes
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Agenda tu primera Reunión Semanal de Victoria (este viernes)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Crea 1 desafío mensual con premio (empieza hoy)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Comparte 2 historias de éxito esta semana (pide permiso primero)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
              <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Reconoce públicamente a 1 persona de tu equipo cada día</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Un Equipo Motivado Es Un Equipo Imparable
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Implementa 1 actividad esta semana. Observa cómo cambia la energía de tu equipo. 
            La motivación es contagiosa.
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
