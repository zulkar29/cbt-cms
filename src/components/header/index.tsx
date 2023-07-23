import { useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';
import './index.scss';

function Header() {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow((prevShow) => !prevShow);
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const componentElement = document.getElementById('notification');
      if (
        componentElement &&
        !componentElement.contains(event.target as Node)
      ) {
        toggleShow();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className="header">
      <div className=" header-main">
        <div id="notification" className="notification" onClick={toggleShow}>
          <BsBell className="notification-icon" />
          <div className="items">1</div>
        </div>
        {isShow ? (
          <div className="notification-items">
            <ul>
              <li className="notification-item">
                <p>Notifications</p>
              </li>
              <li className="notification-item">
                <p>Notifications</p>
              </li>
              <li className="notification-item">
                <p>Notifications</p>
              </li>
            </ul>
          </div>
        ) : null}
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
