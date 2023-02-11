import React from 'react';
import './ChokeFullSection.css'
import image from '../../assets/210122 happycamp069 1.png'
import logo1 from '../../assets/Untitled- (3).png'
import logo2 from '../../assets/Untitled- (4).png'
import logo3 from '../../assets/Untitled- (5).png'
import logo4 from '../../assets/Untitled- (6).png'



const ChokeFullSection = () => {
  return (

    <div className='mt-10 mb-5'>
         
         <div className='grid grid-cols-1 lg:grid-cols-2'>

             <div className='flex items-center'>
                <img src={image} alt="" />
             </div>

             <div>

                <div className='flex justify-center'>
                   <h1 className='text-5xl font-bold ml-4 lg:ml-0'>Choke-Full OF <br /> Anicent Whole Grains</h1>
                </div>

                {/* details-1 */}
                
               <div className='flex justify-center mr-16 mt-16 ml-4 lg:ml-0'>

                 <div className=''>
                   <img src={logo1} alt="" className='mr-5' />
                  </div>

                  <div>
                     <h1 className='font-semibold mb-3'>Made from Ancient Whole Grains</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.Donec tincidunt lectus tellus mi, porta proin dui <br /> ornare etiam.</p>
                  </div>

               </div>
                
                {/* details-2 */}

               <div className='flex justify-center mr-16 mt-5 ml-4 lg:ml-0'>

                 <div className=''>
                   <img src={logo2} alt="" className='mr-5' />
                  </div>

                  <div>
                     <h1 className='font-semibold mb-3'>Made from Ancient Whole Grains</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.Donec tincidunt lectus tellus mi, porta proin dui <br /> ornare etiam.</p>
                  </div>

               </div>
               
               {/* details-3 */}

               <div className='flex justify-center mr-16 mt-5 ml-4 lg:ml-0'>

                 <div className=''>
                   <img src={logo3} alt="" className='mr-5' />
                  </div>

                  <div>
                     <h1 className='font-semibold mb-3'>Made from Ancient Whole Grains</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.Donec tincidunt lectus tellus mi, porta proin dui <br /> ornare etiam.</p>
                  </div>

               </div>

               {/* details-4 */}

               <div className='flex justify-center mr-16 mt-5 ml-4 lg:ml-0'>

                 <div className=''>
                   <img src={logo4} alt="" className='mr-5' />
                  </div>

                  <div>
                     <h1 className='font-semibold mb-3'>Made from Ancient Whole Grains</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.Donec tincidunt lectus tellus mi, porta proin dui <br /> ornare etiam.</p>
                  </div>

               </div>

             </div>

         </div>

    </div>

  );
};

export default ChokeFullSection;