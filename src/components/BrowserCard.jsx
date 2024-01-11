import dots from "../assets/images/bg-dots.svg";
import Button from "./Button2";

const BrowserCard = ({ tagLine, img, version }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl pb-5 px-2 mb-10 rounded-xl  max-md:mx-auto">
      <img src={img} alt={tagLine + version} />
      <p className="text-xl font-bold mt-8">{tagLine}</p>
      <p className="mt-4 text-slate-400 capitalize mb-6">{version}</p>
      <img src={dots} alt="dots" className="object-contain mb-6"/>
      <Button label = "Add & Install Extension" />
    </div>
  );
};

export default BrowserCard;
