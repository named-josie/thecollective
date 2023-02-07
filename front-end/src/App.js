
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Mission from './Pages/Mission';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mission' element={< Mission />} />
            {/* <Route path='*' element={<Four0Four />} />  */}
          </Routes>
        </main>
      </Router> 
       
      </header>
    </div>
  );
}

export default App;
