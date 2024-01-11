import Button from "../components/Button";

const ContactUs = () => {
  return (
    <div className="w-full bg-[#5368DF] mt-28">
      <div className="mx-auto max-w-xl py-20">
        <p className="text-center mb-10 text-white text-lg tracking-widest uppercase">
          35,000+ already joined
        </p>
        <h2 className="w-full text-center px-12 tracking-wide text-white text-3xl font-extrabold">
          Stay up-to-date with what we&apos;re doing
        </h2>
        <div className="w-full flex justify-center gap-3 mt-10 max-md:flex-col max-md:items-center">
          <input type="text" placeholder="Enter your email address" className="outline-none px-6 rounded-lg max-md:py-2" />
          <div className="font-bold">
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
