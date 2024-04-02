import { motion } from "framer-motion";
import "../../styles/about-who.css";

interface ImageTextProps {
  imageone: string;
  imagetwo: string;
  text: string;
  heading: string;
  button?: string;
}

function ImageTextContainerLeft({
  imageone,
  imagetwo,
  text,
  heading,
  button,
}: ImageTextProps) {
  console.log(imageone);
  return (
    <div className="about-who pt-16">
      <div className="about-who-image-w mb-10">
        <div className="about-who-img-01-w">
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
            className="w-full h-[60vw] md:h-[40vw] p-0"
            style={{
              background: `url(${imageone})`,
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="about-who-img-02-w">
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
            className="w-full h-[60vw] md:h-[40vw] p-0"
            style={{
              background: `url(${imagetwo})`,
              backgroundPosition: "50%",
              backgroundSize: "cover",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className="about-who-text-w">
        <div className="max-w-280 text-white">
          <div className="margin-b-20">
            <h4 className="font-HeadingFont">{heading}</h4>
          </div>
          <div className="margin-b-30">
            <div className="font-Lato text-sm">{text}</div>
          </div>
          {button && (
            <div className="py-10">
              <button className="button">
                <a href="/about/">
                  {button}
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageTextContainerLeft;
