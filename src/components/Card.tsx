function Card() {
  return (
    <div className="bg-white w-[450px] h-[200px] rounded-3xl shadow-lg flex flex-col justify-center items-center space-y-3 px-8">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-medium text-gray-500">In transit</span>
          <span className="text-4xl font-bold">Coolblue</span>
        </div>
        <div className="bg-orange-500 rounded-full size-14" />
      </div>
      <div className="flex flex-row items-center justify-start w-full space-x-2">
        <span className="px-6 py-2 font-semibold text-white uppercase bg-green-400 rounded-full">
          today
        </span>
        <span className="font-semibold">9:30-10:30</span>
      </div>
      <div className="relative w-full">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full" />
        <div className="absolute w-2/3 h-2 bg-green-400 rounded-full" />
      </div>
      <div className="flex justify-between w-full">
        <span className="text-gray-600">Expected</span>
        <span className="text-gray-600">Sorting center</span>
        <span className="text-gray-600">In transit</span>
        <span className="text-gray-500">Delivered</span>
      </div>
    </div>
  );
}

export default Card;
