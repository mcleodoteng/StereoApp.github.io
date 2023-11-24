
import Product from './Product'
import Image1 from '../resources/assets/shared/mobile/h1.jpg'
import Image2 from '../resources/assets/shared/mobile/h2.jpg'
import Image4 from '../resources/assets/shared/mobile/h4.jpg'
import { useNavigate} from 'react-router-dom';


const AllProduct = () => {
  const navigate = useNavigate();
  return (
    <div className='md:flex md:justify-center md:gap-2 md:mt-14
    lg:w-[70%] lg:gap-5 lg:mx-auto
    xl:w-9/12 xl:mx-auto'>
        <button onClick={() =>{navigate("/headphone")}}><Product  imageName={Image1} productName={'HEADPHONES'}/></button>
        <button onClick={() =>{navigate("/speaker")}}><Product  imageName={Image2} productName={'SPEAKERS'}/></button>
        <button onClick={() =>{navigate("/earphone")}}><Product  imageName={Image4} productName={'EARPHONES'}/></button>
    </div>
  )
}

export default AllProduct