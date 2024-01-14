import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              {t('portfolioTitle')}
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        id="padding-0"
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{t('portfolioTeamName1')}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> {t('portfolioProject')}
                  </span>
                  <span>{t('portfolioProjectName1')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> {t('portfolioDevelopers')}
                  </span>
                  <span>{t('portfolioDevelopersName1')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> {t('portfolioTime')}
                  </span>
                  <span>{t('portfolioTimeContent1')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> {t('portfolioFramework')}
                  </span>
                  <span>{t('portfolioFrameworkName1')}</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                {t('portfolioBtn')} <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide"> 
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content ">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube-nocookie.com/embed/dnnFb9V9uLI"
                allowFullScreen=""
              />
            </div>
          </div> 
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{t('portfolioTeamName2')}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> {t('portfolioProject')}
                  </span>
                  <span>{t('portfolioProjectName2')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> {t('portfolioDevelopers')}
                  </span>
                  <span>{t('portfolioDevelopersName2')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> {t('portfolioTime')}
                  </span>
                  <span>{t('portfolioTimeContent2')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> {t('portfolioFramework')}
                  </span>
                  <span>{t('portfolioFrameworkName2')}</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                {t('portfolioBtn')} <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide> 
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-4.jpg" title="img" />
              </SwiperSlide>
 
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{t('portfolioTeamName3')}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> {t('portfolioProject')}
                  </span>
                  <span>{t('portfolioProjectName3')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> {t('portfolioDevelopers')}
                  </span>
                  <span>{t('portfolioDevelopersName3')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> {t('portfolioTime')}
                  </span>
                  <span>{t('portfolioTimeContent3')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> {t('portfolioFramework')}
                  </span>
                  <span>{t('portfolioFrameworkName3')}</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                {t('portfolioBtn')} <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{t('portfolioTeamName4')}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> {t('portfolioProject')}
                  </span>
                  <span>{t('portfolioProjectName4')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> {t('portfolioDevelopers')}
                  </span>
                  <span>{t('portfolioDevelopersName4')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> {t('portfolioTime')}
                  </span>
                  <span>{t('portfolioTimeContent4')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> {t('portfolioFramework')}
                  </span>
                  <span>{t('portfolioFrameworkName4')}</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                {t('portfolioBtn')} <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
         {/* PORTFOLIO ITEM STARTS */}
         <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-2.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{t('portfolioTeamName5')}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> {t('portfolioProject')}
                  </span>
                  <span>{t('portfolioProjectName5')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> {t('portfolioDevelopers')}
                  </span>
                  <span>{t('portfolioDevelopersName5')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> {t('portfolioTime')}
                  </span>
                  <span>{t('portfolioTimeContent5')}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> {t('portfolioFramework')}
                  </span>
                  <span>{t('portfolioFrameworkName5')}</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                {t('portfolioBtn')} <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}  


      
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
