import { useState } from "react";
import UseLocalStorage from "./useLocalStorage";

const UseDarkMode = () => {
  const [darkMode, setDarkMode] = UseLocalStorage("name", false);

  return [darkMode, setDarkMode];
};

export default UseDarkMode;
