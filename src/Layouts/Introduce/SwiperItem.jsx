const SwiperItem = ({ prefix, title, description, href, imgSource, order }) => {
  return (
    <section className="flex flex-col px-4 pb-10 h-96 lg:px-16 lg:flex-row lg:mr-16">
      <div className={`${order} basis-1/2 flex items-start justify-center pt-16`}>
        <div className="w-4/5 leading-loose text-center ">
          <h3 className="mb-2 text-base font-semibold text-third-color lg:text-xl">
            {prefix}
          </h3>
          <h1 className="text-4xl font-bold text-main-color dark:text-txt-color lg:text-5xl font-TitrPlus">{title}</h1>
          <p className="my-6 text-sm text-second-color lg:text-base">
            {description}
          </p>
          <a
            className="p-2 px-6 rounded bg-second-color hover:bg-third-color "
            href={href}
          >
            ادامه
          </a>
        </div>
      </div>
      <div className="hidden lg:block lg:basis-1/2 lg:h-96">
        <img className="h-full lg:h-full " src={imgSource} alt="" />
      </div>
    </section>
  );
};

export default SwiperItem;
