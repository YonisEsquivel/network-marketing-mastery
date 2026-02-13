import { ArrowLeft, Calculator, DollarSign, Users, Target, TrendingUp, AlertCircle, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export default function CalculadoraCerteza() {
  const STORAGE_KEY = 'calculadoraCerteza_data';
  
  // Cargar estado desde localStorage
  const [metaMensual, setMetaMensual] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.metaMensual || "";
      } catch (e) {
        return "";
      }
    }
    return "";
  });
  
  const [comisionPromedio, setComisionPromedio] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.comisionPromedio || "";
      } catch (e) {
        return "";
      }
    }
    return "";
  });
  
  const [tasaConversion, setTasaConversion] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.tasaConversion || "10";
      } catch (e) {
        return "10";
      }
    }
    return "10";
  });
  
  const [diasTrabajo, setDiasTrabajo] = useState<string>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.diasTrabajo || "25";
      } catch (e) {
        return "25";
      }
    }
    return "25";
  });
  
  const [resultados, setResultados] = useState<{
    ventasNecesarias: number;
    prospectosDiarios: number;
    prospectosMensuales: number;
    ventasPorDia: number;
    ingresoDiario: number;
  } | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.resultados || null;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Guardar en localStorage cuando cambien los valores
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      metaMensual,
      comisionPromedio,
      tasaConversion,
      diasTrabajo,
      resultados
    }));
  }, [metaMensual, comisionPromedio, tasaConversion, diasTrabajo, resultados]);

  const calcular = () => {
    const meta = parseFloat(metaMensual);
    const comision = parseFloat(comisionPromedio);
    const conversion = parseFloat(tasaConversion) / 100;
    const dias = parseInt(diasTrabajo);

    if (isNaN(meta) || isNaN(comision) || isNaN(conversion) || isNaN(dias) || meta <= 0 || comision <= 0 || dias <= 0) {
      alert("Por favor completa todos los campos con valores válidos");
      return;
    }

    const ventasNecesarias = Math.ceil(meta / comision);
    const ventasPorDia = ventasNecesarias / dias;
    const prospectosDiarios = Math.ceil(ventasPorDia / conversion);
    const prospectosMensuales = prospectosDiarios * dias;
    const ingresoDiario = meta / dias;

    setResultados({
      ventasNecesarias,
      prospectosDiarios,
      prospectosMensuales,
      ventasPorDia,
      ingresoDiario
    });
  };

  const limpiar = () => {
    setMetaMensual("");
    setComisionPromedio("");
    setTasaConversion("10");
    setDiasTrabajo("25");
    setResultados(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-accent text-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
            🎁 PACK PREMIUM #6
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Calculadora de Certeza
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6 sm:mb-8">
            Tu Plan de Libertad Diaria: De Metas Grandes a Acciones Simples
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Calculadora Interactiva</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Resultados Instantáneos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Plan de Acción Diario</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-emerald-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            🎯 ¿Por Qué Necesitas Esto?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Tener una meta grande como <strong className="text-emerald-600">"Ganar $5,000 al mes"</strong> o <strong className="text-emerald-600">"Ser Diamante"</strong> es genial. Pero si no sabes QUÉ HACER HOY para llegar ahí, esa meta solo genera ansiedad.
            </p>
            <p>
              Esta calculadora toma tu meta económica y la <strong className="text-emerald-600">traduce en acciones diarias simples</strong>: cuántas personas debes contactar HOY para garantizar tu meta. Sin conjeturas. Sin estrés. Solo matemáticas.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>💡 Recuerda:</strong> No puedes controlar cuánto ganas hoy. Pero SÍ puedes controlar cuántas personas contactas. Esta herramienta te da ese control.
            </p>
          </div>
        </div>

        {/* Complementa las 4 Herramientas Principales */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 mb-12 border-2 border-emerald-200">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
            🔗 Cómo Complementa las 4 Herramientas Principales
          </h3>
          <div className="space-y-3 text-base sm:text-lg text-muted-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <p><strong>Hoja de Ruta:</strong> La Hoja de Ruta te dice las fases. Esta calculadora te dice CUÁNTOS prospectos necesitas en cada fase.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <p><strong>Plantillas de Contacto:</strong> Las plantillas te dan los mensajes. Esta calculadora te dice CUÁNTAS veces usarlos al día.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <p><strong>Checklists:</strong> Los checklists te dan tareas. Esta calculadora te da el NÚMERO EXACTO de tareas diarias.</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              <p><strong>Principios de Liderazgo:</strong> Los principios te enseñan a liderar. Esta calculadora te da METAS CLARAS para tu equipo.</p>
            </div>
          </div>
        </div>

        {/* Calculadora Interactiva */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-emerald-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              🧮 Calculadora Interactiva
            </h2>
          </div>

          <div className="space-y-6">
            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="meta" className="text-base font-semibold text-foreground mb-2 block">
                  💰 ¿Cuánto quieres ganar este mes?
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="meta"
                    type="number"
                    placeholder="Ej: 3000"
                    value={metaMensual}
                    onChange={(e) => setMetaMensual(e.target.value)}
                    className="pl-10 text-base sm:text-lg h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="comision" className="text-base font-semibold text-foreground mb-2 block">
                  💵 Comisión promedio por venta
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="comision"
                    type="number"
                    placeholder="Ej: 150"
                    value={comisionPromedio}
                    onChange={(e) => setComisionPromedio(e.target.value)}
                    className="pl-10 text-base sm:text-lg h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="conversion" className="text-base font-semibold text-foreground mb-2 block">
                  📊 Tasa de conversión (%)
                </Label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="conversion"
                    type="number"
                    placeholder="Ej: 10"
                    value={tasaConversion}
                    onChange={(e) => setTasaConversion(e.target.value)}
                    className="pl-10 text-base sm:text-lg h-12"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Si no sabes, usa 10% (1 de cada 10 prospectos compra)
                </p>
              </div>

              <div>
                <Label htmlFor="dias" className="text-base font-semibold text-foreground mb-2 block">
                  📅 Días de trabajo al mes
                </Label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="dias"
                    type="number"
                    placeholder="Ej: 25"
                    value={diasTrabajo}
                    onChange={(e) => setDiasTrabajo(e.target.value)}
                    className="pl-10 text-base sm:text-lg h-12"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Típicamente 25 días (lunes a viernes)
                </p>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={calcular}
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base sm:text-lg px-8 py-6 rounded-lg shadow-lg w-full sm:w-auto"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Mi Número Mágico
              </Button>
              <Button
                onClick={limpiar}
                size="lg"
                variant="outline"
                className="font-bold text-base sm:text-lg px-8 py-6 rounded-lg w-full sm:w-auto"
              >
                Limpiar
              </Button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {resultados && (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 md:p-10 mb-12 border-2 border-emerald-300 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
              ✨ Tu Plan de Libertad Diaria
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Tu Número Mágico Diario</h3>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">
                  {resultados.prospectosDiarios}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Personas con las que debes hablar HOY
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-teal-200 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Ingreso Diario Objetivo</h3>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-teal-600 mb-2">
                  ${resultados.ingresoDiario.toFixed(2)}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Lo que necesitas ganar cada día
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Ventas Necesarias</h3>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                  {resultados.ventasNecesarias}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Ventas totales este mes ({resultados.ventasPorDia.toFixed(1)} por día)
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Prospectos Mensuales</h3>
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">
                  {resultados.prospectosMensuales}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Total de personas a contactar este mes
                </p>
              </div>
            </div>

            {/* Interpretación */}
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    📖 Cómo Interpretar Estos Números
                  </h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <p>
                      <strong className="text-emerald-600">Tu Número Mágico ({resultados.prospectosDiarios}):</strong> Si hablas con {resultados.prospectosDiarios} personas HOY, estás en camino a tu meta. No más, no menos.
                    </p>
                    <p>
                      <strong className="text-teal-600">Ingreso Diario (${resultados.ingresoDiario.toFixed(2)}):</strong> Cada día que cumples tu número mágico, estás ganando esto (en promedio).
                    </p>
                    <p>
                      <strong className="text-blue-600">Ventas Necesarias ({resultados.ventasNecesarias}):</strong> Necesitas cerrar {resultados.ventasNecesarias} ventas este mes. Eso es {resultados.ventasPorDia.toFixed(1)} ventas por día.
                    </p>
                    <p className="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-500">
                      <strong>💡 Consejo:</strong> No te obsesiones con las ventas. Obsesiónate con tu número mágico diario. Si lo cumples, las ventas llegarán.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cómo Usar Esta Herramienta */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-emerald-200 mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            📋 Cómo Usar Esta Herramienta Cada Día
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Calcula Tu Número Mágico</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Usa la calculadora arriba para saber cuántas personas debes contactar HOY.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Escribe Tu Número en un Post-it</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Pega el post-it en tu escritorio o espejo. Ese es tu único objetivo del día.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Haz Una Marca Por Cada Prospecto</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Cada vez que hables con alguien, haz una marca. Cuando llegues a tu número, termina el día.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Celebra Cuando Lo Logres</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Cumplir tu número mágico es una victoria. Celébralo. Mañana lo haces de nuevo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            La Certeza Elimina La Ansiedad
          </h3>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ahora que sabes tu número mágico, no hay excusas. No hay confusión. 
            Solo hay acción. Empieza hoy.
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
