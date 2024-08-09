import { ChangeEvent, useState } from "react";

type EventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function useInputValue() {
  const [value, setValue] = useState("");

  function handleChangeValue(event: EventType) {
    setValue(event.target.value);
  }

  function handleResetValue() {
    setValue("");
  }

  function handleSetValue(insertValue: string) {
    setValue(insertValue);
  }

  return { value, handleChangeValue, handleResetValue, handleSetValue };
}

export default useInputValue;
