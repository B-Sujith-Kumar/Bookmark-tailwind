import { arr } from "../constants";
import FeatureCard from "../components/FeatureCard";
import { useState } from "react";
const Tabs = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="lg:h-[450px]">
      <div className="max-w-xl m-auto pb-6 flex gap-24 mt-10 border-b-2 max-md:flex-col max-md:max-w-md max-md:gap-10 max-md:border-b-0">
        {arr.map((item, index) => (
          <p
            key={item.tagLine}
            className={`text-slate-600 max-md:border-b-2 max-md:pb-6 max-md:text-center `}
          >
            <span
              className={`pb-6 ${index === open ? "border-b-4" : ""} ${
                index === open ? "border-b-[#FA5757]" : ""
              } cursor-pointer hover:text-[#FA5757]`}
            onClick={() => {setOpen(index);}}>
              {item.tagLine}
            </span>
          </p>
        ))}
      </div>
      {arr.map(
        (item, index) =>
          open === index && (
            <FeatureCard
              key={index}
              heading={item.heading}
              info={item.info}
              img={item.img}
            />
          )
      )}
      <div className="max-lg:hidden max-xl:h-56 max-xl:mt-10 w-lg h-64 rounded-full lg:block bg-[#5368DF] relative -top-[200px] -left-[1000px] -z-10 max-xl:-left-[700px]"></div>
    </div>
  );
};

export default Tabs;
