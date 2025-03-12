import React, { useEffect, useState } from 'react'
import MyCard from '../MyCard'

const MyBody2 = () => {
    const category = ['Saved Recipes', 'Folders', 'Recipes by Genevive']
    const [data, setData] = useState([])
    useEffect(() => fetchData() 
          ,[])   

          // Hàm để lấy dữ liệu
  const fetchData = async () => {
    try {
      // Thực hiện yêu cầu GET bằng Fetch API
      const response = await fetch('https://67c7c637c19eb8753e7ab0ce.mockapi.io/che');
      
      // Kiểm tra xem phản hồi có thành công không (mã trạng thái 200-299)
      if (!response.ok) {
        throw new Error('Phản hồi mạng không hợp lệ');
      }

      // Phân tích dữ liệu JSON từ phản hồi
      const result = await response.json();

      // Cập nhật trạng thái với dữ liệu đã lấy
      setData(result);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error.message);
    }
  };
  return (
    <div className='max-w-10/12 m-auto mt-12'>
        <h1 className='font-bold text-2xl'>Emma Gonzalez's Recipe Box</h1>
        <div className='grid grid-cols-5 mt-10'>
            <div className='col-span-1'>
            <img
          className="max-h-40 rounded-full object-cover "
          src="https://thumbs.dreamstime.com/b/cartoon-monster-face-vector-halloween-green-happy-monster-square-avatar-funny-monster-mask-97157685.jpg"
          alt=""
        />
            </div>
            <div className='col-span-4 flex flex-col justify-between'>
                <h3>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights</h3>
                <div className='flex gap-5 items-center'>
                    <h3 className='text-[#d28da5] font-semibold'>6.5k Subscribers</h3>
                    <button className='px-3 py-2 bg-pink-400 hover:bg-pink-500 cursor-pointer text-white rounded-lg flex items-center gap-2 '>Share <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
                </div>
            </div>
        
        </div>

        <div>
            <div className='flex mt-5 border-b-1 border-gray-500'>
                {category.map((item)=>{
                    return <button className='p-3 font-semibold rounded-t-lg text-gray-600 cursor-pointer focus:bg-[#fcf0f4] focus:text-[#e6749d]'>{item}</button>
                })}
            </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-5 m-auto justify-center items-center'>
            {data.map((item) => {
                return <MyCard img={item.img} name={item.name} time={item.time}/>
            })}
        </div>
    </div>
  )
}

export default MyBody2