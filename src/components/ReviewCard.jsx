import { star } from "../assets/icons"

const ReviewCard = ({review}) => {
  return (
    <div className="flex flex-col justify-center items-center  text-center mt-16">
            <img src={review.imgURL} alt="reviewer image" className="w-28 h-28 rounded-full mb-6"  />
        <p className="text-slate-gray text-xl font-palanquin leading-normal max-w-sm ">{review.feedback}</p>
        <div className="flex gap-4 mt-4">
            <img src={star} alt="rating" />
            <p className="text-xl text-slate-gray font-montserrat">({review.rating})</p>
        </div>
        <h2 className="mt-8 font-bold text-2xl">{review.customerName}</h2>
    </div>
  )
}

export default ReviewCard