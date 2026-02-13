import { Check, Download, Users, TrendingUp, MessageCircle, Share2, Target, ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function EstrategiasAtraccion() {
  const STORAGE_KEY = 'estrategiasAtraccion_completedSteps';
  
  // Cargar estado desde localStorage
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(() => {
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
  
  const totalSteps = 12; // 4 estrategias × 3 pasos cada una
  const progress = (completedSteps.size / totalSteps) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedSteps)));
  }, [completedSteps]);

  const toggleStep = (strategyIndex: number, stepIndex: number) => {
    const stepId = `${strategyIndex}-${stepIndex}`;
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const estrategias = [
    {
      titulo: "Redes Sociales: Tu Mejor Aliado",
      icono: <Share2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      descripcion: "Las redes sociales son donde están tus prospectos. Aprende a usarlas correctamente.",
      pasos: [
        {
          nombre: "Optimiza tu perfil",
          explicacion: "Tu perfil es tu carta de presentación. Si alguien lo visita y no entiende qué haces, perdiste una oportunidad.",
          accion: "Foto profesional (no selfie), bio clara que diga qué haces y a quién ayudas, link a tu negocio en la bio.",
          ejemplo: "En lugar de 'Amante de los gatos 🐱', escribe: 'Ayudo a emprendedores a generar ingresos desde casa con marketing en red 💼'"
        },
        {
          nombre: "Publica contenido de valor",
          explicacion: "No vendas en cada publicación. Educa, inspira, entretiene. La venta viene después.",
          accion: "Publica 3-5 veces por semana: tips, historias de éxito, lecciones aprendidas, behind the scenes.",
          ejemplo: "'3 errores que cometí en mi primer mes de marketing en red (y cómo los evité)'"
        },
        {
          nombre: "Interactúa genuinamente",
          explicacion: "No solo publiques y desaparezcas. Comenta, responde, crea conversaciones.",
          accion: "Dedica 15 minutos al día a comentar en publicaciones de otros (no spam, comentarios reales).",
          ejemplo: "En lugar de 'Interesante 👍', escribe: 'Me pasó lo mismo cuando empecé. ¿Cómo lo resolviste?'"
        }
      ]
    },
    {
      titulo: "Marketing de Atracción vs. Persecución",
      icono: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      descripcion: "Deja de perseguir prospectos. Haz que ellos vengan a ti.",
      pasos: [
        {
          nombre: "Comparte tu historia",
          explicacion: "La gente se conecta con historias, no con productos. Cuenta tu 'por qué'.",
          accion: "Escribe un post sobre por qué empezaste en marketing en red. Sé honesto, vulnerable.",
          ejemplo: "'Empecé esto porque estaba cansado de no poder pagar las cuentas a fin de mes. Hoy, 6 meses después...'"
        },
        {
          nombre: "Muestra resultados (sin presumir)",
          explicacion: "Los resultados atraen. Pero hay una línea entre inspirar y presumir.",
          accion: "Comparte logros pequeños: 'Mi primera venta', 'Mi primer cheque', 'Mi primer equipo de 5 personas'.",
          ejemplo: "'Hace 3 meses no sabía nada de esto. Hoy gané mi primer $500. Si yo pude, tú también puedes.'"
        },
        {
          nombre: "Ofrece valor gratis",
          explicacion: "Da antes de pedir. Regala tips, consejos prácticos. Construye confianza.",
          accion: "Crea un PDF gratis (ej: '5 errores que matan tu negocio de marketing en red') y compártelo.",
          ejemplo: "'Descarga gratis mi checklist de 7 días para empezar en marketing en red. Link en bio.'"
        }
      ]
    },
    {
      titulo: "Mensajes Directos (DM) que Funcionan",
      icono: <MessageCircle className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      descripcion: "Cómo acercarte a prospectos sin ser spam ni molesto.",
      pasos: [
        {
          nombre: "Rompe el hielo correctamente",
          explicacion: "No empieces con 'Hola, tengo una oportunidad de negocio'. Eso es spam.",
          accion: "Empieza con algo personal: un comentario sobre su contenido, un cumplido genuino, una pregunta.",
          ejemplo: "'Vi tu post sobre emprendimiento. Me encantó tu punto sobre la consistencia. ¿Cuánto tiempo llevas en esto?'"
        },
        {
          nombre: "Construye relación primero",
          explicacion: "No vendas en el primer mensaje. Conoce a la persona. Crea conexión.",
          accion: "Intercambia 3-5 mensajes antes de mencionar tu negocio. Pregunta, escucha, conecta.",
          ejemplo: "'¿A qué te dedicas actualmente?' 'Interesante, ¿cómo empezaste en eso?' 'Me encanta tu energía.'"
        },
        {
          nombre: "La transición natural",
          explicacion: "Cuando hay confianza, la transición a tu negocio es natural, no forzada.",
          accion: "Usa una pregunta abierta: '¿Estarías abierto a ver otras formas de generar ingresos?'",
          ejemplo: "'Me caíste bien. ¿Alguna vez has considerado el marketing en red? Tengo algo que podría interesarte.'"
        }
      ]
    },
    {
      titulo: "Eventos y Networking (Online y Offline)",
      icono: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      descripcion: "Cómo usar eventos para conocer prospectos de calidad.",
      pasos: [
        {
          nombre: "Asiste a eventos relevantes",
          explicacion: "Ve a donde están tus prospectos: eventos de emprendimiento, networking, webinars.",
          accion: "Busca en Eventbrite, Meetup, Facebook Events. Asiste a 1-2 eventos al mes.",
          ejemplo: "'Evento de emprendedores en tu ciudad este sábado. Perfecto para conocer gente con mentalidad de crecimiento.'"
        },
        {
          nombre: "No vendas en el evento",
          explicacion: "El objetivo es conocer gente, no vender. Construye relaciones, no transacciones.",
          accion: "Presenta tu negocio en 1 frase si preguntan. Luego, pide su contacto para seguir hablando después.",
          ejemplo: "'Ayudo a personas a generar ingresos desde casa. ¿Te puedo agregar en Instagram para seguir en contacto?'"
        },
        {
          nombre: "Seguimiento post-evento",
          explicacion: "El verdadero trabajo empieza después del evento. Haz seguimiento en 24-48 horas.",
          accion: "Envía un mensaje personalizado: 'Fue un placer conocerte en [EVENTO]. Me gustó tu punto sobre [TEMA].'",
          ejemplo: "'Hola Juan, soy María del evento de ayer. Me encantó tu energía. ¿Sigues interesado en lo que hablamos?'"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #1
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Estrategias de Atracción Efectivas
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Deja de perseguir prospectos. Aprende a atraerlos naturalmente
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>4 Estrategias Probadas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>12 Pasos Accionables</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Ejemplos Reales</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Estrategias Aplicadas</span>
                <span className="text-sm sm:text-base font-bold">{completedSteps.size}/{totalSteps} completadas</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-xs sm:text-sm mt-2 opacity-80">Marca cada paso que implementes para ver tu progreso</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-blue-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              El mayor error que cometen los nuevos en marketing en red es <strong className="text-blue-600">perseguir prospectos</strong>. Envían mensajes masivos, molestan a familiares, y terminan quemados y sin resultados.
            </p>
            <p>
              La verdad es que <strong className="text-blue-600">los mejores prospectos vienen a ti</strong> cuando haces las cosas correctamente. No necesitas rogar. Necesitas atraer.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> Las personas compran de quienes conocen, confían y les agradan. Tu trabajo es construir esa confianza.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-blue-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> Mientras la Hoja de Ruta te dice QUÉ hacer, estas estrategias te dicen CÓMO atraer prospectos en cada fase.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas te dan los mensajes. Estas estrategias te enseñan DÓNDE y CUÁNDO usarlos.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists te dan tareas diarias. Estas estrategias te dan el sistema para que esas tareas generen prospectos constantes.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> El liderazgo atrae. Estas estrategias te posicionan como líder en redes sociales y eventos.</p>
            </div>
          </div>
        </div>

        {/* Estrategias */}
        <div className="space-y-8 md:space-y-12">
          {estrategias.map((estrategia, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${estrategia.color} text-white p-6 sm:p-8`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    {estrategia.icono}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {estrategia.titulo}
                    </h3>
                    <p className="text-base sm:text-lg opacity-90">
                      {estrategia.descripcion}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pasos */}
              <div className="p-6 sm:p-8 space-y-6">
                {estrategia.pasos.map((paso, pIndex) => {
                  const stepId = `${index}-${pIndex}`;
                  const isCompleted = completedSteps.has(stepId);
                  return (
                  <div
                    key={pIndex}
                    className={`border-l-4 ${isCompleted ? 'border-blue-600 bg-blue-50' : 'border-blue-300'} pl-4 sm:pl-6 py-2 rounded-r-lg transition-all`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <input 
                        type="checkbox" 
                        checked={isCompleted}
                        onChange={() => toggleStep(index, pIndex)}
                        className="w-5 h-5 mt-1 cursor-pointer accent-blue-600"
                      />
                      <h4 className={`text-lg sm:text-xl font-bold ${isCompleted ? 'line-through text-gray-500' : 'text-foreground'}`}>
                        {pIndex + 1}. {paso.nombre}
                      </h4>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2">
                      {paso.explicacion}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 rounded-r-lg mb-3">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <strong className="text-blue-600">✅ Acción:</strong> {paso.accion}
                      </p>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-lg">
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <strong className="text-amber-700">💬 Ejemplo:</strong> {paso.ejemplo}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Plan de Acción */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-blue-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Tu Plan de Acción para Esta Semana
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Optimiza tu perfil en 1 red social (Instagram, Facebook o LinkedIn)</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Publica 1 historia personal sobre tu 'por qué' en marketing en red</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Envía 5 mensajes directos genuinos (sin vender) para construir relaciones</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Busca 1 evento de networking (online u offline) para asistir este mes</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            La Atracción es un Sistema, No Suerte
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora que conoces las estrategias, el siguiente paso es aplicarlas consistentemente. 
            Los prospectos vendrán cuando seas constante.
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
