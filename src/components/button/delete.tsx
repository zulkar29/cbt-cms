import React from 'react';
import './delete.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Modal from '../modal';

interface IProps {
  onClick: () => void;
}

const DeleteButton: React.FC<IProps> = ({ onClick }) => {
  const handleModel = async () => {
    await Modal(onClick);
  };
  return (
    <div title="Delete" className="delete-icon" onClick={handleModel}>
      <RiDeleteBin6Line />
    </div>
  );
};

export default DeleteButton;
