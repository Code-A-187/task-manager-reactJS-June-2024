import { useState } from "react";
import Task from "../task/Task";

export default function Home() {
  const [tasks, tasksState] = useState();

  
  return (
    <div className="bg-gray-50 px-4 py-12 font-[sans-serif]">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </div>
    </div>
  </div>
   );
}