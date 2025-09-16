import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const Sponsors = () => {
    const { t } = useTranslation();
  const clientsData = [
    "/mages/Sponsors/algharib.webp",
    "/mages/Sponsors/almuhilib.webp",
    "/mages/Sponsors/alTawy.webp",
    "/mages/Sponsors/BEC.webp",
    "/mages/Sponsors/fawasil.webp",
    "/mages/Sponsors/Petrojet.webp",
    "/mages/Sponsors/Sarmex.webp",
    "/mages/Sponsors/shabat aljazira.webp",
  ];
  return (
    <div className={styles.wrapperSponsors}>
      <div className="container">
        <h4> {t("sponsors.title")} </h4>
        <div>
          <Marquee autoFill={true} loop={0} speed={30} gradient={true}>
            {clientsData.map((item, index) => {
              return (
                <div className={styles.wrapperImage} key={index}>
                  <Image
                    src={item}
                    alt={`Image Hackathon  ${item}`}
                    width={140}
                    height={140}
                  />
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
