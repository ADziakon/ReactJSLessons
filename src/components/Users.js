import React from "react";
class Users extends React.Component {
  
  users = [
    {
        id: 1,
        firstname: "Bob",
        lastname: "Marley",
        bio: "Lorem ipsum",
        age: 40,
        isHappy: true
    },
    {
        id: 2,
        firstname: "John",
        lastname: "Doe",
        bio: "Lorem ipsum",
        age: 22,
        isHappy: false
    }
  ]
  render() {
    return (
      <header className="header">
        {this.props.title}
      </header>
    )
  }

}

export default Users