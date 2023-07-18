const ServiceItem = ({ title, picSource, description }) => {
  return (
    <>
      <div className="shadow-black dark:shadow-white shadow-sm rounded-xl p-4 gap-4 flex flex-col items-start justify-center border-[1px] border-b-2 hover:border-b-4 border-b-third-color h-80 ">
        <img
          className="w-2/3 mx-auto h-1/3"
          src={picSource}
          alt="service-repair-computer"
        />
        <h2 className="mx-auto text-2xl font-bold font-TitrPlus">{title}</h2>
        <p className="text-sm text-slate-400 line-clamp-3">{description}</p>
        <button className="text-second-color hover:text-third-color">
          اطلاعات بیشتر
        </button>
      </div>
    </>
  );
};

export default ServiceItem;
