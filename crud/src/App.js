import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { LoginScreen } from './pages/LoginScreen/LoginScreen';
import { ChatScreen } from './pages/ChatScreen/ChatScreen';



function App() {
  return (
      <Router>
        <div className="App" >
        </div>

        <Routes>
          <Route exact path='/' element={<LoginScreen />} />

          <Route path='/ChatScreen' element={<ChatScreen />} />
        </Routes>
      </Router>
      
      

  );
}

export default App;
