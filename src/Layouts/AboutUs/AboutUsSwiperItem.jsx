const AboutUsSwiperItem = ({ item }) => {
  return (
    <div
      style={{ border: "0.6px solid snow", minHeight: "23rem" }}
      className={`
  ${item.bgColor} relative p-10 leading-loose text-center lg:h-72 lg:w-96 flex flex-col gap-8 rounded-md
  `}
    >
      <h1 className="text-xl font-bold text-third-color font-TitrPlus">
        {item.title}
      </h1>
      <p className="text-sm text-slate-300">{item.description}</p>
      <button className="mt-auto font-bold hover:text-green-300">
        بیشتر بخوانید
      </button>
    </div>
  );
};

export default AboutUsSwiperItem;
