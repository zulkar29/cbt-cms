type LinkProps = {
  to: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default Link;
