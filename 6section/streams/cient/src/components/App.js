import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from './Header';

// clientId
// 190402365127-aps6a1p00qnfr19echat6ubc09e9a3sp.apps.googleusercontent.com

const App = () => {
    return ( 
    <div className="ui container">
        <BrowserRouter>
        <Header/>
        <Route path="/" exact  component={StreamList}/>
        <Route path="/streams/new" component={StreamCreate}/>
        <Route path="/streams/edit" component={StreamEdit}/>
        <Route path="/streams/show"  component={StreamShow}/>
        <Route path="/streams/delete" component={StreamDelete}/>
        </BrowserRouter>
    </div> );
}
 
export default App;