import React from "react";
import Banner from "./Banner";
import ServiceCard from "../ui/ServiceCard";
import "../../styles/about.css";
import ImageTextContainer from "../ui/ImageTextContainer";

export default function Services() {
  return (
    <section className="home-services bg-black text-white pt-10">
      <div className="wrapper">
        <div className="home-services__inner">
          <div className="home-services__content-top">
            <div className="flex items-center flex-col w-full">
              <div className="small-cap py-8">
                <h5 className="font-Expert md:text-4xl text-2xl opacity-50 tracking-wider">
                  About Us
                </h5>
              </div>
              <h2 className="font-HeadingFont md:text-6xl text-2xl md:w-3/4 w-full leading-normal text-center px-1">
                DRIVEN BY CREATIVITY,
                <span className="text-red-600 italic lowercase">
                  CLICK IT OR MISS IT !
                </span>
              </h2>
            </div>
          </div>
          <ImageTextContainer
            imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FNIC_0616a.jpg?alt=media&token=d62ac43f-59e5-4298-a1ad-7bb256d04b0f"
            imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2FANG8101a.jpg?alt=media&token=c245979f-17f9-432a-aa1c-43ee70c120e2"
            text="Formally registered in 2013, Washikadau loosely translates to
                  mean stakeholders, refers to a team of artistic photographers
                  and filmmakers who freeze lasting memories. We put in our best
                  efforts to bring to life our clients ideas and expectations.
                  Over the years we have successfully managed to meet and
                  surpass our client’s expectations while delivering splendid
                  clips of timeless quality."
            button="About us"
            heading="Who We Are"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <div className="small-cap py-8">
          <h5 className="font-Expert text-4xl opacity-50 tracking-wider">
            Our Services
          </h5>
        </div>
        <div className="home-services__cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-2 border-red-600 rounded-lg p-8">
          <ServiceCard
            category="products"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="wedding"
            imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2Fwedding%2FPBA_6915alogo.jpg?alt=media&token=e5a3a6ed-cb40-4344-b03b-1669003ee598"
            imagethree="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2Fwedding%2FIMG-20190802-WA0012.jpg?alt=media&token=b02c9f2a-2d67-4d71-aefc-6efa11860498"
            imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2Fwedding%2FLUC_2524alogo.jpg?alt=media&token=bc534c8b-6f36-4452-8ac6-2f23b19a4936"
          />
          <ServiceCard
            category="Corporate"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Baby Bump"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Baby Photography"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Fashion"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Interior"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Wildlife"
            imageone=""
            imagethree=""
            imagetwo=""
          />
          <ServiceCard
            category="Lifestyle"
            imageone=""
            imagethree=""
            imagetwo=""
          />
        </div>
      </div>
      <Banner />
    </section>
  );
}
