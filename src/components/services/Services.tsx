import "./services.css";

const Services = () => {
  return (
    <section className="servies section" id="section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="services__content">
          <i className="uil uil services__icon"></i>
          <h3 className="services__title"></h3>
        </div>
        <span className="services__button">
          View More{" "}
          <i className="uil uil__arrow-right services__button-icon"></i>
        </span>
      </div>
    </section>
  );
};

export default Services;
