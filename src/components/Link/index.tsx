
type LinkProps = {
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
  }
  
  const Link: React.FC<LinkProps> = ({ href, target, rel, children }) => {
    return (
      <a href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  };
  
  export default Link;
  