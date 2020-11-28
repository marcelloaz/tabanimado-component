import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function TabComponent(){

  const [currentTab, setCurrentTab] = useState(1);
  console.log(currentTab);

  return(  <div className="tabs">
  <ul class="nav nav-tabs">
      <li class="nav-item">
          <a 
              class={`nav-link ${currentTab===1 ? 'active' : ''}`} 
              onClick={() => setCurrentTab(1)} href="#"
          >
              CABELO 
          </a>
      </li>
      <li class="nav-item">
          <a 
              class={`nav-link ${currentTab===2 ? 'active' : ''}`} 
              onClick={() => setCurrentTab(2)} href="#"
          >
             BIGODE
          </a>                
      </li>
      <li class="nav-item">
          <a 
              class={`nav-link ${currentTab===3 ? 'active' : ''}`} 
              onClick={() => setCurrentTab(3)} href="#"
          >
              BARGA
          </a>                
      </li>
  </ul>
  <div class="tab-content">
      {currentTab === 1 &&
          <div id="home" class="tab-pane">
              <h3>CABELO</h3>
              <p>CABELO AQUI</p>
          </div>
      }
      {currentTab === 2 &&
          <div id="menu1" class="tab-pane">
              <h3>BIGODE</h3>
              <p>BIGODE</p>
          </div>
      }
      {currentTab === 3 &&
          <div id="menu1" class="tab-pane">
              <h3>BARBA</h3>
              <p>BARBA</p>
          </div>
      }
  </div>
</div>);

}

function App() {
  return (
     <div className="App">
      <header className="App-header">
        <TabComponent />
      </header>
    </div>
  );
}

export default App;
