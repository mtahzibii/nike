import ReviewCard from "./ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col">
        <h1 className="text-center text-4xl font-bold font-palanquin">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <p className="text-center mt-8 text-slate-gray text-xl w-1/2 mx-auto font-montserrat leading-normal">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="flex justify-around items-center gap-12 mt-8 max-lg:flex-col">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
