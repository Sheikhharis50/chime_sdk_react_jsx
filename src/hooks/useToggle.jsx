import { useState } from 'react';

export default function useToggle(initialState) {
  const [isActive, setIsActive] = useState(initialState);

  function toggle() {
    setIsActive(!isActive);
  }

  return {
    isActive,
    toggle,
  };
}
