import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import UserList from "../UsersList/UserList";
import axios from "axios";
const Home = () => {
  const [usersInfo, setUsersInfo] = useState({
    users: null,
    filteredUsers: null,
    erros: null,
    isLoading: true,
  });
  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsersInfo((prevState) => {
        return {
          ...prevState,
          users: data,

          isLoading: false,
        };
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {usersInfo.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="container">
          <SearchBar />
          <UserList users={usersInfo.users} />
        </div>
      )}
    </div>
  );
};

export default Home;
