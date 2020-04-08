import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/signup" render={(props) => <SignUp {...props} />} />
        <Route path="/verify" render={(props) => <Verify {...props} />} />
        <Route path="/welcome" render={(props) => <Welcome {...props} />} />
      </Switch>
    </Router>
  );
};

const Home = (props) => {
  const goRegister = () => {
    props.history.push('/signup');
  };
  return (
    <form name="sign-up" id="sign-up-form" className="entry-form">
      <label htmlFor="email">Email</label>
      <input />
      <label htmlFor="password">Password</label>
      <input />
      <button onClick={goRegister}>Register</button>
      <button>Login</button>
    </form>
  );
};

const SignUp = (props) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState(null);

  const submitRegister = () => {
    const data = {
      id: id,
      email: email,
      password: password,
    };

    // fetch(url, {
    //   body: JSON.stringify(data),
    //   method: POST,
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setRes(result);
    //     },
    //     (error) => {
    //       setRes(error);
    //     }
    //   );
  };

  return (
    <form name="sign-up" id="sign-up-form" className="entry-form">
      <div>
        <label htmlFor="id">ID</label>
        <input value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={submitRegister}>Send</button>
    </form>
  );
};

const Verify = (props) => {
  const [code, setCode] = useState('');

  const submitCode = () => {
    props.history.push('/welcome');
  };

  return (
    <form>
      <div>
        <label htmlFor="code">Your Code</label>
        <input value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <button onClick={submitCode}>Submit</button>
    </form>
  );
};

const Welcome = (props) => {
  const goHome = () => {
    props.history.push('/');
  };
  return (
    <>
      <div>Welcome</div>
      <button onClick={goHome}>Go</button>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
