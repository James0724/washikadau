import React from "react";
import AboutHero from "../components/aboutcomponents/AboutHero";
import AboutWhat from "../components/aboutcomponents/AboutWhat";
import ImageTextContainerLeft from "../components/ui/ImageTextContainerLeft";

function About() {
  return (
    <section className="bg-black">
      <AboutHero />
      <ImageTextContainerLeft
        imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FNIC_0616a.jpg?alt=media&token=d62ac43f-59e5-4298-a1ad-7bb256d04b0f"
        imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FANG8101a.jpg?alt=media&token=c245979f-17f9-432a-aa1c-43ee70c120e2"
        text="Formally registered in 2013, Washikadau loosely translates to
                  mean stakeholders, refers to a team of artistic photographers
                  and filmmakers who freeze lasting memories. We put in our best
                  efforts to bring to life our clients ideas and expectations.
                  Over the years we have successfully managed to meet and
                  surpass our client’s expectations while delivering splendid
                  clips of timeless quality."
        heading="Who We Are"
      />

      <AboutWhat />
    </section>
  );
}

export default About;
