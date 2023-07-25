import React, { useRef, useEffect } from 'react';
import './index.scss';

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopup]);

  return (
    <div ref={popupRef} className="notification-items">
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
  );
};

export default Popup;
