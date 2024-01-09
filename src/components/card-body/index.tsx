import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.scss";

interface CardProps {
  to: string;
  header: string;
  text?: string;
  isHide?: boolean;
}

const CardBody: React.FC<CardProps> = ({
  header,
  to,
  text,
  isHide = false,
}) => {
  return (
    <div className="card-body">
      <div className="card-wrapper">
        <h3 className="card-header">{header}</h3>
        {!isHide && (
          <Link className="button" to={to}>
            {!text ? (
              <>
                <FaPlus /> Add
              </>
            ) : (
              <>
                <MdKeyboardArrowLeft /> Back
              </>
            )}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardBody;
