import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Modal from '../modal';

const Actions = () => {
  const handleModel = async () => {
    const isTrue = await Modal();
    console.log(isTrue);
  };
  return (
    <div className="rect-icon">
      <div title="Edit" className="icon">
        <FaRegEdit className="i" />
      </div>
      <div title="Delete" className="icon" onClick={handleModel}>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};

export default Actions;
