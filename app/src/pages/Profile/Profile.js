import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {

  constructor() {
    super();
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    const api_url = 'https://randomuser.me/api/?results=200';
    fetch(api_url)
    .then(results => {
        return results.json();
      }).then(data => {
        let pictures = data.results.map((pic) => {
          if(pic.gender === 'female'){
            return(
              <div key={pic.results}>
                <img src={pic.picture.large} />
              </div>
            )
          }
        })
        this.setState({results: pictures});
        console.log("state", this.state.pictures);
      })
  }

  render() {
    return (
      <div>
          {this.state.results}
      </div>
    );
  }

}

export default Profile;
