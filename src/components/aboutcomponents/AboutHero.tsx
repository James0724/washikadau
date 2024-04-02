import { motion } from "framer-motion";
import "../../styles/about-who.css";

export default function AboutHero() {
  return (
    <div className="about-hero ">
      <div className="about-hero-w">
        {/* About Us Header */}

        <div className="about-hero-header-fill-w">
          <motion.div
            className="about-hero-header-fill"
            initial={{
              transform:
                "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <span className="md:text-8xl text-6xl text-red-600">About Us</span>
          </motion.div>
        </div>

        {/* About Us Polaroid 01 */}
        <div
          className="about-hero-polaroid-01-w"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0vw, 2.271vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(34.542deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="about-hero-polaroid-inner-01-w"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <img
              src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201eb6ac9bcb9578f4f033f_Roid_Container01-min.png"
              alt=""
              className="about-hero-polaroid-container"
            />
            <div className="about-hero-polaroid-image-01-w"></div>
          </div>
        </div>
        {/* About Us Polaroid 02 */}
        <div
          className="about-hero-polaroid-02-w"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0vw, 9.084vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-16.1355deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="about-hero-polaroid-inner-02-w"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <img
              src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201eb6ac9bcb9578f4f033f_Roid_Container01-min.png"
              alt=""
              className="about-hero-polaroid-container"
            />
            <div className="about-hero-polaroid-image-02-w"></div>
          </div>
        </div>
        {/* About Us Polaroid 03 */}
        <div
          className="about-hero-polaroid-03-w"
          style={{
            willChange: "transform",
            transform:
              "translate3d(0vw, 4.542vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(14.3187deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="about-hero-polaroid-inner-03-w"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <img
              src="https://assets-global.website-files.com/61ff0c3770bb04614ffb9f4d/6201eb6ac9bcb9578f4f033f_Roid_Container01-min.png"
              alt=""
              className="about-hero-polaroid-container"
            />
            <div className="about-hero-polaroid-image-03-w"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
