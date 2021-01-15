import React from 'react';

const useMenuOpen = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenuOpen = (override = null) => {
    if (override !== null) {
      isOpen = !override;
    }
    setIsOpen(!isOpen);
  };

  return {isOpen, toggleMenuOpen};
};

export default useMenuOpen;
