function Carousel({ title, image, content, tags }) {
  return (
    <div className="carousel">
      <img src={ image } alt="carousel-image" />
    </div>
  );
}

export default Carousel;
