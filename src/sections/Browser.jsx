import BrowserCard from "../components/BrowserCard";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";

const browser = [
  { tagLine: "Add to Chrome", img: chrome, version: "Minimum version 62" },
  { tagLine: "Add to Firefox", img: firefox, version: "Minimum version 55" },
  { tagLine: "Add to Opera", img: opera, version: "Minimum version 46" },
];

const Browser = () => {
  return (
    <div className="flex justify-center gap-10 mt-16 max-md:flex-col">
      {browser.map((item, index) => (
        <BrowserCard
          key={index}
          tagLine={item.tagLine}
          version={item.version}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Browser;
