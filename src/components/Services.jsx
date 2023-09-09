import { services } from "../constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section id="services" className="max-container">
    <div className="flex flex-wrap justify-between items-center">
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
    </div>
    </section>
  )
}

export default Services