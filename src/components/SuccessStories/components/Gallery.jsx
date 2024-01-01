import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const images = [
    "/images/gallery/gallery6.png",
    "/images/gallery/gallery7.png",
    "/images/gallery/gallery8.png",
    "/images/gallery/gallery5.png",
    "/images/gallery/gallery4.png",
    "/images/gallery/gallery3.png",
    "/images/gallery/gallery2.png",
    "/images/gallery/gallery1.png",
  ];

  const animationType = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-12">
      {images.map((item, index) => (
        <AspectRatio
          ratio={16 / 9}
          key={index}
          style={{ position: "relative" }}
        >
          <div style={{ width: "100%", paddingBottom: "62.5%" }}>
            <img
              src={item}
              alt=""
              className={`w-full h-full absolute top-0 left-0 object-cover rounded-md animate__animated ${
                animationType.length <= index
                  ? animationType[0]
                  : animationType[index]
              }`}
            />
          </div>
        </AspectRatio>
      ))}
    </div>
  );
};

export default Gallery;
