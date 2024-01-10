import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";


const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        <SwiperSlide className="info flex-column-mobile">
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
                      <span>
                        Có nhiều năm kinh nghiệm trong thị trường Forex, Crypto.
                        Cũng đã từng cháy tài khoản nhiều lần, phát triển BOT AI
                        thời gian đầu gặp rất nhiều khó khăn và không thành
                        công. Đến thời điểm này đã có những thành tựu nhất định,
                        giúp được những người đồng hành có lợi nhuận ổn định và
                        an toàn vốn.{" "}
                      </span>
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
                      <span>Số Điện Thoại :</span>
                      <span>+84939635089</span>
                    </span>

                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <span>Gmail :</span>
                      <span>EricVu.pixiugroups@gmail.com</span>
                    </span>

                    <span className="animated-layer fade-in-up-animation fadeInUp wow">
                      <p className="mb-2">Ngoài kia bao nhiêu nhiễu nhương</p>
                      <p className="mb-2">Đừng vội tin những gì tôi nói</p>
                      <p className="mb-2">Mà hãy nhìn những gì tôi làm</p>
                      <p className="mb-2">Rồi hãy phán xét</p>
                      <p className="mb-2">
                        Ko phải là chuyên gia tư vấn , Cũng ko phải là ai TÔI
                        CHỈ CÓ GIẢI PHÁP TẠO RA TIỀN CHO BẠN BỀN VỮNG AN TOÀN VÀ
                        TỰ CHỦ .
                      </p>
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
                Tính năng
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
              <h4>Tự động giao dịch</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>24/5</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-angularjs-plain" />
              </span>
              <h4>Phòng chống rủi ro</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-drupal-plain" />
              </span>
              <h4>Mốc bảo vệ</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-react-plain" />
              </span>
              <h4>Phân tích real-time</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Phân tích chiến lược</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4> Vào/thoát lệnh </h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-sass-plain" />
              </span>
              <h4>Đa dạng cặp tiền</h4>
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
                Thành tựu
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
                    <span>10 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span> Sóng Hồi</span>
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
                    <span>12 2022</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Giao dịch 2 chiều</span>
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
                    <span>3 2023</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Tự Xóa Lệnh</span>
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
                    <span>4 2023</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Giảm vị thế xấu</span>
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
                    <span>2023+</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Đang phát triển</span>
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
