import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  sortNameAscendEmployee = () => {

    const lastNameUp = this.state.friends.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
    });

    this.setState({ friends: lastNameUp });
  };

  occupationFilter = (occupation) => {
    console.log(occupation)
    const financeFilter = this.state.friends.filter(friend => (friend.occupation === occupation))
    console.log(financeFilter)
    this.setState({ friends:financeFilter })
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employees List
          <button onClick={this.sortNameAscendEmployee}>Sort Ascending Last Name</button>
          {/* insert dropdown button - on change of that dropdown, need to insert function */}
          <button onClick={() => this.occupationFilter("Finance")}>Filter by Finance</button>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            firstName={friend.firstName}
            lastName={friend.lastName}
            image={friend.image}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
