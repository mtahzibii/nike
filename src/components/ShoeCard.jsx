const ShoeCard = ({ shoe, changeBigShoeImage , isSelected}) => {
  const { thumbnail, bigShoe } = shoe;

  return (
    <div
      className={`${
        isSelected ? "border-red-400" : ''
      } bg-primary bg-card  bg-cover p-6 border-2  rounded-xl hover:cursor-pointer sm:w-40 sm:h-40`}>
      <img
        src={thumbnail}
        alt="big shoe image"
        className="object-contain"
        onClick={() => changeBigShoeImage(bigShoe)}        
      />
    </div>
  );
};

export default ShoeCard;
