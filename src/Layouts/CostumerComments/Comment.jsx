import { quoteIcon } from "../../assets";

const Comment = ({ commentText, commentPic, name, position }) => {
  return (
    <div className="mx-auto w-3/4 bg-slate-800 h-80 lg:h-96 p-8 lg:p-20 gap-10 flex flex-col justify-center items-start">
      <img className="w-12" src={quoteIcon} alt="quoteIcon" />
      <p className="text-xs leading-relaxed lg:text-base">{commentText}</p>
      <div className="flex items-center justify-center gap-4">
        <img className="rounded-full w-16 lg:w-20" src={commentPic} alt="" />
        <div>
          <h1 className="text-third-color font-semibold text-sm  mb-2 ">{name}</h1>
          <h3 className="text-xs text-second-color">{position}</h3>
        </div>
      </div>
    </div>
  );
};
export default Comment;
