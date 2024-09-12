import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useMenu } from "../../../Hooks/useMenu";

export default function PopularMenu() {
  const [menu, loading] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle heading={"From our menu"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
