import Button from "./Button"

const Hero = () => {
  return (
    <div>
    <section id="home" className="w-full flex flex-col xl:flex-row  justify-center min-h-screen max-container gap-10">
      <div className="relative xl:w-2/5 flex flex-col items-start w-full max-xl:padding-x pt-28">
        <p>Our summer collection</p>
        <h1>The New Arrival
        <br />
        <span>Nike</span>
        Shoes</h1>
        <p className="">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button lable='Shop now'>Shop Now</Button>
      </div>

    </section>
    </div>
  )
}

export default Hero