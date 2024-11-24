import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../Assets/home/01.jpg";
import img2 from "../../../Assets/home/02.jpg";
import img3 from "../../../Assets/home/03.png";
import img4 from "../../../Assets/home/04.jpg";
import img5 from "../../../Assets/home/05.png";
import img6 from "../../../Assets/home/06.png";
export default function Banner() {
  return (
    <Carousel
      autoPlay // Enables automatic sliding
      infiniteLoop // Loops back to the first slide when it reaches the end
      interval={2000} // Slide interval in milliseconds (default is 3000ms)
      showThumbs={false} // Optional: Hide thumbnail navigation
      showStatus={false} // Optional: Hide slide status (e.g., "1 of 6")
    >
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
}
