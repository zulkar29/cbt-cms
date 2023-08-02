import { useState } from 'react';
import './index.scss';
import Icon from '../icon';
import Logo from '../logo';
import Dropdown, { ISideLink } from '../dropdown';
import { Link } from 'react-router-dom';
import { sidebarLinks } from '../static/sidebarLinks';

function SideBar() {
  const [sideLinks, setSideLinks] = useState<ISideLink[]>(sidebarLinks);

  const handleDropdownToggle = (clickedIndex: number) => {
    const updatedSideLinks = sideLinks.map((linkItem, index) => ({
      ...linkItem,
      isOpen: index === clickedIndex ? !linkItem.isOpen : false,
    }));

    setSideLinks(updatedSideLinks);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <Logo file="logo.png" />
        </Link>
        <button>
          <Icon iconName="left-double-arrow.svg" />
        </button>
      </div>
      {sideLinks.length
        ? sideLinks.map((linkItem, index) => (
            <Dropdown
              key={index}
              linkItem={linkItem}
              isOpen={linkItem.isOpen}
              onToggle={() => handleDropdownToggle(index)}
            />
          ))
        : null}
    </div>
  );
}

export default SideBar;
