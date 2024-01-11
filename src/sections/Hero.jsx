import HeroImg from "../assets/images/illustration-hero.svg";
import Button from "../components/Button2";

const Hero = () => {
  return (
    <div className="max-sm:w-[90%] max-h-[595px] max-lg:w-[70%] flex w-[90%] max-lg:gap-0  max-lg:flex-col-reverse max-lg:items-center items-start mx-auto gap-12 h-3/4">
      <div className="flex flex-col basis-1/2 max-lg:items-center">
        <h2 className="font-bold text-6xl mt-20 max-sm:text-3xl max-sm:text-center max-lg:mt-10 max-lg:text-3xl">A Simple Bookmark Manager</h2>
        <p className="text-2xl max-w-md mt-10 max-sm:text-lg text-slate-400 max-lg:text-center max-lg:text-lg">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex mt-10 gap-5">
            <Button label="Get it on Chrome" />
            <Button label="Get it on Firefox" bgColor="bg-gray-300" textColor="text-black" />
        </div>
      </div>
      <div className="basis-1/2 max-h-[600px]">
        <img
          src={HeroImg}
          alt="Hero Image"
          width={658}
          height={466}
          className="max-lg:w-100 max-lg:h-auto max-lg:mt-0 max-xl:w-[486px] max-xl:mt-28 max-xl:h-[344px] lg:top-24"
        />
        <div className="max-lg:hidden max-xl:h-56 max-xl:mt-10 w-xl h-72 rounded-full lg:block bg-[#5368DF] relative -top-64 -right-52 -z-10 ">
        </div>
      </div>
    </div>
  );
};

export default Hero;

