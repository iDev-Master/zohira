
// About
function Card({img,button,h1,p1,p2}){
    return (
        <div className="flex mt-[30px] border-[1px] border-[gray] rounded-[5px] shadow-lg shadow-gray-300 hover:bg-neutral-200">
            <div><img src={img} alt="" /></div>
            <div className="ml-[30px]">
                <button className="bg-[#03CEA4] text-[#fff] font-medium px-[15px] py-[5px] rounded-[3px] mt-[30px]">{button}</button>
                <h1 className="text-[20px] font-bold w-[335px] mt-[20px] text-[#1E212C]">{h1}</h1>
                <div className="mt-[15px]">
                <p1 className="text-[#FF4242] font-bold">{p1}</p1>
                <p2 className="text-[gray] ml-[10px]">{p2}</p2>
                </div>
            </div>
        </div>
    )
}
export default Card;