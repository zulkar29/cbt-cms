import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ISideLink } from './interface';

function Dropdown(props: { linkItem: ISideLink }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul>
        <li>{props.linkItem.title}</li>
        <ul className={isOpen ? 'open' : 'close'}>
          {props.linkItem.subLinks?.map(
            (link: { subtitle: string; slug: string }) => (
              <li key={link.subtitle}>
                <Link className="link" to={'/'}>
                  {link.subtitle}
                </Link>
              </li>
            )
          )}
        </ul>
      </ul>
    </div>
  );
}

export default Dropdown;
