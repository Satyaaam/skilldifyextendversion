import React from "react";
import "./components_css/methodology.css";

const Methodology = () => {
  return (
    <div className="method_supreme">
      <div className="md:px-5 sm:px-4 px-3 md:py-8 sm:py-7 py-4 mx-auto max-w-[1280px]">
        <p className="text-4xl font-bold uppercase text-white text-center my-6">
          Our Methodologies
        </p>
        <p className="text-xl text-white text-center md:mt-[50px] sm:mt-[35px] mt-[20px] md:mb-[30px] font-bold">
          SKILLDIFY STANDS FOR OUTSTRIPPING FACILITATION INTO BUSINESS AND WE DO
          SO BY STRENGTHENING THE PEOPLE'S POTENTIAL USING THE THREE C'S
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 md:py-8 sm:py-6 py-4">
          <div className="flex flex-col div_border border-t-[1px] border-l-[1px] sm:py-6 py-4">
            <i className="fa-solid fa-copyright text-center md:mb-[30px] sm:mb-[20px] mb-[10px] md:text-8xl sm:text-6xl text-4xl text-[#f8471e]"></i>
            <h1 className="text-white font-bold md:text-3xl sm:text-2xl text-xl text-center sm:mb-[15px] ">
              Captivating
            </h1>
            <p className="text-white text-center text-[1rem] px-4">
              We believe in creating certain interventions for the trainees
              where they find the environment intergated enabling them to get
              trained with the concepts and the strategies in the most effective
              manner.
            </p>
          </div>

          <div className="flex flex-col div_border  sm:border-r-[1px] border-l-[1px] border-t-[1px] sm:py-6 py-4">
            <i className="fa-solid fa-copyright text-center md:mb-[30px] sm:mb-[20px] mb-[10px] md:text-8xl sm:text-6xl text-4xl text-[#f8471e]"></i>
            <h1 className="text-white font-bold md:text-3xl sm:text-2xl text-xl text-center sm:mb-[15px] ">
              Captivating
            </h1>
            <p className="text-white text-center text-[1rem] px-4">
              Where my reason, imagination or interest were not engaged, I would
              not or I could not learn.” – Winston Churchill. Through our
              training interventions we make sure that the professionals are
              engaged throughout.
            </p>
          </div>

          <div className="flex flex-col div_border border-l-[1px] sm:border-l-[0] border-t-[1px] sm:py-6 py-4">
            <i className="fa-solid fa-copyright text-center md:mb-[30px] sm:mb-[20px] mb-[10px] md:text-8xl sm:text-6xl text-4xl text-[#f8471e]"></i>
            <h1 className="text-white font-bold md:text-3xl sm:text-2xl text-xl text-center sm:mb-[15px] ">
              Captivating
            </h1>
            <p className="text-white text-center text-[1rem] px-4">
              We believe in creating Interventions that align or go through with
              the organization's goals and expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
