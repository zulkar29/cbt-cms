import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ISideLink } from './interface';

function Dropdown(props: { linkItem: ISideLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <ul>
        <li onClick={toggleOpen}>{props.linkItem.title}</li>
        {isOpen ? (
          <ul className={isOpen ? 'open' : 'close'}>
            {props.linkItem.subLinks?.map(
              (link: { subtitle: string; slug: string }) => (
                <li key={link.subtitle}>
                  <Link className="link" to={`${link.slug}`}>
                    {link.subtitle}
                  </Link>
                </li>
              )
            )}
          </ul>
        ) : null}
      </ul>
    </div>
  );
}

export default Dropdown;
