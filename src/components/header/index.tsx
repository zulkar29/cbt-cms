import { useState } from "react";
// import { BsBell } from 'react-icons/bs';
import Icon from "../icon";
import Popup from "../popup";
import ProfilePopup from "../popup/profile";
import "./index.scss";

function Header({
  handleOpen,
  isOpen,
}: {
  handleOpen: () => void;
  isOpen: boolean;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  /*  const handleButtonClick = () => {
    setIsPopupOpen(true);
  }; */
  const handleProfileClick = () => {
    setIsProfile(!isProfile);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="header">
      {!isOpen && (
        <button onClick={handleOpen}>
          <Icon iconName="left-double-arrow.svg" />
        </button>
      )}

      <div className=" header-main">
        {/* <div
          id="notification"
          className="notification"
          onClick={handleButtonClick}
        >
          <BsBell className="notification-icon" />
          <div className="items">1</div>
        </div> */}
        {isPopupOpen && <Popup closePopup={handleClosePopup} />}
        <img
          onClick={handleProfileClick}
          className="avatar"
          src="/assets/images/user.png"
          alt="avatar"
        />
        {isProfile && <ProfilePopup closePopup={() => setIsProfile(false)} />}
      </div>
    </header>
  );
}

export default Header;
