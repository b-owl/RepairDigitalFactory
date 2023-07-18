import { quoteIcon } from "../../assets";

const Comment = ({ commentText, commentPic, name, position }) => {
  return (
    <div className="flex flex-col items-start justify-center w-3/4 gap-10 p-8 mx-auto rounded-2xl bg-third-color dark:bg-slate-800 h-80 lg:h-96 lg:p-20">
      <img className="w-12" src={quoteIcon} alt="quoteIcon" />
      <p className="text-xs leading-relaxed lg:text-base">{commentText}</p>
      <div className="flex items-center justify-center gap-4">
        <img className="w-16 rounded-full lg:w-20" src={commentPic} alt="" />
        <div>
          <h1 className="mb-2 text-sm font-semibold text-second-color dark:text-third-color font-TitrPlus">
            {name}
          </h1>
          <h3 className="text-xs text-second-color">{position}</h3>
        </div>
      </div>
    </div>
  );
};
export default Comment;
