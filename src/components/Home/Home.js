import React, { useEffect, useState } from "react";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import UserList from "../UsersList/UserList";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions";
import Loading from "../Loading/Loading";

const Home = () => {
  const { isLoading, filteredUsers, users, error } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container" id="home">
          <SearchBar />
          <UserList users={filteredUsers} />
        </div>
      )}
    </div>
  );
};

export default Home;
