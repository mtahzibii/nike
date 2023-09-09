import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section
      id="about-us"
      className="max-container max-sm:mt-12 flex flex-col lg:flex-row gap-10 justify-between items-center">
      <div className="flex justify-center items-center flex-1">
        <img
          src={offer}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-start items-start lg:w-1/2">
        <h1 className="text-4xl font-palanquin font-bold ">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <p className="text-slate-gray my-6 text-xl leading-8">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex gap-6 justify-center items-center">
          <Button lable="Shop Now" iconURL={arrowRight} />
          <Button lable="Leran More" backgroundColor='bg-white' textColor='text-slate-gray' borderColor='border-slate-gray' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
