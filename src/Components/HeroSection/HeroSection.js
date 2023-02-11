import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/Classy_Main 1.png";
import logo1 from '../../assets/gluten-free 1.png'
import logo2 from '../../assets/usda_organic 1.png'

const HeroSection = () => {
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">

        <div className="flex justify-center">

          <div className="mt-5 lg:mt-20 ml-4 lg:ml-0">
            <h1 className="text-5xl font-extrabold ">
              Eat Organic & <br/> Gluten Free Healthy Food
            </h1>
            <p className="text-xl font-bold mt-3">
              We supply hight quality organic & gluten free product
            </p>

            <div className="mt-5 flex flex-col lg:flex-row">
              

              <button className="try-button font-semibold mx-6 lg:mx-0">Try Our Sampler Pack</button>
               
              
               <div className="text-center">
               <button className="ml-4 btn-play mt-6 lg:mt-0"><i class="fa-solid fa-play"></i></button>
               </div>
               
               
               
             
              
               <span className="ml-2 text-center mt-10 lg:mt-3">About Happy Campers</span>
              
              

            </div>

            <div className="flex mt-5 lg:mt-40 md:mt-40 ml-10 lg:ml-0">
               <img src={logo1} alt="" className=""/>
               <img src={logo2} alt="" className="ml-10" />
            </div>

          </div>

        </div>

        <div>
          <img src={heroImg} alt="" className="image2" />
        </div>

      </div>

    </div>
  );
};

export default HeroSection;
