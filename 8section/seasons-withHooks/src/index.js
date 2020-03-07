import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
import UseLocation from "./useLocation";

const App = () => {

    const [ lat, errorMessage ] = UseLocation();

  let content;
  if(errorMessage){
  content = <div>Error: {errorMessage}</div>
  }else if(lat){
      content = <SeasonsDisplay lat={lat}/>
  }else{
      content = <Spinner message='Please accept loaction request' />;
  }
return <div className="border red">{content}</div>;

};

ReactDOM.render(<App />, document.querySelector("#root"));
