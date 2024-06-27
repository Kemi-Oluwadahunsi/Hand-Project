import AboutUs from "../ui/AboutUs";
import Footer from "../ui/Footer";
import Form from "../ui/Form";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import Metrics from "../ui/Metrics";
import Team from "../ui/Team";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <AboutUs />
      <Team />
      <Metrics />
      <Form />
      <Footer />
    </div>
  );
};

export default HomePage;
