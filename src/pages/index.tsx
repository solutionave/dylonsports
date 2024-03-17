import React from "react";
import PageLayout from "../layouts/PageLayout";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import { CarouselImages, SiteName } from "../shared/contants";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";

const IndexPage = () => {
  const buttonStyles = clsx([
    "flex-1 text-center bg-neutral-800 py-4 rounded-md",
    "flex items-center justify-center gap-3 group cursor-pointer",
    "hover:text-white duraation-300 transition-all",
    "hover:bg-red-900",
  ]);

  const arrowStyle = clsx([
    "group-hover:translate-x-2 transition-all duration-300",
    "group-hover:fill-white",
  ]);

  return (
    <PageLayout>
      <Carousel />
      <Container>
        <div>
          <div
            className={clsx([
              "min-h-[40vh] flex justify-center py-4 gap-5 items-center",
              "flex-col-reverse lg:flex-row",
            ])}
          >
            <div className="flex-1 py-5 flex flex-col gap-5 px-3">
              <div className="italic text-xl">About {SiteName}</div>
              <div className="text-4xl font-semibold">
                Sports Uniform <br /> Manufactured in Pakistan
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quam esse nesciunt sapiente? Quis iste hic qui,
                cupiditate dignissimos maxime eum possimus quia? Necessitatibus
                temporibus nemo eum voluptate quidem laudantium? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Asperiores quam
                esse nesciunt sapiente? Quis iste hic qui, cupiditate
                dignissimos maxime eum possimus quia? Necessitatibus temporibus
                nemo eum voluptate quidem laudantium? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quam esse nesciunt sapiente? Quis iste hic qui,
                cupiditate dignissimos maxime eum possimus quia? Necessitatibus
              </div>
              <div className="flex flex-row justify-center gap-2">
                <div className={buttonStyles}>
                  <span>Our Mission</span>
                  <FaArrowRight className={arrowStyle} />
                </div>
                <div className={buttonStyles}>
                  <span>Our Vision</span>
                  <FaArrowRight className={arrowStyle} />
                </div>
              </div>
            </div>
            <div className="flex-1 h-full">
              <img src={CarouselImages[0]} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-white py-5 text-black text-center flex flex-col gap-3">
        <div className="text-xl underline font-semibold mt-6">
          If you are looking for
        </div>
        <div className="text-4xl font-semibold">Our Categories</div>
        <div className="flex flex-row justify-center gap-4 py-8 mt-5">
          <img
            src={CarouselImages[0]}
            alt=""
            className="w-[200pt] aspect-square object-cover rounded-md"
          />
          <img
            src={CarouselImages[0]}
            alt=""
            className="w-[200pt] aspect-square object-cover rounded-md"
          />
          <img
            src={CarouselImages[0]}
            alt=""
            className="w-[200pt] aspect-square object-cover rounded-md"
          />
        </div>
      </div>
      <div className="bg-white py-5 text-black text-center flex flex-col gap-3">
        <div className="text-xl underline font-semibold mt-6">
          Order Now! Feel free to contact us if you have any questions
        </div>
        <div className="text-4xl font-semibold">Our Featured Products</div>
        <div className="flex flex-row justify-center gap-4 py-8 mt-5">
          <div className="border rounded-md">
            <img
              src={CarouselImages[1]}
              alt=""
              className="w-[200pt] min-h-[220pt] object-cover rounded-md"
            />
            <div className="py-3">
              <div className="text-lg font-semibold">Product 1</div>
              <div className="text-sm font-medium text-neutral-700">
                #Product 1
              </div>
            </div>
          </div>
          <div className="border rounded-md">
            <img
              src={CarouselImages[1]}
              alt=""
              className="w-[200pt] min-h-[220pt] object-cover rounded-md"
            />
            <div className="py-3">
              <div className="text-lg font-semibold">Product 1</div>
              <div className="text-sm font-medium text-neutral-700">
                #Product 1
              </div>
            </div>
          </div>
          <div className="border rounded-md">
            <img
              src={CarouselImages[1]}
              alt=""
              className="w-[200pt] min-h-[220pt] object-cover rounded-md"
            />
            <div className="py-3">
              <div className="text-lg font-semibold">Product 1</div>
              <div className="text-sm font-medium text-neutral-700">
                #Product 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 py-4 text-center">
        <div className="text-3xl font-semibold">Our core values</div>
      </div>
    </PageLayout>
  );
};

export default IndexPage;
