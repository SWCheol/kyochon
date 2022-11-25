import image from "../../image.json";

const Carousel = () => {
  return (
    <div className="h-2/5">
      {image.menu.map((img) => {
        return (
          <img
            className="w-full object-cover"
            key={img.name}
            src={img.src}
            alt={img.name}
          ></img>
        );
      })}
    </div>
  );
};

export default Carousel;
