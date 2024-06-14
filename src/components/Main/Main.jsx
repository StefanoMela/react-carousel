import "./Main.css";
import posts from "../../data/db";
import Carousel from "../Carousel/Carousel";

function Main() {
  return (
    <>
      <section className="main">
        <div className="title">
          <h1>Il mio blog</h1>
        </div>
        <section className="carouselSection">
            <Carousel elements={posts}/>
        </section>
      </section>
    </>
  );
}

export default Main;
