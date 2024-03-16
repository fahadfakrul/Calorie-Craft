
import "./Banner.css"
const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="section-with-background hero min-h-screen rounded-3xl bg-base-200 " >
  <div className="hero-content text-center">
    <div className=" lg:max-w-4xl">
      <h1 className="text-white text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="pt-6 pb-10 text-white">Explore culinary delights with our website offering cooking recipe classes, <br /> enhancing your skills in the kitchen effortlessly.</p>
      <button className="btn bg-[#0BE58A] lg:text-xl lg:font-semibold border-none rounded-3xl mr-6 title-color px-7">Explore Now</button>
      <button className="btn bg-transparent lg:text-xl lg:font-semibold  text-white rounded-3xl  px-7">Our Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
