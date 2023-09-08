import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {

    const {imgURL, name, price } = product
  return (
    <div className='flex flex-col'>
      <img src={imgURL} alt="product Image" />
      <div className="flex justify-start items-center gap-4 mt-8">
        <img src={star} alt="product popularity" />
        <p className="text-slate-gray text-xl font-montserrat">(4.5)</p>
      </div>
      <p className="font-semibold font-montserrat text-xl my-4">
        {name}
      </p>
      <p className="text-coral-red text-2xl font-semibold font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
