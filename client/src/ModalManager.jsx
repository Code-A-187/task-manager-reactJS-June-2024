import React from 'react';

import CreateTaskModal from './components/common/create-task/CreateTaskModal';
import EditTaskModal from './components/common/edit-task/EditTaskModal';
import TaskDetailsModal from './components/common/task-details/TaskDetailsModal'
import DeleteModal from './components/common/delete-modal/DeleteModal';

export default function ModalManager ({ closeFn, modal = '' }) {
    
  return (
    <>
      <CreateTaskModal closeFn={closeFn} open={modal === 'create-task'} />
      <EditTaskModal closeFn={closeFn} open={modal === 'edit-task'} />
      <TaskDetailsModal closeFn={closeFn} open={modal === 'task-details'} />
      <DeleteModal closeFn={closeFn} open={modal === 'delete-modal'} />
    </>
  );
};
