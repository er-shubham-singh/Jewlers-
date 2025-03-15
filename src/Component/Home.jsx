import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rivaah from "../assets/image/rivaah.png";
import rivaahwj from "../assets/image/rivaahwj.png";
import soulmate from "../assets/image/soulmate.png";
import undbond from "../assets/image/unbound.png";
import womens from "../assets/image/womens.png";
import imgone from "../assets/image/image.png";
import imgtwo from "../assets/image/imgtwo.png";
import imgthree from "../assets/image/imgthree.png";
import imgfour from "../assets/image/imgfour.png";
import imgfive from "../assets/image/imgfive.png";
import imgsix from "../assets/image/imgsix.png";
import mangal from "../assets/image/bangle.jpg";
import bound from "../assets/image/unbound(1).jpg";
import banner from "../assets/image/banner.png";
import mangalsutra from "../assets/image/mangalsutra.png";
import miabtanishq from "../assets/image/miabytanishq.png";


import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sparkle = [
  { id: 1, image: imgone },
  { id: 2, image: imgtwo },
  { id: 3, image: imgthree },
  { id: 4, image: imgfour },
  { id: 5, image: imgfive },
  { id: 6, image: imgsix },
];

const cards = [
  { id: 1, image: rivaah },
  { id: 2, image: rivaahwj },
  { id: 3, image: soulmate },
  { id: 4, image: womens },
  { id: 5, image: undbond },
];

const Category = [
  { id: 1, image: mangal, icon: faArrowRight },
  { id: 2, image: mangal, icon: faArrowRight },
  { id: 3, image: mangal, icon: faArrowRight },
  { id: 4, image: mangal, icon: faArrowRight },
  { id: 5, image: mangal, icon: faArrowRight },
  { id: 6, image: mangal, icon: faArrowRight },
];

const Collections = [
  { id: 1, image: bound, icon: faArrowRight },
  { id: 2, image: bound, icon: faArrowRight },
  { id: 3, image: bound, icon: faArrowRight },
];

const New = [
  { id: 1, image: mangalsutra },
  { id: 2, image: mangalsutra },
  { id: 3, image: mangalsutra },
];

