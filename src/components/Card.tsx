function Card() {
  return (
    <div className="bg-white w-[450px] h-[200px] rounded-3xl shadow-lg flex flex-col justify-center items-center space-y-3 px-8 dark:bg-gray-700">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
            In transit
          </span>
          <span className="text-4xl font-bold dark:text-white">Coolblue</span>
        </div>
        <div className="bg-orange-500 rounded-full size-14" />
      </div>
      <div className="flex flex-row items-center justify-start w-full space-x-2">
        <span className="px-6 py-2 font-semibold text-white uppercase transition bg-green-400 rounded-full dark:text-gray-700 hover:bg-green-500 hover:scale-110">
          today
        </span>
        <span className="font-semibold dark:text-white">9:30-10:30</span>
      </div>
      <div className="relative w-full">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full dark:bg-gray-500" />
        <div className="absolute w-2/3 h-2 bg-green-400 rounded-full hover:bg-green-500" />
      </div>
      <div className="flex justify-between w-full">
        <span className="text-gray-600 dark:text-gray-500">Expected</span>
        <span className="text-gray-600 dark:text-gray-500">Sorting center</span>
        <span className="text-gray-600 dark:text-gray-500">In transit</span>
        <span className="text-gray-500 dark:text-gray-600">Delivered</span>
      </div>
    </div>
  );
}

export default Card;
