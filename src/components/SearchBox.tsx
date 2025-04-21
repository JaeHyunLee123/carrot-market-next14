function SearchBox() {
  return (
    <div className="bg-white w-[600px] rounded-3xl shadow-lg flex flex-col justify-center items-center space-y-3  p-5 ">
      <input
        type="text"
        placeholder="Search here"
        className="w-full h-10 pl-5 transition-shadow bg-gray-200 rounded-full outline-none ring ring-transparent focus:ring-orange-300 focus:ring-offset-2 placeholder:drop-shadow"
      />
      <button className="px-4 py-2 text-white transition bg-black rounded-full bg-opacity-80 hover:bg-opacity-100 active:scale-90 focus:outline-none">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
