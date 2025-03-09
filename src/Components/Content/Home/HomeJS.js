import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../Context/LanguageContext";

export const HomeJS = () => {
  const [Open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { isArabic } = useLanguage();
  const direction = isArabic === "ar" ? "rtl" : "ltr";

  const handelAdvertisementslist = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return { Open, setOpen, t, isArabic, direction, handelAdvertisementslist };
};
