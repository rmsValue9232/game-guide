import "../styles/Search.css";

function Search(onChange, onKeyDown) {

  // onChange = 

  return (
    <div className="w-full text-center flex flex-col md:flex-row sm:flex-wrap gap-2 flex-shrink-0 justify-center sm:items-center px-4 py-2 sticky top-0 backdrop-blur-md bg-background/50 border-b-2 border-foreground shadow-md shadow-black z-50">
      <input
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="Type here to explore video games"
        className="w-full md:w-7/12 border-0 backdrop-blur bg-primary/70 focus:bg-primary/90 text-foreground p-2 text-center rounded-sm focus:outline-none focus:ring-2 focus:ring-tertiary shadow-sm shadow-black"
      />
      <div className="w-full md:w-4/12 flex flex-row gap-2 flex-shrink-0 justify-center text-primary font-semibold">
        <button className="w-1/2 p-1 bg-blue-500/80 rounded-md hover:bg-blue-400/80 active:bg-blue-400 shadow-sm shadow-black filterBtn">
          Filter<p className="material-symbols-outlined ml-2">filter_list</p>
        </button>
        <button className="w-1/2 p-1 bg-green-500/80 rounded-md hover:bg-green-400/80 active:bg-green-400 shadow-sm shadow-black">
          Search<p className="material-symbols-outlined ml-2">search</p>
        </button>
      </div>
      <div className="backdrop-blur-xl sm:w-7/12 md:w-6/12 left-0 w-full py-1 text-left rounded bg-blue-500/80 hover:bg-blue-500/90 text-primary font-semibold shadow-sm shadow-black">
        <p className="px-4 pb-1 sm:mb-1 border-b-2 border-primary md:text-center">
          Filter by Platform:
        </p>
        <ul className="flex flex-col sm:flex-row sm:justify-around">
          <li className="hover:bg-blue-600/50 cursor-pointer px-4 py-1 rounded-sm">
            <p className="material-symbols-outlined text-tertiary mr-2 bg-background rounded-full">
              radio_button_unchecked
            </p>{" "}
            PC
          </li>
          <li className="hover:bg-blue-600/50 cursor-pointer px-4 py-1 rounded-sm">
            <p className="material-symbols-outlined text-tertiary mr-2 bg-background rounded-full">
              radio_button_unchecked
            </p>{" "}
            Browser
          </li>
          <li className="hover:bg-blue-600/50 cursor-pointer px-4 py-1 rounded-sm">
            <p className="material-symbols-outlined text-tertiary mr-2 bg-background rounded-full">
              radio_button_checked
            </p>{" "}
            All
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
