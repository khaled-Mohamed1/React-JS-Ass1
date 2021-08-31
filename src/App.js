import logo from './logo.svg';
import './App.css';
// import './assignmnet'
import * as UserCommponent from './assignmnet';
import * as UserInfo from './posts';

function App() {
  return (
    <div>
      <UserCommponent.Assignment1 />

      <hr />

      <UserCommponent.Assignment2 />

      <hr />

      <UserCommponent.Assignment3 />

      <hr />

      <UserCommponent.Assignment4 />

      <hr />

      <UserCommponent.Assignment5 />

      <hr />

      <UserInfo.Posts />

    </div>
  );
}

export default App;
