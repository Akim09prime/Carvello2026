import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Despre from "@/pages/Despre";
import Servicii from "@/pages/Servicii";
import ServiciiCNC from "@/pages/ServiciiCNC";
import Portofoliu from "@/pages/Portofoliu";
import Magazin from "@/pages/Magazin";
import ProcesGarantii from "@/pages/ProcesGarantii";
import Recenzii from "@/pages/Recenzii";
import Contact from "@/pages/Contact";
import Vopsitorie from "@/pages/Vopsitorie";
import Proiectare from "@/pages/Proiectare";
import CerereOferta from "@/pages/CerereOferta";
import Proiect from "@/pages/Proiect";

// Scroll to top component
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/despre" component={Despre} />
          <Route path="/servicii" component={Servicii} />
          <Route path="/servicii-cnc" component={ServiciiCNC} />
          <Route path="/portofoliu" component={Portofoliu} />
          <Route path="/magazin" component={Magazin} />
          <Route path="/proces-garantii" component={ProcesGarantii} />
          <Route path="/recenzii" component={Recenzii} />
          <Route path="/vopsitorie" component={Vopsitorie} />
          <Route path="/proiectare" component={Proiectare} />
          <Route path="/cerere-oferta" component={CerereOferta} />
          <Route path="/proiect/:id" component={Proiect} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
