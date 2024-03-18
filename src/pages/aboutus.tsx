import React from "react";
import PageLayout from "../layouts/PageLayout";
import Container from "../components/Container";

const AboutUsPage = () => {
  return (
    <PageLayout>
      <Container>
        <div className="py-10 min-h-[200pt] flex flex-col justify-center ">
          <div className="text-6xl font-semibold">About Us</div>
          <div>Let&apos;s get to know us</div>
        </div>
      </Container>
      <div className="bg-white text-black py-10 px-4 rounded-bl-3xl rounded-tr-3xl">
        <Container>
          <div className="flex flex-col gap-2 text-neutral-700">
            <div>Dylon Sports</div>
            <div className="text-4xl">About Us</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              sit! Esse est, quasi natus corrupti dolor doloribus labore quae
              veniam aut at voluptatibus, quibusdam similique explicabo fugit.
              Cumque, consequuntur quis!
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              sit! Esse est, quasi natus corrupti dolor doloribus labore quae
              veniam aut at voluptatibus, quibusdam similique explicabo fugit.
              Cumque, consequuntur quis!
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
              sit! Esse est, quasi natus corrupti dolor doloribus labore quae
              veniam aut at voluptatibus, quibusdam similique explicabo fugit.
              Cumque, consequuntur quis!
              <br />
            </div>
            <div>
              <div className="font-semibold">Our Product Range:</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita tempora dignissimos rem totam voluptatum! Neque
                repellendus et quisquam quibusdam est, sapiente necessitatibus
                sed dolore eos cupiditate itaque cum, saepe architecto!
              </div>
            </div>
            <div>
              <div className="font-semibold">Production Capacity:</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita tempora dignissimos rem totam voluptatum! Neque
                repellendus et quisquam quibusdam est, sapiente necessitatibus
                sed dolore eos cupiditate itaque cum, saepe architecto!
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default AboutUsPage;
