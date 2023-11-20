import React from 'react';
import './download.scss';
import { GoDownload } from 'react-icons/go';

interface IProps {
  onClick?: () => void;
}

const DownloadButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <div title="Download" className="download-icon" onClick={onClick}>
      <GoDownload />
    </div>
  );
};

export default DownloadButton;
