import Header from "@components/Header";
import Hero from "@components/Hero";
import Gallery from "@components/Gallery";
import Contacts from "@components/Contacts";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Gallery />
      <Contacts />
    </main>
  );
};

export default Home;
