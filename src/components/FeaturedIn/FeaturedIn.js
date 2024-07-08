import React, { useState, useEffect }  from 'react'
import Feature1 from '../../assets/feature1.svg'
import Feature2 from '../../assets/feature2.svg'
import Feature3 from '../../assets/feature3.svg'
import Feature4 from '../../assets/feature4.svg'
import Feature5 from '../../assets/feature5.svg'
import Feature6 from '../../assets/feature6.svg'
import Feature7 from '../../assets/feature7.svg'

const FeaturedIn = () => {
  const features = [Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, Feature7];
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(window.innerWidth < 600);

  useEffect(() => {
      const handleResize = () => {
          setIsSliderActive(window.innerWidth < 600);
      };

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
      let intervalId;
      if (isSliderActive) {
          // Set interval to update feature every 3 seconds
          intervalId = setInterval(() => {
              setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
          }, 3000);
      }

      // Cleanup the interval on component unmount or when isSliderActive changes
      return () => {
          if (intervalId) {
              clearInterval(intervalId);
          }
      };
  }, [isSliderActive, features.length]);

  return (
    <div className='w-full px-6 pt-10 pb-10'>
        <h1 className='text-center text-5xl font-extrabold md:pb-14 pb-20'>Featured In</h1>
        <div className='md:flex hidden flex-wrap gap-14 justify-center items-center w-full max-w-[1200px] mx-auto'>
            <img src={Feature1} alt='feature'/>
            <img src={Feature2} alt='feature'/>
            <img src={Feature3} alt='feature'/>
            <img src={Feature4} alt='feature'/>
            <img src={Feature5} alt='feature'/>
            <img src={Feature6} alt='feature'/>
            <img src={Feature7} alt='feature'/>
        </div>
        <div className='md:hidden flex justify-center items-center w-full max-w-[1200px] mx-auto'>
                <img src={features[currentFeatureIndex]} alt='feature' style={{width: '150px', height:'auto'}}/>
            </div>
    </div>
  )
}

export default FeaturedIn