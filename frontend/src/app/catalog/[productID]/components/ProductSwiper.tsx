"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Image, Skeleton } from "@nextui-org/react";

export function SkeletonSwiper() {
  return (
    <>
      <Skeleton className="h-[600px] w-[600px] mx-auto my-3 rounded-xl" />
      <div className="flex gap-5">
        <Skeleton className="h-[150px] w-[150px] rounded-xl" />
        <Skeleton className="h-[150px] w-[150px] rounded-xl" />
        <Skeleton className="h-[150px] w-[150px] rounded-xl" />
        <Skeleton className="h-[150px] w-[150px] rounded-xl" />
      </div>
    </>
  );
}

export default function ProductSwiper({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  images.length === 0 && <SkeletonSwiper />;
  return (
    <>
      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Navigation]}
        grabCursor={true}
        centeredSlides={true}
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
          <SwiperSlide key={`Thumb Image ${index}`} className="cursor-pointer">
            <Image src={image} alt={`Product Thumb ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
