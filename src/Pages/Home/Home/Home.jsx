import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      <ChefService />
      <PopularMenu />
      <FeaturedSection/>
    </div>
  );
};

export default Home;