import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext"
import { useModalContext } from "../../contexts/ModalContext";

export default function Header() {

    const { isAuthenticated } = useAuthContext();
    const { openModal } = useModalContext();

  return (
        <div className='flex bg-[#121e31] min-h-[80px] flex-wrap items-center justify-between gap-2 w-full'>
            <div className="flex-2" />
        <div id="collapseMenu" className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
                <ul className='lg:!flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='max-lg:border-b max-lg:py-3 px-3'>
                            <Link to='/' className='text-gray-300 hover:text-white text-base flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511.999" fill="currentColor" className="w-4 h-4 mr-3">
                                <path
                                d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                                data-original="#000000" />
                            </svg>
                            Home
                        </Link>
                        </li>

                    {isAuthenticated ? (

                        <li className='max-lg:border-b max-lg:py-3 px-3'>
                            <button
                                className='text-gray-300 hover:text-white text-base flex items-center'
                                onClick={openModal}
                                data-modal="create-task"
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M12 4v16m8-8H4"/>
                                </svg>
                            Create Task
                            </button>
                        </li>

                        ) : (

                        <section className="bg-[#004d66] px-4 py-0.5 sm:px-10 flex items-center max-sm:flex-col">
                            <div className="sm:ml-auto text-white">
                                <Link to="/login" className="text-sm mr-1 text-gray-300 hover:text-white">Login</Link>
                                /
                                <Link to="/register" className="text-sm ml-1 text-gray-300 hover:text-white">Register</Link>
                            </div>
                        </section>
                
                    )}
                </ul>
        </div>
            <div className='flex items-center max-lg:ml-auto'>
                    {/* <input type="text" placeholder="Search something..."
                    className="bg-transparent border-2 border-gray-300 text-sm w-full px-5 text-gray-300 rounded-full h-9 outline-none"></input>
             */}
                    <button id="toggleOpen" className='lg:hidden ml-7'>
                    <svg className="w-7 h-7 fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
  )
}