export default function Home() {
  return (
    <div className="bg-[#f5f5dc]">
      <div className="pt-5 flex  w-full  no-scrollbar relative pb-5  mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <Link>
                <img src={item.image} alt="image" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="max-w-[1200px] lg:mx-auto mx-3 pb-10">
        <div className="justify-center text-center pt-8 pb-8">
          <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
            Women's Day Sparkle
          </h1>
          <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
            Dazzling jewellery at prices made for you!
          </p>
        </div>
        <hr />
        <div className="pt-15">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper  "
          >
            {Sparkle.map((card, index) => (
              <SwiperSlide key={index}>
                <Link>
                  <img
                    src={card.image}
                    alt="image"
                    className="object-cover rounded-2xl hover:border-8 border-white "
                  />
                  <p className="font-medium pt-3">
                    Irresistible Charm Diamond Pendant...
                  </p>
                  <p className="font-medium ">₹ 117514</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div>
          <div className="max-w-[1200px] lg:mx-auto mx-3 ">
            <div className="justify-center text-center pt-8 pb-8">
              <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
                Styling 101 With Diamonds
              </h1>
              <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
                Trendsetting diamond jewellery suited for every occasion
              </p>
            </div>
            <hr />
            <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper  "
              >
                <SwiperSlide>
                  <Link></Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Shop By Category
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Browse through your favorite categories. We've got them all!
            </p>
          </div>
          <hr />
          <div className="flex md:gap-5 pt-15 pb-5 items-center md:flex-row flex-col gap-y-10 ">
            {Category.map((card, index) => (
              <Link
                className="  shadow-2xl justify-items-center w-[90%] h-[100%] hover:shadow-blue-200 pb-3 overflow-hidden rounded-xl"
                key={index}
              >
                <img src={card.image} alt="" className="rounded-t-xl " />
                <h3 className="pt-5 text-red-900 font-medium text-lg">
                  Mangalsutras
                </h3>
                <p className="gap-y-2  pt-1">
                  explore <FontAwesomeIcon icon={card.icon}></FontAwesomeIcon>{" "}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex md:gap-5 pt-2 pb-5 md:flex-row flex-col items-center gap-y-10">
            {Category.map((card, index) => (
              <Link
                className="  shadow-2xl justify-items-center w-[90%] h-[100%] hover:shadow-blue-200 pb-3 overflow-hidden rounded-xl"
                key={index}
              >
                <img src={card.image} alt="" className="rounded-t-xl " />
                <h3 className="pt-5 text-red-900 font-medium text-lg">
                  Mangalsutras
                </h3>
                <p className="gap-y-2  pt-1">
                  explore <FontAwesomeIcon icon={card.icon}></FontAwesomeIcon>{" "}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Shop By Category
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Browse through your favorite categories. We've got them all!
            </p>
          </div>
          <hr />
          <div className="flex gap-5 pt-15 pb-5 md:flex-row flex-col items-center">
            {Collections.map((card, index) => (
              <Link
                className=" shadow-2xl  hover:shadow-blue-200 pb-3 rounded "
                key={index}
              >
                <img src={card.image} alt="" className="rounded " />
                <div className="flex justify-between px-3">
                  <h3 className="pt-3 text-red-900 font-medium text-lg">
                    Into Eternty
                  </h3>
                  <div className="flex gap-2 px-3 pt-3">
                    <p>Explore More</p>
                    <p>
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Pick Up Where You Left Off!
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              Our products tend to sell out quickly, so don't delay in
              completing your purchase.
            </p>
          </div>
          <hr />

          <div className="flex gap-5 pt-15 pb-5"></div>
          <div className="pb-5">
            <img src={banner} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">Top Sellers</h1>
            <p className="text-lg pt-4">Explore our most loved products</p>
          </div>
          <hr />
          <div className="pt-15 pb-10">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper "
            >
              {Sparkle.map((card, index) => (
                <SwiperSlide key={index}>
                  <Link>
                    <img
                      src={card.image}
                      alt="image"
                      className="object-cover rounded-2xl hover:border-8  border-white "
                    />
                    <p className="font-medium pt-3">
                      Irresistible Charm Diamond Pendant...
                    </p>
                    <p className="font-medium ">₹ 117514</p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">New For You!</h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">Our latest releases, just for you !</p>
          </div>
          <hr />
          <div className="pt-15 pb-10 flex gap-18 md:flex-row flex-col items-center gap-y-10 ">
            {New.map((card, index) => (
              <div key={index} className="relative ">
                <img src={card.image} alt="" className="rounded-xl w-full " />
                <button className="absolute inline bottom-2 left-1/2 -translate-x-1/2 border rounded-md  bg-white border-red-800 text-red-900 hover:text-white hover:bg-red-900 lg:px-4 lg:py-3 px-2 py-1 bg-cover">
                  Explore More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Shop By Gender
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">
              First-class Jewellery for first-class Men, Women & Children.
            </p>
          </div>
          <hr />
          <div className="flex gap-5 pt-15 pb-5 md:flex-row flex-col items-center gap-y-10">
            {Collections.map((card, index) => (
              <Link
                className=" shadow-2xl  hover:shadow-blue-200 pb-3 rounded "
                key={index}
              >
                <img src={card.image} alt="" className="rounded-xl " />
                <div className="flex justify-between px-3">
                  <h3 className="pt-3 text-red-900 font-medium text-lg">Men</h3>
                  <div className="flex gap-2 px-3 pt-3">
                    <p>Explore More</p>
                    <p>
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 ">
          <div className="justify-center text-center pt-8 pb-8">
            <h1 className="text-[#996515] md:text-[2rem] font-bold  text-[1rem] leading-[3rem]">
              Find Your Perfect Sparkle for Every Occasion
            </h1>
            <p className="leading-[1.6rem] md:text-[1rem] text-[0.9rem] pt-4">Explore similar styles</p>
          </div>
          <div className="p-6 bg-white">
            <div className="flex justify-center space-x-4 mb-6 ">
              <div className=" border-2 rounded-4xl border-amber-950">
                <button className="px-4 py-2  rounded-full ">Classy</button>
                <button className="px-4 py-2  rounded-full">Sleek</button>
                <button className="px-4 py-2  rounded-full">Elegant</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative">
                <img
                  src={imgfour}
                  alt="Jewelry Model"
                  className="rounded-lg shadow-md"
                />
              </div>

              <div className="border rounded-lg p-4 shadow-md  flex justify-center ">
                <div className="">
                  <img src={imgfive} alt="Jewelry" className="rounded-md" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    Enchanted Diamond Stud Earrings
                  </h3>
                  <p className="text-red-600 font-semibold mt-2 ">
                    OUT OF STOCK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 pt-5 pb-5 ">
          <img src={miabtanishq} alt="image" />
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] lg:mx-auto mx-3 pt-5 pb-5 ">
          <div>
            {/* <video src={video} autoPlay loops muted className="rounded-4xl ">
            </video> */}
          </div>
        </div>
      </section>
      
      <section>
      <div className="max-w-[1200px] lg:mx-auto mx-3 pt-5 pb-5 ">
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
        
      </section>
    </div>
  );
}
