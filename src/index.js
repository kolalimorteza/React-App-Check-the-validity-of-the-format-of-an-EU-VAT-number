import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//      <Route exact path="/" component={App} />
     
//     </div>
//   </BrowserRouter>
//   , document.getElementById('root'));
serviceWorker.unregister();
