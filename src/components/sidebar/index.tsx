import { useState, useEffect } from 'react';
import './index.scss';
import Icon from '../icon';
import Logo from '../logo';
import axios from 'axios';
import Dropdown from '../dropdown';

function SideBar() {
  const [sideLinks, setSideLinks] = useState([]);

  useEffect(() => {
    async function subData() {
      const res = await axios.get('/src/utils/sidebarLinks.json');
      setSideLinks(res.data);
    }
    subData();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo file="logo.png" />
        <button>
          <Icon iconName="left-double-arrow.svg" />
        </button>
      </div>
      {sideLinks.length
        ? sideLinks.map((linkItem) => <Dropdown linkItem={linkItem} />)
        : null}
    </div>
  );
}

export default SideBar;
