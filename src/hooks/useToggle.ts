import { useState } from "react";

function useToggle() {
  const [isTrue, setIsTrue] = useState(false);

  function handleTrue() {
    setIsTrue(true);
  }

  function handleFalse() {
    setIsTrue(false);
  }

  function handleToggle() {
    setIsTrue(preState => !preState);
  }

  return { isTrue, handleTrue, handleFalse, handleToggle };
}

export default useToggle;
