import HeroCover from "../../Shared/HeroCover/HeroCover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, coverImg, title }) {
  return (
    <div className="pt-8">
      {title && <HeroCover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
