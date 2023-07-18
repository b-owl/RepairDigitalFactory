const ChooseUsItem = ({ item }) => {
  return (
    <div className="flex items-center justify-start gap-4 p-4 rounded-xl bg-emerald-200 dark:bg-txt-color">
      <img className="w-1/6 h-2/3" src={item.icon} alt="" />
      <div>
        <h4 className="text-base font-bold font-TitrPlus md:font-semibold">
          {item.title}
        </h4>
        <p className="my-4 text-xs md:text-sm text-second-color">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ChooseUsItem;
