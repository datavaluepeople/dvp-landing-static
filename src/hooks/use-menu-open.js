import React from 'react';

const useMenuOpen = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return {isOpen, toggleMenuOpen};
};

export default useMenuOpen;
