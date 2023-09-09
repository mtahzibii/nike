const ServiceCard = ({ service }) => {
  const { imgURL, subtext, label } = service;
  return (
    <div className="w-[380px] h-[280px] flex flex-col justify-center items-start border shadow-3xl rounded-2xl border-none px-10 py-8 gap-4">
      <div className="flex justify-center items-center bg-coral-red p-2 rounded-full">
        <img src={imgURL} alt="service icon" width={24} height={24}  />
      </div>
      <h2 className="font-palanquin text-3xl leading-normal font-bold">{label}</h2>
      <p className="text-slate-gray font-montserrat text-lg leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
