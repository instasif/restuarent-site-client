import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import featuredImg from "../../../Assets/home/featured.jpg";
import "./Featured.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// bg-slate-500 bg-opacity-80
export default function Featured() {
  const {user} = useContext(AuthContext);
  return (
    <div className="featuredBgImg bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading={"Checkit out"} heading={"Featured item"} /> 
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-400 bg-opacity-60">
        <div >
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug20, 2023</p>
          <p className="uppercase">Where I can get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas
            sapiente nobis nulla quibusdam fugiat et, natus eos dolores corporis
            necessitatibus distinctio, tempora eaque esse magni! Placeat eaque
            atque laboriosam natus, earum, asperiores ab architecto impedit
            voluptas eveniet nostrum corrupti optio ad tempora consequatur
            nobis! Quia culpa adipisci id inventore?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
}
