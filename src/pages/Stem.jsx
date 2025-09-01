import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StemHero from "../components/stem/StemHero";
import StemInAction from "../components/stem/StemInAction";
import StemPrograms from "../components/stem/StemPrograms";
import StemSDGs from "../components/stem/StemSDGs";
import StemPartnerCategories from "../components/stem/StemPartnerCategories";
import StemPartnerCategoriesCTA from "../components/stem/StemPartnerCategoriesCTA";


const stem = () => {
  return (
    <main className="w-full">
      <Navbar />
      <StemHero />
      <StemInAction />
      <StemPrograms />
      <StemSDGs />
      <StemPartnerCategories />
      <StemPartnerCategoriesCTA />
      <Footer />
    </main>
  );
};

export default stem;
