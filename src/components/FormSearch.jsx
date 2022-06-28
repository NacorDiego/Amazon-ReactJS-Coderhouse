


function FormSearch() {
    return (
        <div className="grow flex justify-center">
            <form className="w-3/4 ">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-blue-900 sr-only dark:text-light-300">Search</label>
                <div className="w-full flex flex-row justify-between items-stretch">
                    <input type="search" id="default-search" className="p-4 pl-10 w-full text-sm text-blue-900 bg-light-100 rounded-l-lg border border-light-300 focus:ring-blue-500" placeholder=" Search Mockups, Logos ..." required />
                    <button type="submit" className="text-white bg-yellow hover:bg-yellow-500 rounded-r-lg font-medium px-4 py-2 ease-in duration-300">
                        <svg className="w-7 h-7 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormSearch;