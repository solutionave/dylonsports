import React from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "../components/Container";
import { MdLocationPin } from "react-icons/md";
import GoogleMapReact from "google-map-react";
import clsx from "clsx";

const MapMarker = ({ text }: any) => <div>{text}</div>;

const ContactUsPage = () => {
  const boxStyle = clsx([
    "col-span-1 border rounded-md p-5",
    "hover:bg-neutral-300",
    "transition-all duration-500",
    "hover:scale-95 cursor-pointer",
  ]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <PageLayout>
      <Container>
        <div className="py-10 min-h-[200pt] flex flex-col justify-center ">
          <div className="text-6xl font-semibold">Contact Us</div>
          <div>Get in touch</div>
        </div>
      </Container>
      <div className="bg-white text-black py-10 px-4">
        <Container>
          <div className="py-10">
            <div className="underline text-xl">Get in Touch</div>
            <div className="text-4xl font-semibold">
              We talk, we advise, we give discounts
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 grid-flow-row gap-2">
              <div className={boxStyle}>
                <div className="bg-red-600 w-[40pt] flex items-center justify-center aspect-square rounded-full">
                  <MdLocationPin size={30} color="white" />
                </div>
                <div className="my-1 font-semibold text-xl">Locations</div>
                <div className="text-neutral-600">
                  Mohallah Islam Nagar Pacca Garah, Sialkot 51310, Pakistan
                </div>
              </div>
              <div className={boxStyle}>
                <div className="bg-red-600 w-[40pt] flex items-center justify-center aspect-square rounded-full">
                  <MdLocationPin size={30} color="white" />
                </div>
                <div className="my-1 font-semibold text-xl">Email Address</div>
                <div className="text-neutral-600">dylonsports@gmail.net</div>
              </div>
              <div className={boxStyle}>
                <div className="bg-red-600 w-[40pt] flex items-center justify-center aspect-square rounded-full">
                  <MdLocationPin size={30} color="white" />
                </div>
                <div className="my-1 font-semibold text-xl">Phone Number</div>
                <div className="text-neutral-600">
                  +92 333 5166619 <br />
                  +92 333 5166620 <br />
                  +92 333 5166621 <br />
                </div>
              </div>
            </div>
          </div>
          <div className="my-20">Our hotline is open 24/7</div>
        </Container>
        <div className="h-[50vh] w-full relative">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapMarker lat={59.955413} lng={30.337844} text="My Marker" />
          </GoogleMapReact>
          <form
            className={clsx([
              "bg-white flex flex-col absolute p-10 min-w-[350pt] gap-3",
              "absolute bottom-10 right-[20%] shadow-2xl border",
              "rounded-md",
            ])}
          >
            <div>
              <div className="text-2xl font-semibold">Write to us</div>
              <div>Tell what you have in mind</div>
            </div>
            <input
              className="border px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Phone No"
            />
            <input
              className="border px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Write Message"
            />
            <button
              type="submit"
              className={clsx([
                "bg-red-600 text-white border-0 py-2 rounded-md",
                "hover:bg-opacity-80 transition-all duration-300",
              ])}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUsPage;
