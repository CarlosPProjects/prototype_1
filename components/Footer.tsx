import { RxInstagramLogo } from "react-icons/rx";
import { RiFacebookLine, RiPlayMiniLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full grid place-items-center px-6 py-4 text-white">
      <div className="flex gap-3 items-center">
        <div className="border-2 rounded-md p-[1.8px] opacity-50 hover:opacity-80 duration-500">
          <RiFacebookLine
            size={18}
            className="backdrop-blur-md hover:opacity-80 duration-500"
          />
        </div>
        <div className="rounded-md p-1">
          <RxInstagramLogo
            size={28}
            className="backdrop-blur-md opacity-50 hover:opacity-80 duration-500"
          />
        </div>
        <div className="border-2 rounded-md p-[.5px] opacity-50 hover:opacity-80 duration-500">
          <RiPlayMiniLine
            size={22}
            className="backdrop-blur-md hover:opacity-80 duration-500"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
