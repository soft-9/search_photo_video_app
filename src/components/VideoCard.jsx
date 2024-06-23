import { MdDownload } from "react-icons/md";
import "../App.css";
import { FcLike } from "react-icons/fc";
import { GoLinkExternal } from "react-icons/go";

const VideoCard = ({ video }) => {
  const tinyVideoUrl = video?.videos?.tiny?.url;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="w-40 h-48 overflow-hidden bg-[#272727]  rounded-md  flex flex-col items-center justify-between py-3 shadow-2xl
                text-white text-[13px] md:w-60 md:h-72"
    >
      <div className="relative top-[-5px] left-0 flex justify-center select-none">
        <span className=" absolute  w-36 h-28 overflow-hidden rounded md:w-56 md:h-40 ">
          <video
            className="w-[100%] h-[100%] rounded"
            width="640"
            height="360"
            controls
          >
            <source src={tinyVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a
            rel={video.pageURL}
            className="absolute w-4 rounded h-4 top-[-10] z-[3] bee border  bg-[#ff000017] flex  items-center justify-center backdrop-blur-sm transition-all  duration-700  
            md:w-6 md:h-6 md:text-[20px]"
          >
            <GoLinkExternal />
          </a>
        </span>
      </div>
      <div className="flex flex-col w-full relative px-3 top-[8px] h-[60px] md:top-[-19px]">
        <span className="w-[90%] md:h-1 bg-red-700 absolute top-[-5px] md:top-[-13px] rounded-2xl h-[2px] "></span>
        <div className="mx-auto absolute w-full right-0 flex items-center justify-between px-3 h-10 top-0 ">
          <img
            className="size-6 rounded select-none hover:rounded-xl cursor-pointer transition-all  md:size-8 duration-600"
            src={video.userImageURL}
          />
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          >
            {video.user}
          </p>
        </div>
        <div className="mx-auto  bottom-[0] absolute w-full right-0  md:top-[70px] flex items-center justify-between px-3">
          <span className="flex items-center text-[11px] justify-center select-none gap-2">
            <span className="w-3 h-3 rounded-lg viwe md:w-4 md:h-4 "></span>
            <p
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="600"
            >
              {video.views}
            </p>
          </span>
          <span
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
            className="flex items-center text-[11px] justify-center select-none gap-1"
          >
            <FcLike className="text-[15px]" />
            <p className="">{video.likes}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
