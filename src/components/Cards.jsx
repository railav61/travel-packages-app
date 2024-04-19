import { useState } from "react";
function Cards({tour,removeTour}){
    const [readmore,setReadmore] = useState(false);
    let info1 = tour.info;

    const sliced = (start, end) => {
        return info1.slice(start, end);
    };

    info1 = `${sliced(0,160)}....`;
    const desc = readmore ? tour.info : info1;
    function readmorehandler(){
        setReadmore(!readmore);
    }

    return(
        <div className='w-72 h-[32] m-10 p-5 flex flex-col items-center shadow-lg shadow-black rounded-md'>
            <img src={tour.image} className='h-52 w-64 shadow-lg shadow-black' />
            <div className='text-2xl mt-3 w-full relative left-0'>{tour.name}</div>
            <div className='w-full text-lime-400 relative left-0 font-medium'>₹{tour.price}</div>
            <div className='h-40 w-full text-ellipsis overflow-auto'>{desc}<span onClick={readmorehandler} className='cursor-pointer text-blue-700 font-bold'>{readmore ? `Show Less`:`Read More`}</span></div>
            <button onClick={()=>removeTour(tour.id)} className='w-60 p-2 mt-5 border-2 border-neutral-900 rounded-md bg-slate-400 hover:bg-slate-800 font-medium hover:text-white'>Not Interested</button>
        </div>
    );
}

export default Cards;