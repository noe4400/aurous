import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./UserList.css";
const UserList = ({ users }) => {
  return (
    <div className="user-list-container">
      <h1 className="text-center"> Lista de usuarios</h1>
      <Card>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/userDetails/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UserList;
