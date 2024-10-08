import { useGetCompletedTasks } from "../../../hooks/useTasks";
import TaskListItem from "../task-list-item/TaskListElement";


export default function CompletedTasks() {

    const { tasks, loading, error } = useGetCompletedTasks();

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="max-w-6xl mx-auto">
        {tasks.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
            {tasks.map(task => (
              <TaskListItem key={task._id} {...task} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-start pt-12">
            <p className="text-gray-500 text-lg">No tasks yet</p>
            {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Add a Task
            </button> */}
          </div>
        )}
      </div>
       );
  }