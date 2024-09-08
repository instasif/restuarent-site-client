import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import featuredImg from "../../../Assets/home/featured.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle subHeading={"Checkit out"} heading={"Featured item"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
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
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
}
