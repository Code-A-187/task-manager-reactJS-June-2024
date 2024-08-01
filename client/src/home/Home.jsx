import { useEffect, useState } from "react";
import Task from "../task/Task";
import tasksAPI from "../api/tasks-api";

import './Home.css'

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect (() => {
    (async () => {
      const result = await tasksAPI.getAll();
      setTasks(result);
    })();

  }, [])

  return (
    <div className="bg-gray-50 px-4 py-12 font-[sans-serif]">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
          {tasks.length > 0
                    ? tasks.map(task => <Task key={task._id} {...task} />)
                    : <p className="no-articles">No tasks yet</p>
                }
      </div>
    </div>
  </div>
   );
}