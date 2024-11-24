import React from "react";
import { Helmet } from "react-helmet-async";
import HeroCover from "../../Shared/HeroCover/HeroCover";
import coverImg from "../../../Assets/menu/banner3.jpg";
import dessertImg from "../../../Assets/menu/dessert-bg.jpeg"
import saladImg from "../../../Assets/menu/salad-bg.jpg"
import soupImg from "../../../Assets/menu/soup-bg.jpg"
import pizzaImg from "../../../Assets/menu/pizza-bg.jpg"
import { useMenu } from "../../../Hooks/useMenu";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
export default function Menu() {
  const [menu] = useMenu();
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const todaysOffer = menu.filter((item) => item.category === "offered");
  const drinksMenu = menu.filter((item) => item.category === "offered");
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      {/* main cover  */}
      <HeroCover img={coverImg} title={"our menu"} />
      {/* offered menu items  */}
      <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"}/>
      <MenuCategory items={todaysOffer} coverImg={coverImg}/>

      {/* salad menu items */}
      <MenuCategory items={saladMenu} coverImg={saladImg} title={"salad"}/>

      {/* dessert menu items */}
      <MenuCategory items={dessertMenu} coverImg={dessertImg} title={"dessert"}/>

      {/* pizzs menu items */}
      <MenuCategory items={pizzaMenu} coverImg={pizzaImg} title={"pizza"}/>

      {/* pizzs menu items */}
      <MenuCategory items={soupMenu} coverImg={soupImg} title={"soup"}/>
    </section>
  );
}
