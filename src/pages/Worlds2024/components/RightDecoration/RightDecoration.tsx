import grayCrossSvg from "@/assets/gray-cross-right.svg";
import redLineSvg from "@/assets/red-line.svg";
import redLineDottedSvg from "@/assets/red-line-dotted.svg";

function RightDecoration() {
  return (
    <div className="max-lg:hidden absolute top-0 right-0 z-0 h-full w-[165px]">
      <img src={redLineSvg} className="absolute top-0 left-[29px]" />
      <img src={grayCrossSvg} className="absolute top-[125px]" />
      <img src={redLineDottedSvg} className="absolute top-[154px] right-0" />
    </div>
  );
}

export default RightDecoration;
