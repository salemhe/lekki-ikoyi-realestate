import React from "react";
import backgroundImage from "../assets/images/about-header.jpg";
import Navbar from "../components/layout/Navbar";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero / Banner */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Light Blue Overlay */}
        <div className="absolute inset-0 bg-blue-400/40 flex items-start">
          <h1 className="text-4xl md:text-5xl font-light text-white mt-24 px-6 drop-shadow-md">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Who We Are */}
        <div>
          <h2 className="text-2xl mb-6">Who We Are</h2>
          <p className="mb-4 text-[#54595f]">
            <strong>
              We are Nigeria’s largest commercial and residential real estate
              sales organization.
            </strong>
          </p>
          <p className="mb-4 font-light">
            Our main areas of work are domestic and commercial property sales
            and purchases. With years of experience in Nigerian real estate, we
            are the market leaders for lifestyle and investment buyers. We are
            committed to earning customers for life by communication, honesty,
            and safeguarding the interests of all parties.
          </p>
          <p className="mb-4 font-light">
            Our specialty is representing buyers and sellers of luxury homes,
            residential and commercial lands in Nigeria. We offer unparalleled
            opportunities for sellers of lands and luxury homes to have desired
            exposure to individuals considering buying or selling a home or land
            in the Nigerian market.
          </p>
          <p className="mb-4 font-light">
            Our ability to think out of the box and compelling marketing
            solutions sets us apart from most realtors. We acquired strong
            marketing and branding experience from several years of interacting
            with thousands of clients and successfully closing deals desirable
            to their
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-10">
          <p className="font-light mt-10">investment expectations.</p>
          <p className="mb-4 font-light">
            With a passion for real estate marketing, the properties we market
            has helped our clients sell their homes and lands at record time and
            prices. The marketing know-how we learned and the real estate
            experience we have gained over the past several years is available
            exclusively to you.
          </p>
          <h2 className="font-bold mb-4 text-[#545c6e]">Our Core Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="font-light text-[#54595f]">
              QUALITY: Excellent service delivery
            </li>
            <li className="font-light text-[#54595f]">
              INTEGRITY: No amount is worth our integrity. We choose to do the
              right thing.
            </li>
            <li className="font-light text-[#54595f]">
              PROACTIVE: We innovate and constantly improve. We get better every
              day.
            </li>
            <li className="font-light text-[#54595f]">
              TEAMWORK: All for one, one for all. We live every phase together.
            </li>
            <li className="font-light text-[#54595f]">
              AGILITY: We execute expeditiously to address our clients’ needs.
            </li>
            <li className="font-light text-[#54595f]">
              COMMITMENT: We are committed to providing the highest level of
              service.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;



