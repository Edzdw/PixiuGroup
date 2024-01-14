import Link from "next/link";
import { useTranslation } from "react-i18next";
const Blog = () => {
  const { t } = useTranslation();
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              {t("blogTitle")}
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-1.jpg" alt="" />
              </span>
              <div className="content">
                <span className="title">{t("blogTitleContent1")}</span>
                <p>{t("blogDescriptionContent1")}</p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>{t("blogDay1")}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>{t("blogComment1")}</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}

        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post2" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="title">{t("blogTitleContent2")}</span>
                <p>
                {t("blogDescriptionContent2")}
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>{t("blogDay2")}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>{t("blogComment2")}</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post3" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="title">
                {t("blogTitleContent3")}
                </span>
                <p>{t("blogDescriptionContent3")}</p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>{t("blogDay3")}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>{t("blogComment3")}</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
