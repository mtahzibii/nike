import {
  Footer,
  CustomerReview,
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Nav
} from "./components";

import "./index.css";

export default function App() {
  return (
    <main className="relative">
      <nav>
        <Nav />
      </nav>
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
      <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="sm:px-16 px-8  py-12 bg-black pb-8 padding-t text-white">
        <Footer />
      </section>
    </main>
  );
}
