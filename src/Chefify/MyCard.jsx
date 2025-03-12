import React, { useState } from 'react'

const MyCard = ({ img, name, time }) => {
    const [islove, setLove] = useState(true)
    const handleLove = () => {
        setLove(!islove)
    }

    return (
        <div className='border-1 border-gray-500/50 rounded-lg w-60'><img src={img} alt="" className='w-full h-40 object-cover rounded-t-lg' />
            <div className='flex flex-col justify-between p-3 gap-3'>
                <div className='flex items-center justify-between'><div className='font-semibold w-4/5'>{name}</div>
                    <button className={`rounded-full border-1 p-1 cursor-pointer transition-all duration-300 ${islove ? "border-[#e6749d]" : "border-[#c9a202]"}`} onClick={handleLove}>
                        {
                            islove ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#e6749d] transition-all duration-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#ffce08] transition-all duration-300">
                                <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
                            </svg>


                        }

                    </button></div>

                <div className='bg-[#fcf0f4] text-[#e6749d] px-3 py-1 rounded-xl w-fit'>{time} minutes</div>
            </div>
        </div>
    )
}

export default MyCard