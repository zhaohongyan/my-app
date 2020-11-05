import React, { useState, useContext} from 'react'
import { Divider, Button } from "antd";
import Counter from "./Counter";
import TextInputWithFocusButton from "./TextInputWithFocusButton";
import FancyInput from "./FancyInput";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = React.createContext();

function App() {
  const [themeColor, changeColor] = useState('dark')
  const toggleColor = () => {
    if (themeColor === 'dark') {
      changeColor('light')
    } else {
      changeColor('dark')
    }
  }

  return (
    <ThemeContext.Provider value={themeColor === 'dark' ? themes.dark : themes.light}>
      <Button onClick={toggleColor}>更换主题</Button>

      <Toolbar />
      <Divider />

      <Counter />
      <Divider />

      <TextInputWithFocusButton />
      <Divider />

      <FancyInput />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1>useContext</h1>
      <Button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </Button>
    </div>
  );
}

export default App;