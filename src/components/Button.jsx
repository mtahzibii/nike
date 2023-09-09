const Button = ({lable, iconURL, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2  text-lg text-white ${backgroundColor ? backgroundColor : 'bg-coral-red'}  ${borderColor ?  'borderColor' : 'border-coral-red'} ${textColor ? textColor : 'text-white'} py-4 px-10 rounded-full font-montserrat border`}>
        {lable}
        {iconURL && (
          <img src={iconURL} alt="icon" className="ml-2 w-5 h-5 rounded-full" />
        )}
    </button>
  )
}

export default Button