import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div  className='relative'>
        <div className='mt-16'></div>
        
        <div className='flex justify-content:space-evenly border-black-solid '>
        <div className='w-1/2 justify-center flex  items-center bg-[#f8f8fa]'>
            <div className='flex flex-col '>
              <div className='mb-3.5'>
              <div className='text-5xl font-bold '>Winner is always </div>
              <div className='text-5xl font-bold text-[#68CA45] '>HUNGRIER!!!</div>
              </div>
              <div className='mb-6'>
              <div className='text-xl font-bold '>หิวข้าวแต่โรงอาหารคนเยอะหรอ ?
              <br></br>
              ฝากหิ้วผ่าน <span className='text-red-500 text-xl'>Hiwkao</span> สิ</div>
              </div>
              <div className=' flex justify-start gap-5' >
              <Button color='[#FFFFFF]'>รับหิ้ว</Button>
             <Button color='[#68CA45]'>ฝากหิ้ว</Button></div>
            </div>
            
        </div>
        
        <div className='w-1/2'><img className='w-full h-full' src="https://sv1.picz.in.th/images/2023/04/22/y4WkSt.jpg" alt="" /></div>
        </div>
        
    </div>
    
  )
}

export default Home