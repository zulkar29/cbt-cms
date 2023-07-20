import './index.scss';
import Icon from '../icon';
import Logo from '../logo';

function SideBar(params) {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo file="logo" />
        <button>
          <Icon iconName="left-double-arrow" />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
