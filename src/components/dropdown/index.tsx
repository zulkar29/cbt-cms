import { GoDotFill } from 'react-icons/go';
import Icon from '../icon';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import CustomLink from '../Link';
import './index.scss';
import { Link } from 'react-router-dom';

export interface ISideLink {
  id: number;
  title: string;
  icon: string;
  slug?: string;
  subLinks?: {
    subtitle: string;
    slug: string;
  }[];
  isOpen?: boolean;
}

function Dropdown(props: {
  linkItem: ISideLink;
  isOpen?: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`dropdown-item ${props.isOpen ? 'collapse' : ''}`}>
      <ul className="main-wrapper">
        <li className="cursor" onClick={props.onToggle}>
          <div className="title">
            <div className="main">
              {props.linkItem.slug ? (
                <Link to={props.linkItem.slug}>
                  <Icon iconName={props.linkItem.icon} />
                  {props.linkItem.title}
                </Link>
              ) : (
                <>
                  <Icon iconName={props.linkItem.icon} />
                  {props.linkItem.title}
                </>
              )}
            </div>
            {props.linkItem.subLinks && (
              <span>
                <MdOutlineKeyboardArrowDown className="arrow-icon " />
              </span>
            )}
          </div>
        </li>
        {props.linkItem.subLinks ? (
          <ul className={`dropdown ${props.isOpen ? 'open' : ''}`}>
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
