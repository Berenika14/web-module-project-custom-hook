import { useState } from "react";

const UseLocalStorage = (key, initValue) => {
  const checkLocalStorage = () => {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    } else {
      return localStorage.setItem(key, initValue);
    }
  };
  const [value, setValue] = useState(checkLocalStorage);

  const setStoredValue = (newValue) => {
    localStorage.getItem(key, newValue);
    setValue(newValue);
  };
  return [value, setStoredValue];
};

export default UseLocalStorage;
