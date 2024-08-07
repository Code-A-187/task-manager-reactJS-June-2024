import { useModalContext } from "../../../contexts/ModalContext"
    
export default function TaskDetails() {
    
    const { openModal } = useModalContext();
  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
    <div className="relative flex flex-col items-start p-4 bg-white rounded-lg shadow-md w-1/2 max-h-screen overflow-y-auto">
    <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">dvfgnchngv</span>
    <h4 className="mt-3 text-sm font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </h4>
    <p className="mt-3 text-sm text-gray-800 w-auto font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deserunt rerum, dignissimos id quaerat sed quod amet magnam quo, nam eligendi officiis porro laborum quasi atque fugit labore non alias facilis nobis veniam.</p>
    <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
        <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 leading-none">End Date: 231244</span>
            <span className="ml-1 leading-none">Create Date: 231244</span>
        </div>
    </div>
    <div className="flex mt-4">
        <button 
            className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            data-modal="edit-task"
            onClick={openModal}
        >
            Edit
        </button>
        <button 
            className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            data-modal="delete-modal"
            onClick={openModal}
        >
            Delete
        </button>
    </div>
    <div className="mt-4 w-full">
        <form>
            <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="3"
                placeholder="Add a comment..."
            />
            <div className="flex justify-end mt-2">
                        <button 
                            type="submit" 
                            className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                        >
                            Add Comment
                        </button>
              </div>
        </form>

          <h5 className="text-sm font-semibold mt-4">Comments</h5>
          <div className="flex flex-col">

                  <div className="border rounded-md p-3 ml-3 my-3">
                      <div className="flex gap-3 items-center">
                          <h3 className="font-bold">
                              User name
                          </h3>
                      </div>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                    <div className="border rounded-md p-3 ml-3 my-3">
                      <div className="flex gap-3 items-center">
                        <h3 className="font-bold">
                              User name
                          </h3>
                      </div>
                      <p className="text-gray-600 mt-2">
                        this is sample commnent
                      </p>
                    </div>
                </div>
    </div>
</div>

</div>
  )
}