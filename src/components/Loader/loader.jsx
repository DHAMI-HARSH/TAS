import React from 'react'
import { ThreeDots} from 'react-loader-spinner'
import './loader.css'

const Loader = () => {
    return(
  
  <div className='main'>
    <div className='loading'><ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#92b4a7"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
        />
        </div>
        </div>
    )
}


export default Loader
