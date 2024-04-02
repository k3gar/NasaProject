import "./Carousel.css";

export const Carousel = (payload) => {
  console.log(payload);
  return (
    <div className="card-grid">
      <div className="card">
        <img src={payload.payload} alt="" />
      </div>
    </div>
  );
};
