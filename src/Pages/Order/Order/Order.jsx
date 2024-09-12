import { useState } from "react";
import orderCover from "../../../Assets/shop/banner2.jpg";
import HeroCover from "../../Shared/HeroCover/HeroCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenu } from "../../../Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";

export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <HeroCover img={orderCover} title={"Oder Food"} />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTabs items={saladMenu} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizzaMenu} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soupMenu} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={dessertMenu} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinksMenu} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
