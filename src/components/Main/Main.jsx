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
          {posts.map(post => (
            <Carousel 
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              tags={post.tags}
            />
          ))}
        </section>
      </section>
    </>
  );
}

export default Main;
