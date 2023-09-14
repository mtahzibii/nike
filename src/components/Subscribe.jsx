import Button from "./Button";

const Subscribe = () => {
  return (
    <section id="contact-us">
      <div className="max-container flex max-lg:flex-col justify-between items-center gap-8">
        <h3 className="text-4xl font-bold font-palanquin mr-20 leading-[68px] lg:max-w-md">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex flex-col justify-between sm:flex-row lg:justify-between border border-slate-700 rounded-full px-4 py-2 pl-6 relative ml-10 text-slate-gray max-sm:gap-8 max-sm:pl-0 max-sm:border-none">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="outline-none max-sm:border border-slate-gray rounded-full pr-4"
          />
          <Button lable="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
