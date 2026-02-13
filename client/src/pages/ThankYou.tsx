import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2,
  Mail,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      <div className="container max-w-3xl mx-auto py-12 sm:py-16 px-4">
        {/* Hero de Confirmación */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            ¡Gracias por tu Compra! 🎉
          </h1>

          <p className="text-xl text-muted-foreground">
            Tu pago ha sido procesado exitosamente
          </p>
        </div>

        {/* Instrucción Principal: Revisar Email */}
        <Card className="border-2 border-blue-200 bg-blue-50 mb-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Revisa tu Email Ahora
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  En los próximos <strong>5 minutos</strong> recibirás un email con:
                </p>
                <div className="space-y-2">
                  {[
                    "Tu usuario (el email que usaste para comprar)",
                    "Tu contraseña temporal",
                    "El link directo para acceder a las herramientas"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advertencia: Revisar Carpetas */}
        <Card className="border-2 border-red-300 bg-red-50 mb-6">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  ⚠️ ¡MUY IMPORTANTE!
                </h3>
                <p className="text-base text-muted-foreground mb-4">
                  Si no ves el email en tu bandeja principal, <strong className="text-red-700">REVISA ESTAS CARPETAS:</strong>
                </p>
              </div>
            </div>

            <div className="space-y-3 pl-0 sm:pl-12">
              {[
                {
                  icon: "📧",
                  title: "SPAM / Correo no deseado",
                  subtitle: "El sistema a veces envía ahí automáticamente"
                },
                {
                  icon: "🏷️",
                  title: "PROMOCIONES / Social",
                  subtitle: "Gmail suele clasificar emails aquí"
                },
                {
                  icon: "📬",
                  title: "ACTUALIZACIONES / Notificaciones",
                  subtitle: "Outlook puede enviarlo aquí"
                }
              ].map((folder, i) => (
                <Card key={i} className="border border-gray-200 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{folder.icon}</span>
                      <div>
                        <p className="font-bold text-foreground">{folder.title}</p>
                        <p className="text-sm text-muted-foreground">{folder.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-yellow-300 bg-yellow-50 mt-4">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong>Consejo:</strong> Si lo encuentras en spam, márcalo como "No es spam" para recibir futuros emails correctamente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Instrucción: Qué Hacer Si No Llega */}
        <Card className="border-2 border-gray-200 bg-white mb-6">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-3">
              ¿No ha llegado después de 5 minutos?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Espera hasta <strong>10 minutos</strong> y revisa todas las carpetas mencionadas arriba.
            </p>
            <p className="text-base text-muted-foreground">
              Una vez que tengas tus credenciales:
            </p>
          </CardContent>
        </Card>

        {/* CTA: Ir al Login */}
        <div className="text-center mb-8">
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.location.href = '/'}
          >
            Ir al Login de Network Marketing Mastery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Mensaje de Soporte */}
        <div className="text-center">
          <p className="text-base text-muted-foreground">
            ¿Problemas para acceder? Contáctanos respondiendo al email de bienvenida.
          </p>
        </div>
      </div>
    </div>
  );
}
