import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import UserList from "../UsersList/UserList";
import axios from "axios";
const Home = () => {
  const [usersInfo, setUsersInfo] = useState({
    users: null,
    filteredUsers: null,
    error: null,
    isLoading: true,
    searchValue: "",
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
          filteredUsers: data,
          isLoading: false,
        };
      });
    } catch (err) {
      console.log(err);
      setUsersInfo((prevState) => {
        return {
          ...prevState,
          error: err,
          isLoading: false,
        };
      });
    }
  }, []);

  const searchHandler = (e) => {
    setUsersInfo((prevState) => {
      return {
        ...prevState,
        searchValue: e.target.value,
        filteredUsers: prevState.users.filter((user) =>
          user.name.toLowerCase().includes(e.target.value.toLowerCase())
        ),
      };
    });
  };

  return (
    <div>
      {usersInfo.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="container">
          <SearchBar
            searchValue={usersInfo.searchValue}
            searchHandler={searchHandler}
          />
          <UserList users={usersInfo.filteredUsers} />
        </div>
      )}
    </div>
  );
};

export default Home;
