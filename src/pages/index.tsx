import React from "react";
import PageLayout from "../layouts/PageLayout";
import Carousel from "../components/Carousel";
import Container from "../components/Container";
import { CarouselImages, SiteName } from "../shared/contants";
import { FaArrowRight, FaLocationArrow, FaRegCalendar } from "react-icons/fa";
import clsx from "clsx";
import { GrCertificate } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdMail, MdOutlineVerified } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

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

  const circleIcon = clsx([
    "flex items-center justify-center gap-2 flex-col",
    "w-[60pt] bg-white w-[100pt] aspect-square text-black",
    "rounded-full p-2",
  ]);

  const circleIconContainer = clsx([
    "w-[100pt] flex flex-col justify-center items-center gap-3",
    "text-sm font-semibold",
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
      <div className="bg-red-600 py-4 text-center pb-20">
        <div className="text-3xl font-semibold my-10">Our core values</div>
        <div className="flex justify-center items-start gap-2">
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <LiaCertificateSolid size={30} />
            </div>
            <div>Top Quality Products</div>
          </div>
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <GrCertificate size={30} />
            </div>
            <div>Exerienced Workers</div>
          </div>
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <FaHandsHoldingChild size={30} />
            </div>
            <div>No Child Labour</div>
          </div>
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <MdOutlineVerified size={30} />
            </div>
            <div>Top Quality Material</div>
          </div>
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <FaShippingFast size={30} />
            </div>
            <div>Fastest Shipping</div>
          </div>
          <div className={circleIconContainer}>
            <div className={circleIcon}>
              <FaTrophy size={30} />
            </div>
            <div>Best Production facility</div>
          </div>
        </div>
      </div>
      <Container>
        <div>
          <div
            className={clsx([
              "min-h-[40vh] flex justify-center py-4 gap-5 items-center",
              "flex-col-reverse lg:flex-row",
            ])}
          >
            <div className="flex-1 py-5 flex flex-col gap-5 px-3">
              <div className="italic text-xl">Why choose us</div>
              <div className="text-4xl font-semibold">Interesting Facts</div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                temporibus nemo eum voluptate quidem laudantium? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Asperiores quam
                esse nesciunt sapiente? Quis iste hic qui, cupiditate
                dignissimos maxime eum possimus quia? Necessitatibus temporibus
                nemo eum voluptate quidem laudantium? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quam esse nesciunt sapiente? Quis iste hic qui,
                cupiditate dignissimos maxime eum possimus quia? Necessitatibus
              </div>
              <div className="flex flex-col gap-7">
                <div>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <FaCheckCircle color="red" size={25} />
                    <div className="font-bold text-xl tracking-wide">
                      Value proposition 1
                    </div>
                  </div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet repellendus culpa quia fuga aspernatur omnis,
                    explicabo laborum beatae! Unde expedita placeat iusto iste
                    voluptate, amet facere recusandae laboriosam ex veniam.
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <FaCheckCircle color="red" size={25} />
                    <div className="font-bold text-xl tracking-wide">
                      Value proposition 2
                    </div>
                  </div>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet repellendus culpa quia fuga aspernatur omnis,
                    explicabo laborum beatae! Unde expedita placeat iusto iste
                    voluptate, amet facere recusandae laboriosam ex veniam.
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className={buttonStyles}>
                  <span>Learn More</span>
                  <FaArrowRight className={arrowStyle} />
                </div>
                <div className="flex-1" />
                <div className="flex-1" />
              </div>
            </div>
            <div className="flex-1 h-full">
              <img src={CarouselImages[0]} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-white text-black">
        <Container>
          <div className="py-10 flex justify-center items-center bg-white bg-opacity-35 flex-col gap-3">
            <div className="underline text-2xl">Latest News Blog</div>
            <div className="text-4xl">Read Latest News and Blog</div>
            <div className="flex mt-4 gap-10">
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-row h-[100pt] justify-center">
          <div className="border border-neutral-700 p-5 flex items-center gap-3 h-full">
            <div className="text-5xl italic">{SiteName}</div>
          </div>
          <div className="border border-neutral-700 p-5 flex items-center gap-3 h-full">
            <div className="w-[40pt] aspect-square bg-red-600 flex items-center justify-center rounded-full">
              <MdMail size={25} />
            </div>
            <div>
              <div className="text-2xl">Location</div>
              <div>Sialkot ... Street 6, location...</div>
            </div>
          </div>
          <div className="border border-neutral-700 p-5 flex items-center gap-3 h-full">
            <div className="w-[40pt] aspect-square bg-red-600 flex items-center justify-center rounded-full">
              <FaLocationArrow size={25} />
            </div>
            <div>
              <div className="text-2xl">Location</div>
              <div>Sialkot ... Street 6, location...</div>
            </div>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};

export default IndexPage;
function BlogItem() {
  return (
    <div
      className={clsx([
        "rounded-md overflow-clip flex flex-col gap-2 w-[250pt]",
        "border border-neutral-300",
      ])}
    >
      <img
        src={CarouselImages[0]}
        alt=""
        className="w-full aspect-square object-cover"
      />
      <div className="p-3 flex flex-col gap-1">
        <div className="text-2xl font-serif font-semibold">Blog Title</div>
        <div className="text-neutral-500">Some beginning of the blog body</div>
        <div className="flex items-center gap-1 text-neutral-500">
          <FaRegCalendar />
          <div>August 12th, 2024</div>
        </div>
      </div>
    </div>
  );
}
