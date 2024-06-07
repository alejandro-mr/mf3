import grayLineDottedSvg from "@/assets/gray-line-dotted.svg";
import redCrossSvg from "@/assets/red-cross-left.svg";

function LeftDecoration() {
  return (
    <div className="max-lg:hidden absolute top-0 left-0 z-0 h-full w-[257px]">
      <img src={grayLineDottedSvg} className="absolute top-0 right-0" />
      <img src={redCrossSvg} className="absolute left-[88px] top-[243px]" />
    </div>
  );
}

export default LeftDecoration;
