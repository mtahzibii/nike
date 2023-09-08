const Button = ({lable, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2  text-lg text-white bg-coral-red border-coral-red py-4 px-10 rounded-full font-montserrat">
        {lable}
        <img src={iconURL} alt="icon" className="ml-2 w-5 h-5 rounded-full" />
    </button>
  )
}

export default Button