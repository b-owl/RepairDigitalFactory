const NewServiceItem = ({ title, description, picSource }) => {
  return (
    <>
      <div className="bg-[#212332] w-48 lg:w-full  lg:h-96 border-[1px] p-4 gap-4 flex flex-col items-start justify-center hover:border-b-4 border-b-third-color h-80 ">
        <img
          className="h-1/3 w-2/3 mx-auto"
          src={picSource}
          alt="service-repair-computer"
        />
        <h2 className="text-second-color text-base font-bold lg:text-2xl mx-auto ">
          {title}
        </h2>
        <p className="text-xs lg:text-sm line-clamp-3 text-md">{description}</p>
        <button className="text-xs text-third-color">اطلاعات بیشتر</button>
      </div>
    </>
  );
};

export default NewServiceItem;
