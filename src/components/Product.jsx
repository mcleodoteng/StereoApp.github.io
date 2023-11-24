
import {FaGreaterThan} from 'react-icons/fa'
import { PropTypes } from 'prop-types'


const Product = ({imageName,productName}) => {

  return (
    <>
        <br/>
        <div className='mt-5'>
            <button >
                <img src={(imageName)} alt='my-selfimage'  className='left-0'/>
                <div className='bg-[#f2f2f2] h-36 -mt-10'>
                    <br/><br/>
                    <h1 className=' tracking-[3px] text-lg'>{productName}</h1>

                    <button className='font-semibold text-lg h-5 mt-3 mx-auto rounded-b-lg hover:text-[#D87D4A]'>
                        <p className='font-light text-slate-600 -ml-10 text-base tracking-[2px]'>SHOP
                            <FaGreaterThan className='-mt-5 ml-24 text-[#D87D4A] text-base'/>
                        </p>
                    </button>

                </div>
            </button>
        </div>
    </>
  )
}


export default Product
Product.propTypes = {
    imageName: PropTypes.any,
    productName: PropTypes.any
  }