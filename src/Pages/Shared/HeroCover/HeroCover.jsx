import React from "react";
import { Parallax } from "react-parallax";
export default function HeroCover({ img, title }) {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt=""
      strength={-200}
    >
      <div
        className="hero h-[700px] text-white"
        // style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold uppercase">{title}</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
