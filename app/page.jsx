import Link from "next/link";

const Home = () => (
  <section className="flex-center w-full flex-col pt-12">
    <h1 className="head_text mb-10 text-center">
      Hungry? Don&apos;t wait! Order delicious food for delivery in minutes.
      <br className="max-md:hidden" />
      <span className="orange_gradient  text-center"> Deliver easy</span>
    </h1>
    <p className="desc mb-10 text-center">
      Discover GoDeliver, your go-to food delivery app. Order from a variety of
      local restaurants, track your delivery, and enjoy delicious meals right at
      your doorstep. Download now for a convenient and satisfying dining
      experience.
    </p>
    <Link
      href="/register"
      className="h-12 w-32 text-slate-50 flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 font-inter font-semibold shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
    >
      Let&apos;s go!
    </Link>
  </section>
);

export default Home;
