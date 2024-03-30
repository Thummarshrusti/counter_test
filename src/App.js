import logo from './logo.svg';
import './App.css';
import Counter from './container/Counter/Counter';
import { Provider } from 'react-redux';
import { configstore } from './component/redux/store';

function App() {
  const store = configstore();
  return (
   <div>
  <Provider store={store}>
    <Counter/>
    </Provider>
   </div>
  );
}

export default App;
