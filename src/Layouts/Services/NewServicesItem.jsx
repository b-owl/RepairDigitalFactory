const NewServiceItem = ({ title, description, picSource }) => {
  return (
    <>
      <div className="rounded-xl bg-[#212332] w-48 lg:w-full  lg:h-96 border-[1px] p-4 gap-4 flex flex-col items-start justify-center hover:border-b-4 border-b-third-color h-80 ">
        <img
          className="w-2/3 mx-auto h-1/3"
          src={picSource}
          alt="service-repair-computer"
        />
        <h2 className="mx-auto text-base font-bold text-second-color lg:text-2xl font-TitrPlus">
          {title}
        </h2>
        <p className="text-xs lg:text-sm line-clamp-2 text-md">{description}</p>
        <button className="text-xs text-third-color">اطلاعات بیشتر</button>
      </div>
    </>
  );
};

export default NewServiceItem;
