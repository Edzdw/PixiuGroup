import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18nConfig from "../src/i18n/i18n.config";

const BlogPost = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <I18nextProvider i18n={i18nConfig}>
        <a href="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <div className="blog-content">
          <h1>{t("registerGuideTitle")}</h1>
          {/* ARTICLE STARTS */}
          <div className="main-post">
            {/* META STARTS */}
            <div className="meta d-flex align-items-center">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-calendar" />
                <span>{t("registerDay")}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-tag" />
                <span>{t("registertext")}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-comments" />
                <span>{t("registertext1")}</span>
              </div>
            </div>
            {/* META ENDS */}
            {/* CONTENT STARTS */}
            <h3>{t("registerSubTitle")}</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Z-EISidEspA?si=Msph2eddMqXwroD0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="post-content">
              <p>
                <span className="post-description">
                  {t("registerDescription1")}
                </span>
                <span className="post-description">
                  {t("registerDescription2")}
                </span>
                <span className="post-description">
                  {t("registerDescription3")}
                </span>
              </p>
              <p className="ref-text">3hjpuzkltk</p>
              <p>{t("registerDescription4")}</p>
            </div>
            {/* CONTENT ENDS */}
          </div>
          {/* ARTICLE ENDS */}
        </div>
      </I18nextProvider>
    </Fragment>
  );
};
export default BlogPost;
