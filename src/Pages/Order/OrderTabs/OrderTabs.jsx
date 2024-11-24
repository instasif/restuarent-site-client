import React from "react";
import FoodCard from "../../../Componants/FoodCard/FoodCard";

export default function OrderTabs({items}) {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
}
