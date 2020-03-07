import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LaguageSelector from "./LanguageSelector";
import { LanguageStore } from "../context/LanguageContext";

class App extends React.Component {

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LaguageSelector />
          <ColorContext.Provider value='violet'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
