const Button = ({lable, iconURL}) => {
  return (
    <button className="flex mt-4 text-lg text-white bg-coral-red py-2 px-8 rounded-full">
        {lable}
        <img src="" alt="icon" />
    </button>
  )
}

export default Button