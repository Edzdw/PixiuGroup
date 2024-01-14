import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const {t} = useTranslation();
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                {t('testimonialsContent1')}
              </span>
              <span className="person">{t('testimonialsName1')}</span>
              <span className="job">{t('testimonialsRole1')}</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                {t('testimonialsContent2')}
              </span>
              <span className="person">{t('testimonialsName2')}</span>
              <span className="job">{t('testimonialsRole2')}</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;