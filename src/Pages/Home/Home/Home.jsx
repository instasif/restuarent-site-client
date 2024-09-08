import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


function Home() {
  return (
    <>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
    </>
  );
}

export default Home;
