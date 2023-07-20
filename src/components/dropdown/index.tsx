import { useState } from 'react';
import { ISideLink } from './interface';
import CustomLink from '../Link';

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
                  <CustomLink className="link" to={`${link.slug}`}>
                    {link.subtitle}
                  </CustomLink>
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
