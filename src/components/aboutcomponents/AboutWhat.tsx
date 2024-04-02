import { motion } from "framer-motion";
import "../../styles/about-what.css";

function AboutWhat() {
  return (
    <div className="about-what pt-16">
      <div className="about-what-text-w">
        <div className="max-w-280 text-white">
          <div className="margin-b-20">
            <h4 className="font-HeadingFont">What We Do</h4>
          </div>
          <div className="margin-b-30">
            <div className="font-Lato text-sm">
              We painstakingly compile and catalogue every beautiful viewpoint,
              experience, hike throughout North America. We then condense this
              content down to the most essential so you can find the information
              you need without the B.S.
            </div>
          </div>
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
      </div>
      <div className="about-what-image-w mb-10">
        <div className="about-what-img-01-w">
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-tl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-tr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-bl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-br"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="about-what-img-01"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="about-what-img-02-w">
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-tl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-tr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-bl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201aac5bd0e695871b219d5_icon-plus.svg"
            alt=""
            className="img-plus-br"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="about-what-img-02"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutWhat;
