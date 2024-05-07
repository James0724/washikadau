import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  toggleMenu: () => void;
}

export default function index({ toggleMenu }: ButtonProps) {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Clients Albums",
      href: "/clients-albums",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const footerLinks = [
    {
      title: "Facebook",
      href: "/",
    },
    {
      title: "LinkedIn",
      href: "/",
    },
    {
      title: "Instagram",
      href: "/",
    },
    {
      title: "Twitter",
      href: "/",
    },
  ];

  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i: any) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
    },
  };
  return (
    <div className="nav">
      <div className="body text-black">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.div
                custom={i}
                variants={perspective}
                whileHover={{ scale: 1.1 }}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link
                  to={href}
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="font-HeadingFont md:text-3xl text-2xl cursor-pointer hover:scale-100"
                >
                  <span>{title}</span>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="footer text-black">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              href={href}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              onClick={() => {
                toggleMenu();
              }}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
