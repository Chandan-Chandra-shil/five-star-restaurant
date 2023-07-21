import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      <ChefService />
      <PopularMenu />
      <CallUs/>
      <FeaturedSection />
      <Testimonials/>
    </div>
  );
};

export default Home;