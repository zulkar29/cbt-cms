import { Link } from 'react-router-dom';

type LinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const CustomLink: React.FC<LinkProps> = ({ to, className, children }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
