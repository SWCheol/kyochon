import image from "../../image.json";

const Carousel = () => {
  return (
    <div>
      {image.menu.map((img) => {
        return <img key={img.name} src={img.src}></img>;
      })}
    </div>
  );
};

export default Carousel;
