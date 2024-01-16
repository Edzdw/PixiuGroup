import React, { useState } from "react";
import Signin from "./Signin";
import LinkRef from "./LinkRef";
import Exness from "./Exness";
import Axios from "axios";
import { normalAlert } from "./Swal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "../i18n/i18n.config";

const Header = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isLinkRefModalOpen, setIsLinkRefModalOpen] = React.useState(false);
  const [isAddExnessModalOpen, setIsAddExnessModalOpen] = React.useState(false);
  const [refferalCode, setRefferalCode] = React.useState(0);

  const [email, setEmail] = React.useState("");
  const { t } = useTranslation();
  const [languages, setLanguage] = useState([
    {
      id: 0,
      name: "Việt Nam (VI)",
      code: "vi",
    },

    {
      id: 1,
      name: "English (EN)",
      code: "en",
    },
  ]);

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleLinkRefModal = () => {
    setIsLinkRefModalOpen(!isLinkRefModalOpen);
  };

  const toggleAddExnessModal = () => {
    setIsAddExnessModalOpen(!isAddExnessModalOpen);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("email")) {
      return;
    }
    setEmail(localStorage.getItem("email"));
  }, []);

  React.useEffect(() => {
    if (!email) {
      return;
    }
    let data = JSON.stringify({
      email: email,
    });

    let config = {
      method: "post",
      url: "https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/get-info",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    Axios.request(config)
      .then((response) => {
        if (response.data.isRefferal == 1) {
          toggleLinkRefModal();
        }
        setRefferalCode(response.data.refCode);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          normalAlert("Email: " + email + " không tồn tại!", "error");
        } else {
          console.log("error", error);
          normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
          localStorage.clear();
        }
      });
  }, [email]);

  const handleLogout = () => {
    localStorage.clear();
    normalAlert("Đã đăng xuất!", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const handleCopy = () => {
    if (refferalCode) {
      navigator.clipboard.writeText(refferalCode).then(function () {
        normalAlert("Mã giới thiệu đã được copy!", "success");
      });
    } else {
      return;
    }
  };

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  {t("home")}
                </span>
              </li>
              <li>
                <span id="about-link">{t("about")}</span>
              </li>
              <li>
                <span id="portfolio-link">{t("portfolio")}</span>
              </li>
              <li>
                <span id="contact-link">{t("contact")}</span>
              </li>
              <li>
                <span id="blog-link">{t("blog")}</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          {languages.map((language) => (
            <li
              onClick={() => {
                window.location.reload()
                i18n.changeLanguage(language.code)
              }}
              style={{ cursor: "pointer", padding: "0px 15px" }}
            >
              <span id="language-link">{language.name}</span>
            </li>
          ))}
          <li>
            <a id="sign-in" href="#" target="_blank">
              {t("signIn")}
            </a>
          </li>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>{t("home")}</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>{t("about")}</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>{t("portfolio")}</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>{t("contact")}</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>{t("home")}</span>
              </a>
            </li>
            <li>
              <a id="sign-in" href="#" target="_blank">
                {t("signIn")}
              </a>
            </li>
            {languages.map((language) => (
              <li
                onClick={() => {
                  i18n.changeLanguage(language.code);
                }}
              >
                <span id="language-link">{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
      {isSignInModalOpen && (
        <Signin isOpen={isSignInModalOpen} toggle={toggleSignInModal} />
      )}

      <LinkRef
        isOpen={isLinkRefModalOpen}
        toggle={toggleLinkRefModal}
        current={email}
      />

      {isAddExnessModalOpen && (
        <Exness
          isOpen={isAddExnessModalOpen}
          toggle={toggleAddExnessModal}
          success={toggleAddExnessModal}
        />
      )}
    </header>
  );
};
export default Header;
