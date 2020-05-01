import React from 'react';
import FlavorService from '../../services/FlavorService';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flavors: []
    };
  }

  componentDidMount() {
    FlavorService.list().then(flavors => this.setState({ flavors }));
  }

  render() {
    const { flavors } = this.state;
    return (
      <div className="container">
        <h1>Frappuccino</h1>
        <h4>A React + Node boilerplate with CI/CD Pipeline</h4>
        <br />
        <h5>List of flavors fetched from database</h5>
        <ul className="list-group">
          {flavors.map(flavor => <li key={flavor._id} className="list-group-item">{flavor.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default Home;
