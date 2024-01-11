import Nav from "./components/Nav";
import {
  Hero,
  Features,
  Browser,
  Faq,
  ContactUs,
  Footer,
  Tabs,
  BrowserDescription,
  FaqDescription
} from "./sections";

const App = () => {
  return (
    <main className="font-rubik overflow-hidden">
      <Nav />
      <section className="w-full mt-4">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section>
        <Tabs />
      </section>
      <section id="browser">
        <BrowserDescription />
      </section>
      <section>
        <Browser />
      </section>
      <section id="faq">
        <FaqDescription />
      </section>
      <section>
        <Faq />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
