import grayCrossSvg from "@/assets/gray-cross.svg";
import grayLineSvg from "@/assets/gray-line.svg";
import grayLineDottedSvg from "@/assets/gray-line-dotted.svg";
import greenCrossSvg from "@/assets/green-cross.svg";

function GrayCrossDecoration() {
  return (
    <div className="max-lg:hidden absolute top-0 left-0 z-0 h-full w-[273px]">
      <img src={grayLineDottedSvg} className="absolute top-0 right-[14px]" />
      <img src={grayCrossSvg} className="absolute right-0 bottom-[316px]" />
      <img src={grayLineSvg} className="mt-[526px]" />
      <img src={greenCrossSvg} className="absolute left-[88px] top-[243px]" />
    </div>
  );
}

export default GrayCrossDecoration;
