import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="has-text-centered">
      <h1 className="is-size-3">User Component</h1>
      <ul data-testid="container-user">
        {users.map((el) => {
          return (
            <li data-testid="user-list" key={el.id}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
