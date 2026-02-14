import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2,
  Shield,
  Clock,
  Heart,
  Zap,
  TrendingUp,
  Users,
  Target,
  Calculator,
  BookOpen
} from "lucide-react";

export default function Downsell() {
  const upsells = [
    {
      icon: Zap,
      name: "Estrategias de Atracción Efectivas",
      format: "Guía Paso a Paso"
    },
    {
      icon: Users,
      name: "Taller de Habilidades de Liderazgo",
      format: "Workbook Interactivo"
    },
    {
      icon: TrendingUp,
      name: "Adaptación a Nuevas Tendencias",
      format: "Checklist Actualizable"
    },
    {
      icon: Target,
      name: "Programa de Motivación Colectiva",
      format: "Plan de Acción"
    },
    {
      icon: BookOpen,
      name: "Rediseño de Vida y Propósito",
      format: "Hoja de Ruta Personal"
    },
    {
      icon: Calculator,
      name: "Calculadora de Certeza",
      format: "Software Interactivo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      <div className="container max-w-5xl mx-auto py-12 sm:py-16 px-4">
        {/* Hero Empático */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-100 border-2 border-yellow-300 rounded-full mb-4">
            <Heart className="w-6 h-6 text-yellow-700" />
            <p className="text-sm sm:text-base font-bold text-yellow-800">
              Te entiendo perfectamente
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            ¿El Dinero Fue un Problema?
            <br className="hidden sm:block" />
            <span className="text-primary"> Déjame Ayudarte</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sé lo que se siente cuando quieres invertir en tu futuro pero el presupuesto está ajustado. 
            Por eso preparé algo especial <span className="font-bold text-primary">solo para ti.</span>
          </p>
        </div>

        {/* Oferta Especial */}
        <Card className="border-4 border-primary bg-gradient-to-br from-primary/5 to-secondary/5 mb-12">
          <CardHeader>
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-red-100 border-2 border-red-300 rounded-lg mb-4">
                <p className="text-sm sm:text-base font-bold text-red-700 flex items-center gap-2 justify-center">
                  <Clock className="w-5 h-5" />
                  Esta oferta solo está disponible en esta página
                </p>
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Oferta Especial: 50% de Descuento
              </CardTitle>
              <p className="text-base sm:text-lg text-muted-foreground">
                El mismo Pack Premium con las 6 herramientas avanzadas
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-primary/20 shadow-lg">
              <div className="text-center space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground">Precio Regular:</p>
                <p className="text-3xl sm:text-4xl text-gray-400 line-through">$19.97</p>
                <p className="text-lg sm:text-xl font-bold text-primary">Tu Precio Especial de Hoy:</p>
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary">$9.97</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Ahorras $10.00 (50% de descuento)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparación de Inversión */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Ponlo en Perspectiva
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { item: "2 Cafés de Starbucks", price: "$10" },
              { item: "1 Pizza Mediana", price: "$12" },
              { item: "1 Entrada de Cine", price: "$11" }
            ].map((comparison, i) => (
              <Card key={i} className="text-center p-6 bg-white border-2 border-gray-200">
                <CardContent className="pt-6">
                  <p className="text-lg sm:text-xl font-bold text-foreground mb-2">{comparison.item}</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-400 mb-4">{comparison.price}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Se consume en minutos y desaparece
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl sm:text-2xl font-bold text-primary mb-2">
              VS
            </p>
            <Card className="border-4 border-primary bg-gradient-to-br from-primary/10 to-secondary/10 max-w-2xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <p className="text-lg sm:text-xl font-bold text-foreground mb-2">Pack Premium</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-4">$9.97</p>
                <p className="text-base sm:text-lg text-muted-foreground font-semibold">
                  Acceso de por vida a 6 herramientas que transforman tu negocio para siempre
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Los 6 Recursos Incluidos */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            Todo Lo Que Obtienes Por Solo $9.97
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upsells.map((upsell, i) => {
              const Icon = upsell.icon;
              return (
                <div key={i} className="flex items-start gap-4 bg-white p-4 sm:p-6 rounded-lg border-2 border-gray-200 hover:border-primary/50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {upsell.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{upsell.format}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Principal */}
        <div className="text-center space-y-6 mb-12">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border-4 border-primary shadow-2xl max-w-2xl mx-auto">
            <div className="inline-block px-4 py-2 bg-red-100 border-2 border-red-300 rounded-lg mb-6">
              <p className="text-sm sm:text-base font-bold text-red-700 flex items-center gap-2 justify-center">
                <Clock className="w-5 h-5" />
                Oferta válida solo en esta página
              </p>
            </div>
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-6">$9.97</p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Acceso de por vida a las 6 herramientas avanzadas
            </p>
            <Button 
              size="lg" 
              className="text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-6 sm:py-7 md:py-8 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Sí, Acepto Esta Oferta Especial
            </Button>
            <p className="text-sm sm:text-base italic text-muted-foreground mt-4">
              Porque merezco invertir en mi crecimiento sin sacrificar mi presupuesto
            </p>
          </div>
        </div>

        {/* Garantía */}
        <Card className="border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 max-w-3xl mx-auto mb-8">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Garantía de 7 Días Sin Riesgo
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Si aplicas las herramientas del Pack Premium y no ves progreso, te devolvemos tu inversión completa sin preguntas. 
                  No tienes nada que perder y todo por ganar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Urgencia Final */}
        <div className="text-center">
          <Card className="border-4 border-yellow-300 bg-yellow-50 max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base sm:text-lg font-bold text-foreground mb-2">
                ⚠️ Importante
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Esta oferta especial de $9.97 solo está disponible en esta página. 
                Si sales, perderás este descuento del 50% para siempre.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
