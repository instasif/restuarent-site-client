import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import ManageItemsTable from "./ManageItemsTable";

export default function ManageItems() {
  
  return (
    <div>
      <SectionTitle heading={"Manage all items"} subHeading={"Hurry up"} />
      <ManageItemsTable/>
    </div>
  );
}
