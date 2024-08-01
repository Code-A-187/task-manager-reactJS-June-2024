import { useState } from "react";

export default function CreateTaskModal() {

    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown visibility
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

  return (

    
    <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                <div className="flex items-center">
                    <h3 className="text-blue-600 text-xl font-bold flex-1">Add New Task</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <form className="space-y-4 mt-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Task title</label>
                        <input type="text" placeholder="Enter task title"
                            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Task description</label>
                        <textarea placeholder='Write about the task'
                            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" rows="3"></textarea>
                    </div>

                    <div className="relative font-sans w-max mx-auto">
                        <label className="text-gray-800 text-sm mb-2 block">Task status</label>
                            <button
                                type="button"
                                id="dropdownToggle"
                                className="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50 flex items-center"
                                onClick={handleClick}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 fill-gray-500 inline ml-3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <ul
                            id="dropdownMenu"
                            className={`absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto ${isOpen ? 'block' : 'hidden'}`}>
                            <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Dropdown option</li>
                            <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Cloth set</li>
                            <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Sales details</li>
                            <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">Marketing</li>
                        </ul>
                    </div>


                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">End date</label>
                        <input type="number" placeholder="Date for task be completed"
                            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div className="flex justify-end gap-4 !mt-8">
                        <button type="button"
                            className="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300">Cancel</button>
                        <button type="button"
                            className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700">Submit</button>
                    </div>
                </form>
            </div>
        </div> 
   );
}