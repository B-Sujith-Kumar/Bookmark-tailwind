const FeatureCard = ({ heading, info, img }) => {
  return (
    <div className="flex container mx-auto px-10 mt-10 gap-10 max-lg:gap-6 max-lg:px-6 max-lg:pr-0 max-md:flex-col max-md:items-center max-sm:p-0">
      <div>
        <img
          src={img}
          height={289}
          alt="Feature image"
          className="max-w-md max-lg:max-w-sm max-sm:p-2"
        />
      </div>
      <div className="flex flex-col max-md:mt-10">
        <h3 className="text-3xl font-bold max-md:text-center">{heading}</h3>
        <p className="max-w-lg text-md text-slate-400 mt-8 max-md:text-center max-md:max-w-md max-sm:px-2">
          {info}
        </p>
        <div className="max-w-full flex items-baseline max-lg:justify-center">
          <button className="bg-[#5368DF] hover:text-[#5368DF] hover:bg-white border-2 border-[#5368DF] text-white px-6 rounded-lg font-bold mt-12 py-3 max-lg:mt-8 max-md:px-4 max-md:py-2 max-w-sm">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
