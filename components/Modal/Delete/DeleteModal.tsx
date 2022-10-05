import { Button, Modal } from "flowbite-react";
import React, { FC, useState } from "react";
import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import { iDeleteModal } from "./DeleteModal.interface";

const DeleteModal: FC<iDeleteModal> = ({ onOk }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <Button onClick={showModal} color="failure">
        Удалить
      </Button>
      <Modal show={show} size="md" popup={true} onClose={showModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ShieldExclamationIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Вы действительно хотите удалить компанию?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onOk}>
                Удалить
              </Button>
              <Button color="gray" onClick={showModal}>
                Отмена
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
