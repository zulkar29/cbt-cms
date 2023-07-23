import { useState } from 'react';
import { ISideLink } from './interface';
import { GoDotFill } from 'react-icons/go';
import Icon from '../icon';
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
            <div className="main">
              <Icon iconName={props.linkItem.icon} />
              {props.linkItem.title}
            </div>

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
