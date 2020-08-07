import React, { useContext} from 'react'
import { Divider } from "antd";
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
  return (
    <ThemeContext.Provider value={themes.light}>
      
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
  return (
    <div>
      <h1>useContext</h1>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;