import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <Swiper
        {...salimovSlider.about}
        id="padding-0"
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        <SwiperSlide
          style={{ marginRight: "120px" }}
          id="margin-right"
          className="info flex-column-mobile"
        >
          {/* IMAGE STARTS */}
          <div
            className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
            data-wow-offset={200}
            id="my-photo"
          >
            <div>
              <div>
                <img className="my-photo" src="assets/about.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* IMAGE ENDS */}
          {/* INFO STARTS */}
          <div>
            <h2>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  Mr Tony
                </span>
              </span>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow"></span>
              </span>
            </h2>
            <div className="infos">
              <ul>
                <li>
                  <span>
                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span className="white-text">{t("about1")}</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* INFO ENDS */}
        </SwiperSlide>
        <SwiperSlide id="display-none" className="info flex-column-mobile ">
          {/* IMAGE STARTS */}
          <div
            className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
            data-wow-offset={200}
            id="my-photo"
          >
            <div>
              <div>
                <img className="my-photo" src="assets/about2.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* IMAGE ENDS */}
          {/* INFO STARTS */}
          <div>
            <h2>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow">
                  Mr ERIC VŨ
                </span>
              </span>
              <span>
                <span className="animated-layer fade-in-up-animation fadeInUp wow"></span>
              </span>
            </h2>
            <div className="infos">
              <ul>
                <li>
                  <span>

                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>
                        <p className="mb-2 white-text">{t("about2")}</p>
                        <p className="mb-2 white-text">{t("about3")}</p>
                        <p className="mb-2 white-text">{t("about4")}</p>
                        <p className="mb-2 white-text">{t("about5")}</p>
                        <p className="mb-2 white-text">{t("about6")}</p>
                        <p
                          style={{ fontSize: "24px" }}
                          className="mb-2 white-text"
                        >
                          {t("about7")}
                        </p>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* INFO ENDS */}
        </SwiperSlide>
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>

      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                {t('featureTitle')}
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-wordpress-plain" />
              </span>
              <h4>{t('feature1')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>{t('feature2')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-angularjs-plain" />
              </span>
              <h4>{t('feature3')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-drupal-plain" />
              </span>
              <h4>{t('feature4')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>{t('feature5')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>{t('feature6')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4> {t('feature7')} </h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>{t('feature8')}</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                {t('achievementTitle')}
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Pixiu 1</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{t('achievementday1')}</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>{t('achievementname1')}</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Pixiu 2</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{t('achievementday2')}</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>{t('achievementname2')}</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Pixiu 3</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{t('achievementday3')}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>{t('achievementname3')}</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Pixiu 4</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{t('achievementday4')}</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>{t('achievementname4')}</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Pixiu EA</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>{t('achievementday5')}</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>{t('achievementname5')}</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}

            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
