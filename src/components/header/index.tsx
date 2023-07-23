import { BsBell } from 'react-icons/bs';
import './index.scss';

function Header() {
  return (
    <header className="header">
      <div className=" header-main">
        <div className="notification">
          <BsBell className="notification-icon" />
          <div className="items">1</div>
        </div>
        <img
          className="avatar"
          src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1631023655pexels-moose-photos-1036627.jpg"
          alt="avatar"
        />
      </div>
    </header>
  );
}

export default Header;
