const ServiceItem = ({ title, picSource, description }) => {
  return (
    <>
      <div className="p-4 gap-4 flex flex-col items-start justify-center border-[1px] border-b-2 hover:border-b-4 border-b-third-color h-80 ">
        <img
          className="h-1/3 w-2/3 mx-auto"
          src={picSource}
          alt="service-repair-computer"
        />
        <h2 className="font-bold text-2xl mx-auto ">{title}</h2>
        <p className="line-clamp-3 text-sm">{description}</p>
        <button>اطلاعات بیشتر</button>
      </div>
    </>
  );
};

export default ServiceItem;
