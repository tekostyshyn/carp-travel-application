import Image from "next/image";
import GallerySwiper from "./GallerySwiper";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="section_gradient_1"></div>
      <div className="section_gradient_2"></div>
      <div className="container md:mx-auto flex flex-col z-20 relative">
        <h2
          className="sm:text-xl md:text-[67px] lg:text-[98px] md:tracking-[-2.68px] lg:tracking-[-3.92px] uppercase font-thin sm:mb-[24px]
        md:mb-[72px] "
        >
          Our
          <span className="font-medium"> gallery</span>
        </h2>
        <ul className="flex flex-col gap-[24px] md:hidden">
          <li className="block w-full relative h-[187px] drop-shadow-[0px_0px_15px_rgba(0, 0, 0, 0.50)]">
            <Image
              src="/images/gallery1.jpeg"
              alt="Carpathian mountains"
              fill
              style={{ objectFit: "cover" }}
            />
          </li>
          <li className="block w-full relative h-[187px] drop-shadow-[0px_0px_15px_rgba(0, 0, 0, 0.50)]">
            <Image
              src="/images/gallery2.jpeg"
              alt="Forest and lake"
              fill
              style={{ objectFit: "cover" }}
            />
          </li>
          <li className="block w-full relative h-[187px] drop-shadow-[0px_0px_15px_rgba(0, 0, 0, 0.50)]">
            <Image
              src="/images/gallery3.jpeg"
              alt="Green forest"
              fill
              style={{ objectFit: "cover" }}
            />
          </li>
        </ul>
        <div className="sm:hidden">
          <GallerySwiper />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
