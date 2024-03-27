
const ReceiptSkeleton = () => (
  <div className="animate-pulse">
    <div className="rounded-lg border md:mx-12 w-full bg-white border-gray-300 p-6 md:p-8 mt-12">
      <div className="flex justify-between mx-4">
        <div className="h-20 w-20 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/4 bg-gray-300 rounded mt-4"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            ))}
          </div>
          <div className="pt-2 mt-4 space-y-2">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8 md:mt-0 mt-2">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReceiptSkeleton;
