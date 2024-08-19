import { MouseEvent, useState } from "react";

function useSelectValue<T>() {
  const [value, setValue] = useState<T | string>();

  function handleSetValue(event: MouseEvent<HTMLButtonElement>) {
    setValue(event.currentTarget.value);
  }

  return { value, handleSetValue };
}

export default useSelectValue;
