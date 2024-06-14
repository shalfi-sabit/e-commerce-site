import FlashSale from "../../FlashSales";
import NewArrivals from "../../NewArrivals";
import HeroSection from "../../HeroSection";
import TopRatedProducts from "../../TopRatedProducts";
import OurProducts from "../../OurProducts";
import BrowseByCategory from "../../BrowseCategory/index.tsx";
import CustomerBenefits from "../../shared/CustomerBenefits";
import SpecialOffer from "../../SpecialOffer";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FlashSale />
      {/* <BrowseByCategory />
      <TopRatedProducts />
      <SpecialOffer />
      <OurProducts />
      <NewArrivals />
      <CustomerBenefits /> */}
    </main>
  );
};

export default Home;
