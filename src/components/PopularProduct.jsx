import { products } from "../constants";
import PopularProductCard from "./PopularProductCard";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-semibold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="my-4 text-slate-gray font-montserrat lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-6">
        {products.map((product,index) => (
            <PopularProductCard key={index} product={product} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
