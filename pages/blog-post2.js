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
          <h1>{t('DepositGuideTitle')}</h1>
          {/* ARTICLE STARTS */}
          <div className="main-post">
            {/* META STARTS */}
            <div className="meta d-flex align-items-center">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-calendar" />
                <span>{t('DepositDay')}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-tag" />
                <span>{t('Deposittext')}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-comments" />
                <span>{t('Deposittext1')}</span>
              </div>
            </div>
            {/* META ENDS */}
            {/* CONTENT STARTS */}
            <h3>{t('DepositSubTitle')}</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xPIMT-Jyekw?si=vPQmYKYYC362zjry"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="post-content">
              <p>
              {t('DepositDescription1')}
              </p>
              <p>
              {t('DepositDescription2')}
              </p>
              <p>
              {t('DepositDescription3')}
              </p>

              <p>
              {t('DepositDescription4')}
              </p>
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
