import { useState } from 'react';
import './index.scss';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleButton = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`toggle-button ${isChecked ? 'checked' : ''}`}
      onClick={toggleButton}
    >
      <div className={`slider ${isChecked ? 'active' : ''}`}></div>
    </div>
  );
};

export default ToggleButton;
