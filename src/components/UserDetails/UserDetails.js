import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUsers, getUserDetails } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./UserDetails.css";
const UserDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { userDetails, users, error, isLoading } = useSelector(
    (state) => state
  );

  useEffect(() => {
    if (users.length == 0) {
      dispatch(getUsers());
    }

    dispatch(getUserDetails(params.userId));
  }, [dispatch, users]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="details-container" id="details">
      <h1 className="text-center">Detalles</h1>
      {!isLoading && userDetails.length > 0 && (
        <Card>
          <ul>
            <li className="item">
              <span>Name:</span> {userDetails[0].name}
            </li>
            <li className="item">
              <span>Username:</span> {userDetails[0].username}
            </li>
            <li className="item">
              <span>Email: </span>
              {userDetails[0].email}
            </li>
            <li className="item">
              <span>Street: </span> {userDetails[0].address.street}
            </li>
            <li className="item">
              <span>City: </span>
              {userDetails[0].address.city}
            </li>
          </ul>
        </Card>
      )}
      <div className="back-btn">
        <Link to={`/home`}>
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
          Volver al listado
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
