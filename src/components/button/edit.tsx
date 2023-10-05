import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './edit.scss';

interface IProps {
  editUrl: string;
  onClick?: () => void;
}

const EditButton: React.FC<IProps> = ({ editUrl, onClick }) => {
  return (
    <div title="Edit" className="edit-icon" onClick={onClick}>
      <Link to={editUrl}>
        <FaRegEdit className="i" />
      </Link>
    </div>
  );
};

export default EditButton;
