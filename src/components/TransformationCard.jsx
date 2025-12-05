import ReactCompareImage from "react-compare-image";
export default function TransformationCard({ title, beforeImage, afterImage }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      {/* Fixed Height Wrapper */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <ReactCompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          sliderPositionPercentage={0.3}
        />
      </div>

      {/* Card Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
