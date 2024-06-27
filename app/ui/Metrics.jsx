import data from './data'

const Metrics = () => {
  return (
    <div className="flex w-full bg-black h-[15rem] justify-between px-[5rem] pt-[4rem] ">
      {data.map((item, index) => (
        <div key={index} className='flex flex-col gap-2 '>
          <h2 className="text-[#FEC00A] text-[3.5rem] font-bold">{item.num}</h2>
          <p className="text-white text-[1.8rem]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Metrics