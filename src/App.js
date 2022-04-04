import logo from './logo.svg';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';


function App() {
  return (
    <div>
      <div className="app__header">

      <Header/>
      </div>
      <div className="app__body">
        <div className="app__sidebar">
          <Sidebar/>
        </div>
        <div className="app__content">
          <Content/>
        </div>
        <div className="app__widget">

        </div>
      </div>

    </div>

  );
}

export default App;
