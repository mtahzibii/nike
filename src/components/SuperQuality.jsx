import Button from "./Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container max-sm:mt-12 flex flex-col lg:flex-row gap-10 justify-between items-center">
      <div className="flex flex-col justify-start items-start lg:w-1/2">
        <h1 className="text-4xl font-palanquin font-bold ">
          We Provide You <span className="text-coral-red">Super Quality </span>{" "}
          Shoes
        </h1>
        <p className="text-slate-gray my-6 text-xl leading-8">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-10">
          <Button lable="View details" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img src={shoe8} alt="product detail" width={570}  height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
