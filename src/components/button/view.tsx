import React from 'react';
import { Link } from 'react-router-dom';
import './view.scss';
import { AiFillEye } from 'react-icons/ai';

interface IProps {
  href: string;
  onClick?: () => void;
}

const ViewButton: React.FC<IProps> = ({ href, onClick }) => {
  return (
    <div title="View" className="view-icon" onClick={onClick}>
      <Link to={href}>
        <AiFillEye className="i" />
      </Link>
    </div>
  );
};

export default ViewButton;
