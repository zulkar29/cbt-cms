import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import './index.scss';

interface CardProps {
  to: string;
  header: string;
}

const CardBody: React.FC<CardProps> = ({ header, to }) => {
  return (
    <div className="card-body">
      <div className="card-wrapper">
        <h3 className="card-header">{header}</h3>
        <Link className="button" to={to}>
          <FaPlus /> Add
        </Link>
      </div>
    </div>
  );
};

export default CardBody;
