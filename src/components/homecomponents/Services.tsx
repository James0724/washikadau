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
            imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FCorporate%2FCoprate%201.jpg?alt=media&token=46e5e4ac-0fab-4ac4-92cf-a656ab15c64b"
            imagethree="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FCorporate%2FDSC_2345.jpg?alt=media&token=56582ac4-0386-42b8-92b0-6285ac195d34"
            imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FCorporate%2FDSC_5281.jpg?alt=media&token=13601ba7-1b6e-4b47-860f-c8bcbfd5298f"
          />
          <ServiceCard
            category="Drone Shots"
            imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FDrones%20shots%2FDrone%204.jpg?alt=media&token=4c7bcd1a-2735-4dd1-8212-e1c8367fd6c8"
            imagethree="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FDrones%20shots%2FDrone%202.jpg?alt=media&token=dbcf1bd2-6f5c-4783-ad31-c9472cfdefc1"
            imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FDrones%20shots%2FDrone%201.jpg?alt=media&token=ce1dba7e-ef09-4037-b9b4-0737feadb8e5"
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
            imageone="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FLifestyle%2F_ANG8171alogo.jpg?alt=media&token=b2780e25-5191-4bca-8bad-2d94f4d6e9b9"
            imagethree="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FLifestyle%2FDSC_1645a.JPG?alt=media&token=a8ca4c1d-2562-4424-a55d-4bd56f4e4d19"
            imagetwo="https://firebasestorage.googleapis.com/v0/b/washikadau-backend.appspot.com/o/assets%2Fservices%2FLifestyle%2FLUC_2962a.jpg?alt=media&token=cfb24662-128e-4aa4-8928-5b3917860bba"
          />
        </div>
      </div>
      <Banner />
    </section>
  );
}
