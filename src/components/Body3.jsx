import Image1 from '../resources/assets/shared/mobile/h7.jpg'
import Image2 from '../resources/assets/shared/tablet/h1.jpg'
// import Image3 from '../resources/assets/shared/tablet/h2.jpg'
import Image4 from '../resources/assets/shared/desktop/h1.jpg'

const Body3 = () => {
  return (
    <>
      <div className='lg:flex lg:flex-row-reverse lg:gap-8 xl:w-9/12 xl:mx-auto lg:w-9/12 lg:mx-auto'>
        <div className='mt-24  '>
          <picture>
            <source media="(max-width: 640px)" srcSet={Image1}/>
            <source media="(max-width: 768px)" srcSet={Image2}/>
            <source media="(max-width: 1023px)" srcSet={Image2}/>
            <source media="(max-width: 1024px)" srcSet={Image4}/>
            <source media="(max-width: 1280px)" srcSet={Image4}/>
            <source media="(max-width: 1880px)" srcSet={Image4}/>
            <img src={Image1} alt='my-selfimage' className='left-0'/>
          </picture>

        </div>
        <div className='lg:w-[580px] lg:my-auto'>
          <h1 className='text-3xl w-80 mx-auto mt-8 font-medium tracking-[1px]
          md:w-96
          lg:text-left lg:ml-2 lg:w-[320px]'>BRINGING YOU THE 
          <span className='text-[#D87D4A]'> BEST</span> AUDIO GEAR</h1>

          <p className='mt-7 text-justify-center text-lg text-slate-500
          md:text-xl
          lg:text-left lg:ml-2  lg:text-lg'>Located at the heart of New York City, Audiophile is the premier store for high end 
              headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury 
              demonstration rooms available for you to browse and experience a wide range of our products. 
              Stop by our store to meet some of the fantastic people who make Audiophile the best place to
              buy your portable audio equipment.
          </p>
        </div>
      </div>
      
        

        
    </>
    
  )
}

export default Body3