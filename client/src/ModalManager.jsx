import React from 'react';

import { useModalContext } from './contexts/ModalContext';

import CreateTaskModal from './components/common/create-task/CreateTaskModal';
import EditTaskModal from './components/common/edit-task/EditTaskModal';
import DeleteModal from './components/common/delete-modal/DeleteModal';

export default function ModalManager () {
  const { modal, modalProps, closeModal: closeFn,  } = useModalContext();
  return (
    <>
      <CreateTaskModal closeFn={closeFn} open={modal === 'create-task'} />
      <EditTaskModal closeFn={closeFn} open={modal === 'edit-task'} taskId={modalProps.taskId} />
      <DeleteModal closeFn={closeFn} open={modal === 'delete-modal'} taskId={modalProps.taskId} />
    </>
  );
};
