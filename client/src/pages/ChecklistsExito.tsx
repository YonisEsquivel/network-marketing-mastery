import { ArrowLeft, CheckCircle2, Clock, TrendingUp, Target, Calendar, Zap, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function ChecklistsExito() {
  const STORAGE_KEY = 'checklistsExito_completedTasks';
  
  // Cargar estado desde localStorage
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(() => {
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
  
  const totalTasks = 35; // Total de tareas en todas las semanas
  const progress = (completedTasks.size / totalTasks) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedTasks)));
  }, [completedTasks]);

  const toggleTask = (weekIndex: number, taskIndex: number) => {
    const taskId = `${weekIndex}-${taskIndex}`;
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const checklists = [
    {
      semana: "Semana 1: Preparación",
      objetivo: "Establecer bases sólidas antes de contactar a nadie",
      color: "from-green-400 to-emerald-500",
      items: [
        {
          tarea: "Escribe tu 'Por Qué' en un papel y pégalo donde lo veas todos los días",
          tiempo: "15 min",
          impacto: "Alto"
        },
        {
          tarea: "Define tu meta de ingresos mensual (número específico, no 'mucho dinero')",
          tiempo: "10 min",
          impacto: "Alto"
        },
        {
          tarea: "Haz una lista de 100 personas que conoces (usa tu teléfono, redes sociales)",
          tiempo: "30 min",
          impacto: "Alto"
        },
        {
          tarea: "Clasifica tu lista en Grupo A (cercanos), B (conocidos), C (lejanos)",
          tiempo: "20 min",
          impacto: "Medio"
        },
        {
          tarea: "Prepara 3 mensajes de reconexión personalizados para Grupo A",
          tiempo: "15 min",
          impacto: "Alto"
        },
        {
          tarea: "Configura un cuaderno o app para registrar tus contactos y seguimientos",
          tiempo: "10 min",
          impacto: "Medio"
        },
        {
          tarea: "Ve un video o lee un artículo sobre tu producto/servicio para conocerlo mejor",
          tiempo: "20 min",
          impacto: "Alto"
        }
      ]
    },
    {
      semana: "Semana 2-3: Primeros Contactos",
      objetivo: "Contactar a 5 personas diarias y generar interés",
      color: "from-blue-400 to-cyan-500",
      items: [
        {
          tarea: "Contacta a 5 personas del Grupo A (los más cercanos) con mensajes personalizados",
          tiempo: "30 min/día",
          impacto: "Alto"
        },
        {
          tarea: "Responde a TODOS los mensajes en menos de 2 horas (la rapidez genera confianza)",
          tiempo: "Variable",
          impacto: "Alto"
        },
        {
          tarea: "Registra cada contacto: nombre, fecha, respuesta (Sí/No/Tal vez), próxima acción",
          tiempo: "10 min/día",
          impacto: "Medio"
        },
        {
          tarea: "Comparte tu historia personal con al menos 3 personas esta semana",
          tiempo: "15 min/persona",
          impacto: "Alto"
        },
        {
          tarea: "Invita a 2 personas a ver un video o presentación sobre el negocio",
          tiempo: "10 min/persona",
          impacto: "Alto"
        },
        {
          tarea: "Haz seguimiento a las personas que dijeron 'Déjame pensarlo' hace 3-5 días",
          tiempo: "20 min",
          impacto: "Alto"
        },
        {
          tarea: "Celebra tus pequeños logros: anota cada 'Sí' o 'Cuéntame más' que recibas",
          tiempo: "5 min",
          impacto: "Medio"
        }
      ]
    },
    {
      semana: "Semana 4-6: Construcción de Momentum",
      objetivo: "Aumentar contactos y cerrar tus primeras ventas/reclutamientos",
      color: "from-yellow-400 to-amber-500",
      items: [
        {
          tarea: "Contacta a 7-10 personas diarias (aumenta el volumen gradualmente)",
          tiempo: "45 min/día",
          impacto: "Alto"
        },
        {
          tarea: "Programa 3 llamadas o videollamadas con personas interesadas",
          tiempo: "30 min/llamada",
          impacto: "Alto"
        },
        {
          tarea: "Practica tu presentación del negocio frente al espejo o con un amigo",
          tiempo: "20 min",
          impacto: "Medio"
        },
        {
          tarea: "Maneja al menos 5 objeciones esta semana usando las plantillas",
          tiempo: "Variable",
          impacto: "Alto"
        },
        {
          tarea: "Cierra tu primera venta o recluta a tu primer miembro (¡este es tu objetivo!)",
          tiempo: "Variable",
          impacto: "Alto"
        },
        {
          tarea: "Publica 2-3 veces en redes sociales sobre tu progreso (sin spam)",
          tiempo: "15 min/post",
          impacto: "Medio"
        },
        {
          tarea: "Revisa tu lista de contactos y añade 20 personas nuevas",
          tiempo: "20 min",
          impacto: "Medio"
        }
      ]
    },
    {
      semana: "Semana 7-10: Escalamiento",
      objetivo: "Duplicar tus resultados y empezar a construir equipo",
      color: "from-teal-400 to-green-500",
      items: [
        {
          tarea: "Mantén 10 contactos nuevos diarios (ya es un hábito)",
          tiempo: "60 min/día",
          impacto: "Alto"
        },
        {
          tarea: "Identifica a 2-3 personas con potencial de liderazgo en tu red",
          tiempo: "30 min",
          impacto: "Alto"
        },
        {
          tarea: "Programa una sesión de entrenamiento con tu nuevo equipo (aunque sea 1 persona)",
          tiempo: "45 min",
          impacto: "Alto"
        },
        {
          tarea: "Crea un grupo de WhatsApp/Telegram para tu equipo y comparte tips diarios",
          tiempo: "10 min/día",
          impacto: "Medio"
        },
        {
          tarea: "Haz seguimiento a TODOS los 'Tal vez' de las últimas 2 semanas",
          tiempo: "30 min",
          impacto: "Alto"
        },
        {
          tarea: "Celebra los logros de tu equipo públicamente (motiva a otros)",
          tiempo: "15 min",
          impacto: "Medio"
        },
        {
          tarea: "Analiza tus números: ¿Cuántos contactos = 1 venta? Ajusta tu estrategia",
          tiempo: "20 min",
          impacto: "Alto"
        }
      ]
    },
    {
      semana: "Semana 11+: Dominio y Automatización",
      objetivo: "Crear sistemas que funcionen sin ti y delegar tareas",
      color: "from-indigo-400 to-blue-500",
      items: [
        {
          tarea: "Crea un embudo de ventas simple: anuncio → página de captura → email → llamada",
          tiempo: "2-3 horas (una sola vez)",
          impacto: "Alto"
        },
        {
          tarea: "Publica contenido de valor 3 veces por semana en redes (tips, historias, resultados)",
          tiempo: "20 min/post",
          impacto: "Alto"
        },
        {
          tarea: "Delega tareas repetitivas a tus líderes (seguimientos, presentaciones grupales)",
          tiempo: "Variable",
          impacto: "Alto"
        },
        {
          tarea: "Programa 2 webinars o presentaciones grupales al mes (ahorra tiempo)",
          tiempo: "60 min/webinar",
          impacto: "Alto"
        },
        {
          tarea: "Revisa y actualiza tu sistema de seguimiento (¿qué funciona? ¿qué no?)",
          tiempo: "30 min",
          impacto: "Medio"
        },
        {
          tarea: "Invierte en tu educación: lee 1 libro o toma 1 curso sobre ventas/liderazgo",
          tiempo: "30 min/día",
          impacto: "Medio"
        },
        {
          tarea: "Celebra tus logros: ¿Dónde estabas hace 3 meses? ¿Dónde estás ahora?",
          tiempo: "15 min",
          impacto: "Alto"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent via-yellow-400 to-amber-500 text-foreground py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            ✅ HERRAMIENTA #3
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Checklists de Éxito Semanal
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            Sigue estos pasos cada semana y ve cómo tu negocio crece de forma predecible
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>5 Checklists Semanales</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>35 Tareas Accionables</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Tiempo e Impacto</span>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold">Tu Progreso Semanal</span>
                <span className="text-sm sm:text-base font-bold">{completedTasks.size}/{totalTasks} completadas</span>
              </div>
              <Progress value={progress} className="h-3 bg-white/30" />
              <p className="text-xs sm:text-sm mt-2">Marca cada tarea completada para ver tu avance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-accent/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            📅 Cómo Usar Estos Checklists
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-amber-700">1. Imprime o guarda este checklist</strong> en tu teléfono para consultarlo todos los días.
            </p>
            <p>
              <strong className="text-amber-700">2. Marca cada tarea al completarla.</strong> Ver tu progreso te mantendrá motivado.
            </p>
            <p>
              <strong className="text-amber-700">3. No te saltes semanas.</strong> Cada fase construye sobre la anterior. La consistencia es clave.
            </p>
            <p>
              <strong className="text-amber-700">4. Ajusta los tiempos a tu realidad.</strong> Si solo tienes 30 minutos al día, está bien. Haz lo que puedas.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Consejo:</strong> Programa alarmas en tu teléfono para recordarte hacer las tareas diarias. La disciplina vence al talento.
            </p>
          </div>
        </div>

        {/* Checklists por Semana */}
        <div className="space-y-8 md:space-y-12">
          {checklists.map((checklist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${checklist.color} text-white p-6 sm:p-8`}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {checklist.semana}
                    </h3>
                    <p className="text-base sm:text-lg opacity-90">
                      <strong>Objetivo:</strong> {checklist.objetivo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-6 sm:p-8">
                <div className="space-y-4">
                  {checklist.items.map((item, itemIndex) => {
                    const taskId = `${index}-${itemIndex}`;
                    const isCompleted = completedTasks.has(taskId);
                    return (
                    <div
                      key={itemIndex}
                      className={`flex items-start gap-3 sm:gap-4 p-4 rounded-lg border-2 ${isCompleted ? 'border-amber-500 bg-amber-50' : 'border-gray-200'} hover:border-amber-500/50 hover:bg-amber-50/50 transition-all cursor-pointer`}
                      onClick={() => toggleTask(index, itemIndex)}
                    >
                      {/* Checkbox */}
                      <input 
                        type="checkbox" 
                        checked={isCompleted}
                        onChange={() => toggleTask(index, itemIndex)}
                        className="w-6 h-6 cursor-pointer accent-amber-600 mt-1"
                        onClick={(e) => e.stopPropagation()}
                      />

                      {/* Contenido */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-base sm:text-lg ${isCompleted ? 'line-through text-gray-500' : 'text-foreground'} leading-relaxed mb-2`}>
                          {item.tarea}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                          <span className="bg-gray-100 px-2 sm:px-3 py-1 rounded-full text-muted-foreground">
                            ⏱️ {item.tiempo}
                          </span>
                          <span className={`px-2 sm:px-3 py-1 rounded-full font-semibold ${
                            item.impacto === 'Alto' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            <Target className="w-3 h-3 inline mr-1" />
                            Impacto {item.impacto}
                          </span>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>

                {/* Resumen */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <strong>Total de tareas:</strong> {checklist.items.length} | 
                    <strong className="ml-2">Tareas de alto impacto:</strong> {checklist.items.filter(i => i.impacto === 'Alto').length}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consejos Finales */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            🎯 Consejos para Completar Tus Checklists
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Empieza Temprano</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Haz las tareas importantes en la mañana cuando tienes más energía.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Bloquea Tiempo</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Agenda 1 hora diaria en tu calendario solo para tu negocio.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Celebra Logros</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Cada tarea completada es un paso hacia tu meta. Celébralo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Sé Constante</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Mejor 30 minutos diarios que 5 horas los domingos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-accent to-amber-500 rounded-2xl p-6 sm:p-8 md:p-10 text-foreground text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Tu Primera Semana?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Imprime este checklist, pégalo en tu pared, y empieza HOY. 
            En 11 semanas, tu vida puede ser completamente diferente.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-foreground font-bold text-base sm:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-full shadow-2xl transition-all w-full sm:w-auto"
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
