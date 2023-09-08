import { useState } from "react";

import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

import { shoes } from "../constants";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShowImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 ">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-slate-gray text-xl mb-16 sm:max-w-sm leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button lable="Shop now" iconURL={arrowRight} />

        <div className="flex justify-between items-center flex-wrap gap-12 mt-20">
          {statistics.map((item, index) => (
            <div key={index}>
              <h1 className="text-4xl font-bold font-palanquin">
                {item.value}
              </h1>
              <p className="text-slate-gray font-montserrat leading-7">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="absolute  sm:gap-6 gap-4 -bottom-[7%] flex justify-center items-center sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe,index) => (
          <ShoeCard shoe={shoe} key={index} changeBigShoeImage= {(bigShoeImg)=> setBigShowImg(bigShoeImg)} isSelected={bigShoeImg === shoe.bigShoe} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
