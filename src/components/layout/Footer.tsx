import React from "react";
import "../../styles/footer.css";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
export default function Footer() {
  const { ...AuthContext } = useAuthContext();
  const { user } = AuthContext;

  const navigation = useLocation();
  return (
    <footer
      className={`footer pt-20 ${
        navigation.pathname === "/login" ||
        navigation.pathname === "/contact" ||
        navigation.pathname === "/clients-albums/:client" ||
        user
          ? "hidden"
          : "block"
      }`}
    >
      <div className="footer__wrapper">
        <div className="wrapper ">
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col justify-center items-center">
              <h2 className=" font-HeadingFont text-6xl w-3/4 leading-normal text-center">
                YOUR STORY AWAITS
              </h2>
              <div className="py-10">
                <button className="button">
                  <a href="/about/">
                    Get in touch
                    <span>
                      <img
                        src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/arrow-right-white.svg"
                        alt=""
                      />
                      <img
                        src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/arrow-right-white.svg"
                        alt=""
                      />
                    </span>
                  </a>
                </button>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2 w-full px-3">
              <p className="py-8 font-Lato md:text-sm leading-normal text-xs">
                Kindly enquire for more detailed information on pricing and
                availability. I will do my best to respond to your enquiry
                within 48 hours. I look forward to hearing from you!
              </p>
              <div className="contact-page__info__cap">
                <span></span>
                <h5>Offices</h5>
              </div>
              <div className="address-info">
                <p>Nairobi, Kenya</p>
              </div>

              <div className="contact-page__info__links py-10">
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/digital_present/"
                  target="_blank"
                  className="customURL"
                >
                  <img
                    className="social-img"
                    src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/digital-present/mycompany/"
                  target="_blank"
                  className="customURL"
                >
                  <img
                    className="social-img"
                    src="https://digitalpresent.io/wp-content/themes/digital-present/src/assets/linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-16 border-t-[1px] px-3">
        <p className="text-xs text-slate-500">© Washikadau 2024</p>
        <p className="text-xs text-slate-500">
          <a rel="noreferrer" href="/privacy-policy">
            Privacy policy
          </a>
        </p>
      </div>
    </footer>
  );
}
