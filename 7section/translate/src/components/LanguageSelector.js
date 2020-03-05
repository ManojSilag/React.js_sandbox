import React, { Component } from "react";
import LanguageContext from '../context/LanguageContext';

class LaguageSelector extends Component {
 
    static contextType = LanguageContext;

  render() {
 console.log(this.context);
 

    return (
      <div>
        Select a language
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className='flag us'
        />
        <i onClick={() => this.context.onLanguageChange("dutch")} className='flag ni' />
      </div>
    );
  }
}

export default LaguageSelector;
