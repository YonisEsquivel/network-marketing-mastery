import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NetworkPattern from "@/components/NetworkPattern";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  CheckCircle2,
  XCircle,
  Shield,
  Clock,
  BookOpen,
  FileText,
  ListChecks,
  GraduationCap,
  Zap,
  MessageSquare,
  Calendar,
  BarChart3,
  Heart,
  Trophy,
  Star,
  Sparkles,
  ChevronDown,
  UsersRound,
  Network
} from "lucide-react";

import { CheckoutModal } from "@/components/CheckoutModal";

export default function Home() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/D104193943Q";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Patrón de red de fondo */}
        <div className="absolute inset-0 text-primary pointer-events-none">
          <NetworkPattern />
        </div>
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Pre-encabezado específico para el avatar */}
          <div className="text-center space-y-4 px-4">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-semibold relative">
              Para emprendedores de 18-45 años que quieren dominar el marketing en red
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight relative">
              Cómo Generar Ingresos Consistentes en Marketing en Red
              <br className="hidden sm:block" />
              <span className="block sm:inline bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Sin Sentirte Perdido o Sin Apoyo</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Si sabes que el marketing en red puede cambiar tu vida pero no sabes por dónde empezar, si quieres construir una red efectiva y generar ingresos reales...
              <span className="font-semibold text-primary"> estas herramientas te ayudarán a lograrlo.</span>
            </p>
          </div>

          {/* Agitación del problema */}
          <Card className="border-2 border-primary/20 bg-card/95 backdrop-blur relative" style={{borderRadius: '30px 10px 30px 10px'}}>
            <CardContent className="py-8 space-y-4">
              <h3 className="text-2xl font-bold text-center text-foreground">
                ¿Te Suena Familiar?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "No sabes por dónde empezar en el marketing en red",
                  "Has intentado múltiples veces sin ver resultados",
                  "No puedes encontrar ni mantener contactos interesados",
                  "Te sientes solo y sin el apoyo adecuado",
                  "No tienes tiempo para equilibrar el negocio con tu vida",
                  "Estás confundido sobre qué empresa o producto elegir"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <UsersRound className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-lg text-foreground font-medium pt-4">
                No eres el problema. <span className="text-primary">Te falta un sistema estructurado.</span><br />
                Y hay una forma práctica de construirlo.
              </p>
            </CardContent>
          </Card>

          {/* Presentación de la herramienta */}
          <div className="text-center space-y-6 px-4">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold">LA SOLUCIÓN</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-primary">Network Marketing Mastery</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground italic max-w-2xl mx-auto">
              El sistema práctico que te lleva de la confusión al éxito
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold">Te lleva paso a paso desde cero</span> con herramientas prácticas,
              te ayuda a <span className="font-bold">construir tu red de forma efectiva</span>, y te enseña
              a <span className="font-bold text-primary">generar ingresos consistentes</span> en semanas, no años.
            </p>
          </div>

          {/* Sección: Así es Cómo Funciona */}
          <div className="space-y-8 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground">
              Así es Cómo Funciona
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">1. Sigue la Hoja de Ruta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Un mapa visual que te muestra exactamente qué hacer en cada fase del marketing en red, 
                    desde tu primer contacto hasta construir un equipo sólido.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/30 hover:border-secondary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">2. Usa las Plantillas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scripts probados y mensajes efectivos para atraer contactos de calidad 
                    sin sonar vendedor o desesperado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/30 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">3. Mide Tu Progreso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Checklists semanales para evaluar tu avance y ajustar tu estrategia. 
                    Ver tu progreso te motiva a seguir creciendo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sección: Por Qué Funciona Tan Bien */}
          <Card className="border-2 border-primary bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="py-8 sm:py-10 space-y-6 px-4">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Por Qué Network Marketing Mastery Funciona Tan Bien
                </h3>
                <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-foreground leading-relaxed">
                  <p>
                    La razón por la que este sistema funciona tan bien es porque <span className="font-bold text-primary">aborda el problema desde la raíz</span>: la falta de un enfoque estructurado y claro para iniciar en el marketing en red.
                  </p>
                  <p>
                    La mayoría de las "soluciones" te dicen <em>"simplemente sigue a un líder"</em> o <em>"asiste a charlas motivacionales"</em>. 
                    Pero eso no funciona porque <span className="font-bold">no te dan herramientas aplicables a tu situación específica</span>.
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-primary">
                    Network Marketing Mastery te da HERRAMIENTAS PRÁCTICAS que usas inmediatamente para construir tu negocio paso a paso.
                  </p>
                  <p>
                    Es como tener un <span className="font-bold">mentor personal en tu bolsillo</span>. 
                    Y cada vez que aplicas una estrategia, ves resultados reales. 
                    En 3-6 semanas, tu red empieza a crecer y los ingresos... llegan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Intermedio 1 */}
          <div className="text-center space-y-4 py-8 px-4">
            <div className="flex flex-col items-center gap-3">
              <div className="text-center space-y-2 mb-4">
                <p className="text-base sm:text-lg text-muted-foreground">
                  <span className="line-through text-gray-400">$47</span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary ml-2 sm:ml-3">$9.97</span>
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:scale-105 w-full sm:w-auto"
                onClick={() => setCheckoutModalOpen(true)}
              >
                Sí, Quiero Esta Guía Ahora
              </Button>
              <p className="text-sm sm:text-base italic text-muted-foreground max-w-md px-4">
                Porque estoy listo para tener éxito en el marketing en red
              </p>
            </div>
          </div>

          {/* Grid de Beneficios Tangibles - 4 Herramientas Principales */}
          <div className="space-y-8 px-4">
            <div className="text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Todo Lo Que Obtienes Dentro
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground">
                4 herramientas principales diseñadas para llevarte de la confusión al éxito
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Network,
                  title: "Hoja de Ruta Interactiva",
                  color: 'primary',
                  benefit: `Un recurso visual y práctico que te acompaña en cada fase del marketing en red.

Lo que te permitirá saber exactamente qué hacer cada día sin sentirte perdido.

Serás capaz de avanzar con confianza, lo que significa que construirás tu negocio de forma estructurada y efectiva.`
                },
                {
                  icon: MessageSquare,
                  title: "Plantillas para Contactos",
                  color: 'secondary',
                  benefit: `Scripts probados y mensajes efectivos para atraer nuevos prospectos.

Lo que significa que podrás conseguir contactos de calidad sin sonar vendedor.

Serás capaz de mantener el interés de tus prospectos, lo que te permitirá construir una red sólida rápidamente.`
                },
                {
                  icon: Target,
                  title: "Checklists de Éxito Semanal",
                  color: 'accent',
                  benefit: `Listas de verificación para evaluar tu avance y planificar futuras acciones.

Lo que te permitirá medir tu progreso real cada semana.

Podrás ajustar tu estrategia constantemente, lo que significa que siempre estarás mejorando y creciendo.`
                },
                {
                  icon: Users,
                  title: "Guías sobre Liderazgo",
                  color: 'chart-4',
                  benefit: `Fuentes de conocimiento para convertirte en un líder efectivo.

Lo que te permitirá inspirar y acompañar a otros en el marketing en red.

Serás capaz de construir un equipo que trabaja contigo, lo que significa que multiplicarás tus ingresos exponencialmente.`
                }
              ].map((item, i) => {
                const Icon = item.icon;
                const colorMap: Record<string, string> = {
                  'primary': 'border-t-primary bg-primary/5',
                  'secondary': 'border-t-secondary bg-secondary/5',
                  'accent': 'border-t-accent bg-accent/5',
                  'chart-4': 'border-t-chart-4 bg-chart-4/5'
                };
                const iconColorMap: Record<string, string> = {
                  'primary': 'text-primary',
                  'secondary': 'text-secondary',
                  'accent': 'text-accent',
                  'chart-4': 'text-chart-4'
                };
                const bgColorMap: Record<string, string> = {
                  'primary': 'bg-primary/10',
                  'secondary': 'bg-secondary/10',
                  'accent': 'bg-accent/10',
                  'chart-4': 'bg-chart-4/10'
                };
                return (
                  <Card key={i} className={`border-t-4 ${colorMap[item.color]} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full ${bgColorMap[item.color]} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${iconColorMap[item.color]}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground whitespace-pre-line">
                            {item.benefit}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Intermedio 2 */}
          <div className="text-center space-y-4 py-8 px-4">
            <div className="flex flex-col items-center gap-3">
              <div className="text-center space-y-2 mb-4">
                <p className="text-base sm:text-lg text-muted-foreground">
                  <span className="line-through text-gray-400">$47</span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary ml-2 sm:ml-3">$9.97</span>
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-base sm:text-xl md:text-2xl px-4 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:scale-105 w-full sm:w-auto max-w-full leading-tight"
                onClick={() => setCheckoutModalOpen(true)}
              >
                <span className="text-balance">Quiero Acceso a Todas las Herramientas</span>
              </Button>
              <p className="text-sm sm:text-base italic text-muted-foreground max-w-md px-4">
                Porque merezco generar ingresos consistentes y mejorar mi calidad de vida
              </p>
            </div>
          </div>

          {/* Funciona en Todos Tus Dispositivos */}
          <div className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
                Funciona en Todos Tus Dispositivos
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                Accede a todas las herramientas desde cualquier lugar y en cualquier momento. Diseñado para que trabajes desde donde estés.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center p-6 bg-card/95 border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/>
                        <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2"/>
                        <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3 className="text-center text-lg sm:text-xl font-bold text-foreground mb-2 w-full mx-auto">Computadora</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Trabaja cómodamente desde tu escritorio con acceso completo a todas las herramientas
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 bg-card/95 border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
                        <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="text-center text-lg sm:text-xl font-bold text-foreground mb-2 w-full mx-auto">Teléfono</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Revisa tus plantillas y checklists mientras estás en movimiento, desde cualquier lugar
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 bg-card/95 border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 flex flex-col items-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2"/>
                        <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2"/>
                        <line x1="9" y1="13" x2="15" y2="13" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3 className="text-center text-lg sm:text-xl font-bold text-foreground mb-2 w-full mx-auto">Tablet</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Perfecto para presentaciones y reuniones con tu equipo o prospectos
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-primary/20 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Acceso Instantáneo y Permanente
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      Una vez que adquieres Network Marketing Mastery, tienes acceso de por vida a todas las herramientas. Sin suscripciones mensuales, sin cargos ocultos. Úsalas cuando quieras, donde quieras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonios Reales */}
          <div className="py-12 space-y-8 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground">
              Lo Que Dicen Quienes Ya Lo Lograron
            </h2>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 bg-card/95">
                <CardContent className="py-5 sm:py-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Después de 6 meses sin resultados, encontré Network Marketing Mastery. En solo 3 semanas ya tenía mi primera red de 15 contactos activos. Las plantillas de contacto son oro puro. Ahora sé exactamente qué decir y cómo mantener el interés."
                  </p>
                  <p className="text-sm font-semibold text-foreground">- María González, 32 años</p>
                  <p className="text-xs text-muted-foreground">Emprendedora independiente</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-card/95">
                <CardContent className="py-5 sm:py-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Lo que más me ayudó fue la Hoja de Ruta Interactiva. Finalmente entendí qué hacer cada día. Ahora lidero un equipo de 30 personas y genero ingresos consistentes. Este sistema realmente funciona si lo sigues."
                  </p>
                  <p className="text-sm font-semibold text-foreground">- Carlos Ramírez, 38 años</p>
                  <p className="text-xs text-muted-foreground">Líder de equipo</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-card/95">
                <CardContent className="py-5 sm:py-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Intenté 4 empresas diferentes sin éxito. Con este sistema aprendí a elegir correctamente y a construir desde cero. Hoy tengo un negocio sostenible que me da libertad financiera. Las herramientas de liderazgo cambiaron mi forma de trabajar."
                  </p>
                  <p className="text-sm font-semibold text-foreground">- Ana Martínez, 29 años</p>
                  <p className="text-xs text-muted-foreground">Networker profesional</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-card/95">
                <CardContent className="py-5 sm:py-6 space-y-3">
                  <div className="flex items-center gap-2 text-amber-500">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Los checklists semanales me hicieron darme cuenta de que sí estaba avanzando aunque algunos días no lo sintiera. Ver mi progreso en cada evaluación me motivó a seguir. Hoy tengo un equipo comprometido y resultados reales."
                  </p>
                  <p className="text-sm font-semibold text-foreground">- Roberto Silva, 41 años</p>
                  <p className="text-xs text-muted-foreground">Emprendedor digital</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8 sm:mb-12">
              Preguntas Frecuentes
            </h2>
            
            <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "¿Necesito experiencia previa en marketing en red?",
                  a: "No, Network Marketing Mastery está diseñado específicamente para principiantes. Te acompañamos desde el primer paso, incluso si nunca has hecho marketing en red antes. La Hoja de Ruta Interactiva te muestra exactamente qué hacer en cada fase."
                },
                {
                  q: "¿Cuánto tiempo necesito invertir cada día?",
                  a: "Con solo 30-60 minutos al día puedes implementar las estrategias. El sistema está diseñado para personas ocupadas que necesitan equilibrar el negocio con otras responsabilidades. Los checklists semanales te ayudan a optimizar tu tiempo."
                },
                {
                  q: "¿Funciona para cualquier empresa de marketing en red?",
                  a: "Sí, las estrategias y herramientas son aplicables a cualquier empresa de marketing en red. Te enseñamos los principios fundamentales que funcionan en cualquier compañía. Además, te ayudamos a elegir la empresa correcta para ti."
                },
                {
                  q: "¿Qué pasa si no veo resultados?",
                  a: "Ofrecemos una garantía de 7 días. Si aplicas el sistema y no ves progreso, te devolvemos tu inversión sin preguntas. La mayoría de usuarios reportan sus primeros contactos de calidad en las primeras 2-3 semanas."
                },
                {
                  q: "¿Qué incluye exactamente el producto?",
                  a: "Obtienes acceso inmediato a las 4 herramientas principales (Hoja de Ruta Interactiva, Plantillas para Contactos, Checklists de Éxito Semanal y Principios de Liderazgo). Cada herramienta incluye instrucciones detalladas y ejemplos prácticos que puedes aplicar inmediatamente. Todo está diseñado para ser auto-aplicable y fácil de implementar."
                },
                {
                  q: "¿Es diferente a otros cursos de marketing en red?",
                  a: "Totalmente. No es un curso teórico. Son herramientas prácticas que usas inmediatamente: plantillas, checklists, mapas paso a paso. Todo enfocado en acción, no en teoría. Cada herramienta está diseñada para resolver un problema específico que enfrentan los emprendedores."
                },
                {
                  q: "¿Qué pasa si tengo dificultades para mantener contactos?",
                  a: "Las Plantillas para Contactos incluyen scripts probados y mensajes efectivos para conseguir y mantener el interés de nuevos prospectos. Aprenderás a comunicarte de forma efectiva sin sonar vendedor o desesperado. Es una de las herramientas más valoradas por nuestros usuarios."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-2 border-gray-200 rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-foreground hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Sección de Garantía */}
          <Card className="border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="py-8 sm:py-10 text-center space-y-6 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Garantía de 7 Días Sin Riesgo
              </h3>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Estamos tan seguros de que Network Marketing Mastery transformará tu negocio, 
                que te damos <span className="font-bold text-primary">7 días completos</span> para probarlo.
              </p>

              <div className="bg-white/50 rounded-lg p-4 sm:p-6 space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-base text-foreground">
                    <span className="font-semibold">Prueba todo el sistema</span> sin riesgo durante 7 días completos
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">
                    <span className="font-semibold">Si no ves progreso</span> o no cumple tus expectativas, te devolvemos el 100% de tu inversión
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">
                    <span className="font-semibold">Sin preguntas, sin complicaciones</span> - Solo envías un email y procesamos tu reembolso
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg font-semibold text-foreground pt-4">
                El único riesgo es quedarte donde estás ahora...
              </p>
            </CardContent>
          </Card>

          {/* Justificación de Precio */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary/20 shadow-xl">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center">
                ¿Por Qué Solo $9.97?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground text-center leading-relaxed">
                Podría cobrar <span className="font-bold line-through text-gray-500">$47</span> como otros programas de marketing en red.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Pero sé lo que es estar en tu lugar. Sé lo que es querer construir un negocio pero no tener un sistema claro. Sé lo que es intentar una y otra vez sin resultados y sentir que estás solo en el proceso.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Por eso decidí hacer estas herramientas accesibles para TODOS.</span> Porque no quiero que el dinero sea la razón por la que sigas sin generar los ingresos que mereces.
              </p>
              <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-primary/20 shadow-lg">
                <p className="text-xl sm:text-2xl font-bold text-center text-foreground mb-4">
                  Menos de lo que gastas en un café al día
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Otros programas</p>
                    <p className="text-2xl sm:text-3xl font-bold line-through text-gray-400">$47</p>
                  </div>
                  <div className="text-4xl text-primary">→</div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Network Marketing Mastery</p>
                    <p className="text-5xl font-bold text-primary">$9.97</p>
                  </div>
                </div>
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold">Eso es solo $0.23 al día</span> para transformar tu negocio de marketing en red
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Acceso inmediato:</span> Empieza a usar todas las herramientas HOY
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Garantía de 7 días:</span> Si no te ayuda, te devuelvo tu dinero
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Sin riesgos:</span> Prueba el sistema completo sin compromisos
                  </p>
                </div>
              </div>
              <div className="bg-accent/20 border-2 border-accent/40 rounded-xl p-6 text-center">
                <p className="text-lg font-semibold text-accent-foreground mb-2">
                  ⚠️ Este precio es temporal
                </p>
                <p className="text-muted-foreground">
                  Estoy construyendo testimonios reales. Una vez tenga 500 miembros, el precio subirá a $27. <span className="font-bold">Si entras ahora, mantienes $9.97 para siempre.</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center space-y-6 py-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              ¿Listo para Transformar Tu Negocio de Marketing en Red?
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de emprendedores ya están usando este sistema para generar ingresos consistentes. 
              Es tu turno de dar el siguiente paso.
            </p>

            <div className="flex flex-col items-center gap-3 pt-4">
              <div className="text-center space-y-2 mb-4">
                <p className="text-base sm:text-lg text-muted-foreground">
                  <span className="line-through text-gray-400">$47</span>
                  <span className="text-3xl sm:text-4xl font-bold text-primary ml-2 sm:ml-3">$9.97</span>
                </p>
              </div>
              <Button 
                size="lg" 
                className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:scale-105 w-full sm:w-auto"
                onClick={() => setCheckoutModalOpen(true)}
              >
                Sí, Quiero Empezar Ahora
              </Button>
              <p className="text-sm sm:text-base italic text-muted-foreground max-w-md px-4">
                Porque estoy listo para mejorar mi calidad de vida
              </p>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              🔒 Pago seguro • ✅ Garantía de 7 días • 📧 Acceso inmediato
            </p>
          </div>

          {/* Footer */}
          <div className="border-t pt-12 mt-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Network Marketing Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  El sistema práctico para emprendedores que quieren dominar el marketing en red.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Producto</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Características</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Testimonios</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Soporte</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Centro de ayuda</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Garantía</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Política de privacidad</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Política de reembolso</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© 2026 Network Marketing Mastery. Todos los derechos reservados.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Modal de Checkout */}
      <CheckoutModal
        open={checkoutModalOpen}
        onOpenChange={setCheckoutModalOpen}
        checkoutUrl={HOTMART_CHECKOUT_URL}
        source="home"
      />
    </div>
  );
}
