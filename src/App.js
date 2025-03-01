import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/authentification/home";
import Logement from "./components/authentification/logement";
import Inscription from "./components/authentification/inscription";
import Connexion from "./components/authentification/connexion";
import ForgetPassword from "./components/authentification/forgetPassword";
import Profil from "./components/authentification/profil";
import Map from "./components/authentification/map";
import Sponsor from "./components/authentification/sponsor";
import Medecin from "./components/authentification/medecin";
import TelechargeBrochure from "./components/authentification/telechargeBrochure";
import Contact from "./components/authentification/contact";
import NotFound from './components/authentification/NotFound';
import Brochure from './components/authentification/brochure';
import Navbar from './components/authentification/navbar';
import Choix from './components/mesChoix/choix';
import Notice from './components/mesChoix/notice';
import France from './components/mesChoix/france';
import Langue from './components/langues/langue';
import France1 from './components/mesChoix/france1';
import France2 from './components/mesChoix/france2';
import France3 from './components/mesChoix/france3';
import France4 from './components/mesChoix/france4';
import Canada from './components/mesChoix/canada';
import Canada1 from './components/mesChoix/canada1';
import Canada2 from './components/mesChoix/canada2';
import Belgique from './components/mesChoix/belgique';
import Allemagne from './components/mesChoix/allemagne';
import OffreEmploi from './components/offres/offreEmploi';

import CoursAnglais from './components/langues/coursAnglais';
import CoursFrançais from './components/langues/coursFrançais';
import CoursAllemand from './components/langues/coursAllemand';

import Presentation from "./components/mobiliis/presentation";
import Presentation1 from "./components/mobiliis/presentation1";

import Temoignage from "./components/temoignages/temoignage";
import ToutTemoignages from "./components/temoignages/toutTemoignages";
import PersonneTemoignage from "./components/temoignages/personneTemoignage";

 import Coaching from './components/services/coaching';
 import Admission from './components/services/admission';
 import Service1 from './components/services/service1';
 import Avi from './components/services/avi';

 import AviForms1 from './components/forms/aviForms1';
 import AviForms2 from './components/forms/aviForms2';
 import AviForms3 from './components/forms/aviForms3';
 import FormManager from './components/forms/formManager';

 import FinanceEtudiant from './components/services/financeEtudiant';
import Admin from './components/Admins/admin';
import Layout from './components/layout/layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="*" element={<NotFound />} />
          < Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/map" element={<Map />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/" element={<Medecin />} />
          <Route path="/telechargeBrochure" element={<TelechargeBrochure />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/presentation1" element={<Presentation1 />} />
          <Route path="/temoignage" element={<Temoignage />} />
          <Route path="/toutTemoignages" element={<ToutTemoignages />} />
          <Route path="/personneTemoignage" element={<PersonneTemoignage />} />
          <Route path="/choix" element={<Choix />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/belgique" element={<Belgique />} />
          <Route path="/france" element={<France />} />
          <Route path="/france1" element={<France1 />} />
          <Route path="/france2" element={<France2 />} />
          <Route path="/france3" element={<France3 />} />
          <Route path="/france4" element={<France4 />} />
          <Route path="/canada" element={<Canada/>} />
          <Route path="/canada1" element={<Canada1/>} />
          <Route path="/canada2" element={<Canada2/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/langue" element={<Langue />} />
          <Route path="/coursAnglais" element={<CoursAnglais />} />
          <Route path="/coursFrançais" element={<CoursFrançais />} />
          <Route path="/coursAllemand" element={<CoursAllemand />} />
           <Route path="/coaching" element={<Coaching />} /> 
           <Route path="/admission" element={<Admission/>} /> 
           <Route path="/allemagne" element={<Allemagne/>} /> 
           <Route path="/offreEmploi" element={<OffreEmploi/>} /> 
           <Route path="/service1" element={<Service1/>} />
           <Route path="/financeEtudiant" element={<FinanceEtudiant/>} />
           <Route path="/avi" element={<Avi/>} />
           <Route path="/aviForms1" element={<AviForms1/>} />
           <Route path="/aviForms2" element={<AviForms2/>} />
           <Route path="/aviForms3" element={<AviForms3/>} />
           <Route path="/formManager" element={<FormManager/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

