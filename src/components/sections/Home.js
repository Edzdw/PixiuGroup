import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = () => {
  const { t } = useTranslation()
  // useEffect(() => {
  //   i18n.changeLanguage('vi')
  // },[])
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                {t('greeting')}<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">{t('greeting2')}</span>
              <span className="intro animated-layer">
                {t('slogan')}
              </span>
            </span>
            <span>
              <span className="animated-layer">{t('projectName')}</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
