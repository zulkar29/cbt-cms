import React, { useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={handleToggle}>
        <h2 className="accordion__title">{title}</h2>
        <button className="accordion__toggle">
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="accordion__body">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;