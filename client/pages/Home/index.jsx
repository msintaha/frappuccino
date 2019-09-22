import React from 'react';
import UserService from '../../services/UserService';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    UserService.list().then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="home">
        <h1>Frappuccino</h1>
        <h5>A Node and React boilerplate</h5>
      </div>
    );
  }
}

export default Home;
