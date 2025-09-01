import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StemHero from "../components/Stem/StemHero";
import StemInAction from "../components/Stem/StemInAction";
import StemPrograms from "../components/Stem/StemPrograms";
import StemSDGs from "../components/Stem/StemSDGs";
import StemPartnerCategories from "../components/Stem/StemPartnerCategories";
import StemPartnerCategoriesCTA from "../components/stem/StemPartnerCategoriesCTA";


const Stem = () => {
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

export default Stem;
