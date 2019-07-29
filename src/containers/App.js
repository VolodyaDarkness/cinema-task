import React from 'react';

import '../style/App.css';
import {Header, Footer} from '../components';
import {MainContainer} from '../routes/main';

function App() {
  return (
    <div>
    	<Header></Header>
    	<MainContainer></MainContainer>
	    <Footer></Footer>      
    </div>
  )
}

export default App;
