import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "../header/Header.module.css"
import Link from "next/link";

const subMenuData = [
  { id: 1, name: "UX/UI Creative", url: "/ui-ux" },
  { id: 2, name: "Web Development", url: "/web-development" },
  { id: 3, name: "Mobile App Development", url: "/mobile-development" },
  { id: 4, name: "FullStack Development", url: "/fullstack-development" },
  { id: 5, name: "Digital Marketing", url: "/digital-marketing" },
];

const CategoryMenu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <>
      {showCatMenu ? (
        <FiChevronUp style={{ fontSize: "12px", fontWeight: "bolder" }} />
      ) : (
        <FiChevronDown style={{ fontSize: "12px", fontWeight: "bolder" }} />
      )}
      {showCatMenu && (
        <ul className={`${styles.dropdown}`}>
          {subMenuData.map((submenu) => {
            return (
              <>
                <li key={submenu.id}>
                  <Link href={`/${submenu.url}`} className={`${styles.link}`}>
                    {submenu.name}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CategoryMenu;
