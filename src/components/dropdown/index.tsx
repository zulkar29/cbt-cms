import { useState } from 'react';
import { ISideLink } from './interface';
import { GoDotFill } from 'react-icons/go';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import CustomLink from '../Link';
import './index.scss';

function Dropdown(props: { linkItem: ISideLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`dropdown-item ${isOpen && 'collapse'}`}>
      <ul className="main-wrapper">
        <li className="cursor" onClick={toggleOpen}>
          <div className="title">
            {props.linkItem.title}
            <span>
              <MdOutlineKeyboardArrowDown className="arrow-icon " />
            </span>
          </div>
        </li>
        {props.linkItem.subLinks ? (
          <ul className={`dropdown ${isOpen && 'open'}`}>
            {props.linkItem.subLinks?.map(
              (link: { subtitle: string; slug: string }) => (
                <li className="sublinks" key={link.subtitle}>
                  <GoDotFill className="dot-icon" />
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
