"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Image } from "@nextui-org/react";

const ProductSwiper = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  if (images.length > 1)
    return (
      <>
        <Swiper
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Navigation]}
          grabCursor={true}
          centeredSlides={true}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide className="px-10 my-3" key={`Product Image ${index}`}>
              <Image
                src={image}
                height={600}
                width={600}
                alt={`Product Image ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Thumbs, Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          // thumbs={{ swiper: mainSwiper }}
          className=""
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={`Thumb Image ${index}`}
              className="cursor-pointer"
            >
              <Image src={image} alt={`Product Thumb ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};

export default ProductSwiper;
