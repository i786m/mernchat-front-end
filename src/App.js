import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
