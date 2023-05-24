// import Feed from "@components/Feed";

const Home = () => (
  <section className="flex-center w-full flex-col">
    <h1 className="head_text text-center">
      Hungry? Don&apos;t wait! Order delicious food for delivery in minutes.
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> GoDeliver</span>
    </h1>
    <p className="desc text-center">
      Discover GoDeliver, your go-to food delivery app. Order from a variety of
      local restaurants, track your delivery, and enjoy delicious meals right at
      your doorstep. Download now for a convenient and satisfying dining
      experience.
    </p>

    {/* <Feed /> */}
  </section>
);

export default Home;
