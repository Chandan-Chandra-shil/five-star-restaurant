import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      <ChefService />
      <PopularMenu/>
    </div>
  );
};

export default Home;