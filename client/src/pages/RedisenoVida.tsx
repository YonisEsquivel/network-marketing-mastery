import { ArrowLeft, Heart, Star, Compass, Target, Zap, CheckCircle2, Check, Download, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export default function RedisenoVida() {
  const STORAGE_KEY = 'redisenoVida_completedSteps';
  
  // Cargar estado desde localStorage
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(() => {
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
  
  const totalSteps = 6; // 6 pasos
  const progress = (completedSteps.size / totalSteps) * 100;

  // Guardar en localStorage cuando cambie el estado
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedSteps)));
  }, [completedSteps]);

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  const pasos = [
    {
      numero: 1,
      titulo: "Define Tu 'Por Qué' Real",
      icono: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      descripcion: "Tu 'por qué' no es 'ganar dinero'. Es lo que el dinero te permitirá hacer o ser.",
      preguntas: [
        "¿Qué harías si tuvieras $10,000 al mes y tiempo libre ilimitado?",
        "¿Qué problema en tu vida resolverías primero con más dinero?",
        "¿A quién quieres ayudar o impactar con tu éxito?",
        "¿Qué versión de ti mismo quieres ser en 5 años?"
      ],
      ejercicio: "Escribe tu 'por qué' en 1 frase: 'Hago esto porque quiero [RESULTADO] para [QUIÉN].' Ejemplo: 'Hago esto porque quiero libertad financiera para pasar más tiempo con mis hijos.'"
    },
    {
      numero: 2,
      titulo: "Visualiza Tu Vida Ideal",
      icono: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      descripcion: "Si no sabes a dónde vas, cualquier camino te llevará a ningún lado.",
      preguntas: [
        "¿Cómo se ve tu día perfecto? Desde que despiertas hasta que duermes.",
        "¿Dónde vives? ¿Cómo es tu casa?",
        "¿Con quién pasas tu tiempo?",
        "¿Qué haces para divertirte o relajarte?"
      ],
      ejercicio: "Escribe una descripción de 1 página de tu vida ideal en 3 años. Sé específico. Usa presente: 'Vivo en...', 'Trabajo desde...', 'Paso tiempo con...'"
    },
    {
      numero: 3,
      titulo: "Identifica Tus Valores No Negociables",
      icono: <Compass className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      descripcion: "Tus valores son tu brújula. Si tu negocio va contra tus valores, no durarás.",
      preguntas: [
        "¿Qué es más importante para ti: tiempo, dinero, libertad, familia, impacto?",
        "¿Qué NO estás dispuesto a sacrificar por el éxito?",
        "¿Qué te hace sentir orgulloso de ti mismo?",
        "¿Qué tipo de persona quieres ser recordado como?"
      ],
      ejercicio: "Elige tus 3 valores más importantes. Luego pregúntate: '¿Mi negocio actual respeta estos valores?' Si no, ¿qué necesitas cambiar?"
    },
    {
      numero: 4,
      titulo: "Alinea Tus Metas con Tu Propósito",
      icono: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      descripcion: "Las metas sin propósito son vacías. El propósito sin metas es solo un sueño.",
      preguntas: [
        "¿Cuánto dinero necesitas ganar para vivir tu vida ideal? (Sé realista)",
        "¿Qué nivel de éxito en tu negocio te daría esa cantidad?",
        "¿Cuántas horas al día estás dispuesto a trabajar para lograrlo?",
        "¿En cuánto tiempo quieres lograrlo? (6 meses, 1 año, 3 años)"
      ],
      ejercicio: "Escribe 3 metas SMART (Específicas, Medibles, Alcanzables, Relevantes, con Tiempo): 1 financiera, 1 personal, 1 de impacto."
    },
    {
      numero: 5,
      titulo: "Crea Tu Hoja de Ruta Personal",
      icono: <MapPin className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      descripcion: "Ahora que sabes a dónde vas, traza el camino para llegar.",
      preguntas: [
        "¿Qué necesitas aprender para lograr tus metas?",
        "¿Qué hábitos necesitas construir?",
        "¿Qué necesitas dejar de hacer que te está frenando?",
        "¿Quién puede ayudarte en el camino?"
      ],
      ejercicio: "Divide tu meta grande en 12 pasos mensuales. Ejemplo: Mes 1 - Aprender a prospectar. Mes 2 - Reclutar 5 personas. Mes 3 - Entrenar a mi equipo."
    },
    {
      numero: 6,
      titulo: "Revisa y Ajusta Cada 3 Meses",
      icono: <TrendingUp className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      descripcion: "La vida cambia. Tus metas y propósito pueden evolucionar. Eso está bien.",
      preguntas: [
        "¿Sigo queriendo lo mismo que quería hace 3 meses?",
        "¿Mis acciones diarias me acercan a mi vida ideal?",
        "¿Qué está funcionando? ¿Qué no?",
        "¿Necesito ajustar mis metas o mi estrategia?"
      ],
      ejercicio: "Agenda una cita contigo mismo cada 3 meses. Revisa tu 'por qué', tu vida ideal, tus valores, y tus metas. Ajusta lo que sea necesario."
    }
  ];

  const ejemplos = [
    {
      nombre: "María, 32 años, mamá de 2 niños",
      antes: "Trabajaba 10 horas al día en un trabajo que odiaba. No veía a sus hijos crecer.",
      porQue: "Quiero libertad de tiempo para estar presente en la vida de mis hijos.",
      vidaIdeal: "Trabajo desde casa 4 horas al día. Llevo a mis hijos a la escuela. Tengo tardes libres para jugar con ellos.",
      meta: "Ganar $3,000 al mes en 12 meses para renunciar a mi trabajo.",
      resultado: "En 10 meses alcanzó su meta. Hoy trabaja desde casa y es feliz."
    },
    {
      nombre: "Carlos, 28 años, soltero",
      antes: "Vivía al día. No tenía ahorros. Sentía que no avanzaba en la vida.",
      porQue: "Quiero libertad financiera para viajar y conocer el mundo.",
      vidaIdeal: "Trabajo desde cualquier lugar. Viajo 3 meses al año. Tengo ingresos pasivos.",
      meta: "Construir un equipo de 50 personas en 18 meses que genere ingresos residuales.",
      resultado: "En 16 meses construyó su equipo. Hoy viaja mientras su negocio crece."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header con Barra de Progreso */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          {/* Barra de Progreso */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Tu Progreso</span>
              <span className="text-sm font-semibold">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-white/20" />
            <p className="text-xs mt-2 opacity-90">
              {completedSteps.size} de {totalSteps} pasos completados
            </p>
          </div>
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #5
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Rediseño de Vida y Propósito
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Alinea tus metas de negocio con tu vida ideal
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>6 Pasos Transformadores</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Ejercicios Profundos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Ejemplos Reales</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-indigo-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Muchas personas construyen negocios exitosos pero <strong className="text-indigo-600">vidas vacías</strong>. Ganan dinero pero pierden tiempo con su familia. Tienen éxito pero no felicidad.
            </p>
            <p>
              Este recurso te ayuda a <strong className="text-indigo-600">diseñar tu vida primero</strong>, y luego construir un negocio que sirva a esa vida. No al revés.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> El éxito sin propósito es solo ruido. Define tu propósito primero, y el éxito será significativo.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-indigo-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> La Hoja de Ruta te lleva al éxito. Este recurso te asegura que ese éxito sea el que TÚ quieres.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas te ayudan a reclutar. Este recurso te asegura que reclutes para el propósito correcto.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists te dan tareas. Este recurso te asegura que esas tareas te acerquen a tu vida ideal.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> Los principios te enseñan a liderar. Este recurso te enseña a liderar tu PROPIA vida primero.</p>
            </div>
          </div>
        </div>

        {/* Los 6 Pasos */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            🗺️ Hoja de Ruta: 6 Pasos para Rediseñar Tu Vida
          </h2>
          {pasos.map((paso) => {
            const isCompleted = completedSteps.has(paso.numero - 1);
            return (
            <div
              key={paso.numero}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${isCompleted ? 'border-indigo-600' : 'border-gray-100'} transition-all`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${paso.color} text-white p-6 sm:p-8 ${isCompleted ? 'opacity-75' : ''}`}>
                <div className="flex items-start gap-4 mb-3">
                  <input 
                    type="checkbox" 
                    checked={isCompleted}
                    onChange={() => toggleStep(paso.numero - 1)}
                    className="w-6 h-6 mt-2 cursor-pointer accent-white"
                  />
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    {paso.icono}
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-1">Paso {paso.numero} de 6</div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${isCompleted ? 'line-through' : ''}`}>
                      {paso.titulo}
                    </h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg opacity-90">
                  {paso.descripcion}
                </p>
              </div>

              {/* Contenido */}
              <div className={`p-6 sm:p-8 space-y-6 ${isCompleted ? 'opacity-60' : ''}`}>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                    🤔 Preguntas para Reflexionar:
                  </h4>
                  <div className="space-y-2">
                    {paso.preguntas.map((pregunta, pIndex) => (
                      <div
                        key={pIndex}
                        className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg"
                      >
                        <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">
                          {pIndex + 1}
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {pregunta}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    <strong className="text-amber-700">✍️ Ejercicio:</strong> {paso.ejercicio}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Ejemplos Reales */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
            ✨ Ejemplos Reales de Transformación
          </h2>
          {ejemplos.map((ejemplo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 border-2 border-indigo-200 shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">
                {ejemplo.nombre}
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <p><strong>❌ Antes:</strong> {ejemplo.antes}</p>
                <p><strong>💡 Su 'Por Qué':</strong> {ejemplo.porQue}</p>
                <p><strong>🌟 Su Vida Ideal:</strong> {ejemplo.vidaIdeal}</p>
                <p><strong>🎯 Su Meta:</strong> {ejemplo.meta}</p>
                <p className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg">
                  <strong className="text-green-700">✅ Resultado:</strong> {ejemplo.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Plan de Acción */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-indigo-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Tu Plan de Acción para Esta Semana
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Completa el Paso 1: Define tu 'por qué' real en 1 frase</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Completa el Paso 2: Escribe tu vida ideal en 1 página</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Completa el Paso 3: Identifica tus 3 valores no negociables</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg text-foreground">Agenda una cita contigo mismo cada 3 meses para revisar</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Tu Vida Es Tu Obra Maestra
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            No construyas un negocio que no sirva a la vida que quieres vivir. 
            Diseña tu vida primero. El negocio es solo la herramienta.
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
