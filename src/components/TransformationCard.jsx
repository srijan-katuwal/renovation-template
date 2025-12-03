export default function TransformationCard({ title, beforeImage, afterImage }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3]">
        {/* Before/After Images Container */}
        <div className="absolute inset-0 flex">
          {/* Before Image */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={beforeImage}
              alt={`${title} before`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-gray-900/80 text-white text-xs px-2 py-1 rounded">
              Before
            </div>
          </div>
          
          {/* Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white z-10 transform -translate-x-1/2">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
          
          {/* After Image */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={afterImage}
              alt={`${title} after`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
              After
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}

