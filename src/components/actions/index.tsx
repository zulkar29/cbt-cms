import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import Modal from '../modal';
import { Link } from 'react-router-dom';

interface IProps {
  editUrl?: string;
  viewLink?: string;
}

const Actions: React.FC<IProps> = ({ editUrl, viewLink }) => {
  const handleModel = async () => {
    const isTrue = await Modal();
    console.log(isTrue);
  };
  return (
    <div className="rect-icon">
      {editUrl && (
        <div title="Edit" className="icon">
          <Link to={editUrl}>
            <FaRegEdit className="i" />
          </Link>
        </div>
      )}
      {viewLink && (
        <div title="View" className="icon">
          <Link to={viewLink}>
            <AiFillEye className="i" />
          </Link>
        </div>
      )}

      <div title="Delete" className="icon" onClick={handleModel}>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default Actions;
