import { useParams } from "react-router-dom";
import { useGetOneTasks } from "../../../hooks/useTasks";
import { useModalContext } from "../../../contexts/ModalContext"
import Comments from "./comments/Comments";
import { useAuthContext } from "../../../contexts/AuthContext";

const getStatusColorClasses = (status) => {
    switch (status) {
        case 'Completed':
            return 'text-green-500 bg-green-100';
        case 'In Progress':
            return 'text-yellow-500 bg-yellow-100';
        case 'Important':
            return 'text-pink-500 bg-pink-100';
        case 'Do It Now':
            return 'text-red-800 bg-red-400';
        default:
            return 'text-gray-500 bg-gray-500';
    }
};

export default function TaskDetails() {
    const { taskId } = useParams();
    const [task] = useGetOneTasks(taskId);
    const { openModal } = useModalContext();
    const { userId } = useAuthContext();

    const isOwner = userId === task._ownerId;

    const statusColorClasses = getStatusColorClasses(task.status);

  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
        <div className="relative flex flex-col items-start p-4 bg-white rounded-lg shadow-md w-1/2 max-h-screen overflow-y-auto">
                <span className={`flex items-center h-6 px-3 text-xs font-semibold rounded-full ${statusColorClasses}`}>{task.status}</span>
                <h3 className="mt-3 text-sm font-medium">{task.title}</h3>
                <p className="mt-3 text-sm text-gray-800 w-auto font-medium">{task.description}</p>
            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-1 leading-none">Created on: {task._createdOn}</span>
                    <span className="ml-1 leading-none">End date: {task.dueDate}</span>
                </div>
            </div>

            
                {isOwner && (
                <div className="flex mt-4">
                    <button 
                        className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                        data-modal="edit-task"
                        data-task-id={taskId}
                        onClick={openModal}
                    >
                        Edit
                    </button>
                    <button 
                        className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                        data-modal="delete-modal"
                        data-task-id={taskId}
                        onClick={openModal}
                    >
                        Delete
                    </button>
                    </div>
                )}
            

            <Comments taskId={taskId} />
            
        </div> 
    </div>
  )
}