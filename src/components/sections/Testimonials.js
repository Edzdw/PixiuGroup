const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span> PHẦN CHIA LỢI NHUẬN </span>
              <span className="quote">
                75% TRÊN LỢI NHUẬN THU VỀ TỪ HỆ THỐNG KHÁCH HÀNG
              </span>
              <span className="quote">
                Ví Dụ : Khách hàng lợi nhuận tháng đó được 1000$, mình thu của
                khách 25% là 250$
              </span>
              <span className="person">Chính sách</span>
              <span className="job">Pixiu Groups</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}

        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span> PHẦN CHIA IB</span>
              <span className="quote"> 1. 25.000 đầu tiên ko chia IB.</span>
              <span className="quote"> 2. 25-50k chia trên phần vượt 20%.</span>
              <span className="quote">
                {" "}
                3. 50-100k chia 40% trên phần vượt của 50.
              </span>
              <span className="quote">
                {" "}
                4. Trên 100k chia 60% trên phần vượt
              </span>
              <span className="person">Chính sách</span>
              <span className="job">Pixiu Groups</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
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
