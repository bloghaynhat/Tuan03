import React, { useEffect, useState } from 'react'
import FilterBoard from '../FilterBoard'
import { button } from '../MyTailWindCSS'
import MyCard from '../MyCard'

const MyBody3 = () => {
    const [data, setData] = useState([])
    useEffect(() => fetchdata, [])
    const fetchdata = async () => {
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
    }

  return (
    <div className='grid grid-cols-3 mx-20 my-14'>
        <div className='col-span-1'>
            <FilterBoard/>
        </div>
        <div className='col-span-2'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>Salad (32)</h1>
                <select name="" id="" className={`${button}`}>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                    <option value="">Star</option>
                </select>
            </div>
        <div className='mt-5 flex flex-wrap items-center justify-center gap-8'>
            {data.map((item) => {
                return <MyCard img={item.img} name={item.name} time={item.time}/>
            })}
        </div>

        </div>
    </div>
  )
}

export default MyBody3