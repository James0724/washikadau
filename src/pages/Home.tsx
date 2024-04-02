import React from "react";
import HeroSlider from "../components/ui/HeroSlider";
import Services from "../components/homecomponents/Services";
import ProjectsSlider from "../components/ui/ProjectsSlider";

function Home() {
  return (
    <section>
      <HeroSlider />
      <Services />
      <ProjectsSlider />
    </section>
  );
}

export default Home;
