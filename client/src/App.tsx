import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Upsell from "./pages/Upsell";
import Downsell from "./pages/Downsell";
import ThankYou from "./pages/ThankYou";
import HojaDeRuta from "./pages/HojaDeRuta";
import PlantillasContactos from "./pages/PlantillasContactos";
import ChecklistsExito from "./pages/ChecklistsExito";
import GuiasLiderazgo from "./pages/GuiasLiderazgo";
import EstrategiasAtraccion from "./pages/EstrategiasAtraccion";
import TallerLiderazgo from "./pages/TallerLiderazgo";
import AdaptacionTendencias from "./pages/AdaptacionTendencias";
import ProgramaMotivacion from "./pages/ProgramaMotivacion";
import RedisenoVida from "./pages/RedisenoVida";
import CalculadoraCerteza from "./pages/CalculadoraCerteza";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/upsell"} component={Upsell} />
      <Route path={"/downsell"} component={Downsell} />
      <Route path={"/thank-you"} component={ThankYou} />
      <Route path={"/hoja-de-ruta"} component={HojaDeRuta} />
      <Route path={"/plantillas-contactos"} component={PlantillasContactos} />
      <Route path={"/checklists-exito"} component={ChecklistsExito} />
      <Route path={"/guias-liderazgo"} component={GuiasLiderazgo} />
      <Route path={"/estrategias-atraccion"} component={EstrategiasAtraccion} />
      <Route path={"/taller-liderazgo"} component={TallerLiderazgo} />
      <Route path={"/adaptacion-tendencias"} component={AdaptacionTendencias} />
      <Route path={"/programa-motivacion"} component={ProgramaMotivacion} />
      <Route path={"/rediseno-vida"} component={RedisenoVida} />
      <Route path={"/calculadora-certeza"} component={CalculadoraCerteza} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
