import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { FaBars } from "react-icons/fa6";
import { Drawer } from "antd";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const Lang =
    typeof window !== "undefined" &&
    window.localStorage.getItem("onMeetingDashboardAdminLang");
  const [langState, setLangState] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(0);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // setOpen(false);
    }
  };

  const translationAr = () => {
    const body = document.querySelector("body");
    body.classList.remove("en");
    i18n.changeLanguage("ar");
    window.localStorage.setItem("onMeetingDashboardAdminLang", "ar");
  };

  const translationEn = () => {
    const body = document.querySelector("body");
    body.classList.add("en");
    i18n.changeLanguage("en");
    window.localStorage.setItem("onMeetingDashboardAdminLang", "en");
  };
  useEffect(() => {
    if (Lang == "en") {
      translationEn();
      setLangState("en");
    } else {
      translationAr();
      setLangState("ع");
    }
  }, [Lang]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` ${styles.wrapperNavbar} ${
        scrollHeight < 300 ? styles.scrollHide : styles.scrollShow
      } `}
    >
      <div className="container">
        <div className={styles.navbar}>
          <div>
            {/* <Image
              src="/mages/logo.png"
              alt="image logo nisbau"
              width={120}
              height={100}
              className={styles.logo_img}
            /> */}
          </div>

          <div>
            <div className={styles.logoContainer}>
              <Image
                src="/mages/logo2.png"
                alt="image logo nisbau"
                width={200}
                height={100}
                className={styles.logo_img}
              />
              {/* <div className={styles.logoText}>{t("header.executiveOffice")}</div> */}
            </div>
          </div>

          <div>
            {langState == "en" ? (
              <button onClick={translationAr} className={styles.butTranslation}>
                {" "}
                ع{" "}
              </button>
            ) : (
              <button onClick={translationEn} className={styles.butTranslation}>
                {" "}
                E{" "}
              </button>
            )}

            <button onClick={showLoading}>
              <FaBars />
            </button>
            <Drawer
              closable
              destroyOnHidden
              placement="right"
              open={open}
              onClose={() => setOpen(false)}
            >
              <button onClick={() => handleScroll("home")}>
                {t("navbar.home")}
              </button>
              <button onClick={() => handleScroll("about")}>
                {t("navbar.about")}
              </button>
              <button onClick={() => handleScroll("objectives")}>
                {t("navbar.objectives")}
              </button>
              <button onClick={() => handleScroll("target-group")}>
                {t("navbar.targetGroup")}
              </button>
              {/* <button onClick={() => handleScroll("areas")}>
                {t("navbar.areas")}
              </button> */}
              <button onClick={() => handleScroll("faq")}>
                {t("navbar.faq")}
              </button>
              <button onClick={() => handleScroll("prizes")}>
                {t("navbar.prizes")}
              </button>
              <button onClick={() => handleScroll("contact")}>
                {t("navbar.contact")}
              </button>
              <button onClick={() => handleScroll("register")}>
                {t("navbar.register")}
              </button>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
