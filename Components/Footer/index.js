"use client";

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // أيقونة X

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <footer className={styles.wrapperFooter} id="footer">
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.footerItem}>
            <ul className={styles.socialIcons}>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerItem}>
            <Image
              src="/mages/logo2.png"
              alt={t("footer.companyName")}
              width={150}
              height={100}
              className={styles.logo_img}
            />
          </div>

          <div className={styles.footerItem}>
            <p>
              &copy; {currentYear} {t("footer.rights")}{" "}
              <span className={styles.company}>{t("footer.companyName")}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
