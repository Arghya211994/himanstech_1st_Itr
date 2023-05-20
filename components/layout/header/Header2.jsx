import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CategoryMenu from "../category/Category";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";

import { motion } from "framer-motion";
import MobileCategory from "../category/MobileCategory";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { useRouter } from "next/router";

const Header2 = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const phonenNumber = "+918334061823";
  const whatsappUrl = `https://wa.me/${phonenNumber}`;

  const router = useRouter();

  return (
    <header className={`${styles.header}`}>
      {/* logo-start */}
      <Link href="/" className={styles.head}>
        <div className={styles.logo}>
          <Image
            src="./himanstech_logo2.svg"
            alt=""
            style={{ height: "40px", width: "100%" }}
            width={250}
            height={45}
          />
        </div>
      </Link>
      {/* logo-end */}

      {/* nav-menu start */}

      <nav className={`${styles.nav}`}>
        <ul className={`${styles.ul}`}>
          {/* main menu mapping */}

          <li>
            <Link href="/" className={`${styles.link}`}>
              Home
            </Link>
          </li>

          {/* category menu mapping */}
          <li
            className={`${styles.li} ${styles.link}`}
            onMouseEnter={() => setShowCatMenu(true)}
            onMouseLeave={() => setShowCatMenu(false)}
          >
            <Link
              href="/"
              className={`${styles.link}`}
              style={{
                color: router.pathname === "/portfolio" ? "" : "#5abc2e",
              }}
            >
              Our Services
            </Link>

            <CategoryMenu
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
            />
          </li>

          <li>
            {/* <Link href="/" className={`${styles.link}`}>
              Portfolio
            </Link> */}
            <Link
              href="/portfolio"
              className={`${styles.link}`}
              style={{
                color: router.pathname === "/portfolio" ? "#5abc2e" : "",
                textDecoration: "none",
              }}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/" className={`${styles.link}`}>
              Why-Us
            </Link>
          </li>

          <li>
            <Link href="/" className={`${styles.link}`}>
              Contact
            </Link>
          </li>
          {/* main menu mapping end */}
        </ul>
      </nav>

      {/* nav-menu end */}

      {/* whatsapp-logo start */}

      <div className={styles.whats_box}>
        <div className={styles.whats_logo}>
          <div className={styles.whatsapp_logo}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#5abc2e" }}
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
      {/* whatsapp-logo end */}

      {/* mobilemenu-part start*/}

      {/* mobile-menu-icon */}
      <motion.div
        className={`${styles.menubar}`}
        onClick={() => setMobileMenu((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenu ? <RxCross2 /> : <BiMenuAltRight />}
      </motion.div>

      {/* mobile-menu-content */}

      {mobileMenu && (
        <>
          <motion.div
            className={styles.mobile_menu_nav}
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: "-100vw",
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className={styles.menu_list}>
              <li>
                <Link href="/" className={`${styles.link}`}>
                  Home
                </Link>
              </li>

              <li
                className={`${styles.li} `}
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className={` ${styles.link}`}
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <Link
                    href="/"
                    className={`${styles.link}`}
                    style={{ color: "rgb(163 230 53)" }}
                  >
                    Our Services
                  </Link>
                  {showCatMenu ? (
                    <FiChevronUp
                      style={{ fontSize: "12px", fontWeight: "bolder" }}
                    />
                  ) : (
                    <FiChevronDown
                      style={{ fontSize: "12px", fontWeight: "bolder" }}
                    />
                  )}
                </div>

                <MobileCategory
                  showCatMenu={showCatMenu}
                  setShowCatMenu={setShowCatMenu}
                />
              </li>

              <li>
                <Link href="/" className={`${styles.link}`}>
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="/" className={`${styles.link}`}>
                  Why-Us
                </Link>
              </li>

              <li>
                <Link href="/" className={`${styles.link}`}>
                  Contact
                </Link>
              </li>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Header2;
