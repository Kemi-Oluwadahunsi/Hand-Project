import data from './data'

const Metrics = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap w-full bg-black h-auto lg:h-[12rem] xl:h-[15rem] gap-8 lg:gap-0 justify-between px-8 lg-px-[3rem] xl:px-[5rem] py-8 lg:py-0 lg:pt-[3rem] xl:pt-[4rem] ">
      {data.map((item, index) => (
        <div key={index} className='flex flex-col lg:gap-2 '>
          <h2 className="text-[#FEC00A] text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold">{item.num}</h2>
          <p className="text-white text-[1.2rem] lg;text-[1.5rem] xl:text-[1.8rem]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Metrics