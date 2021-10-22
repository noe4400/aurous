import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUsers, getUserDetails } from "../../actions";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
const UserDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { userDetails, users, error, isLoading } = useSelector(
    (state) => state
  );
  console.log(userDetails);
  useEffect(() => {
    if (users.length == 0) {
      dispatch(getUsers());
    }
    dispatch(getUserDetails(params.userId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserDetails(params.userId));
  }, [dispatch, users]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="text-center">
      <h1>Detalles</h1>
      {!isLoading && userDetails.length > 0 && (
        <Card>
          Name: {userDetails[0].name} Username: {userDetails[0].username} Email:
          Phone: Website: Street: City: Company:
        </Card>
      )}
      <Link to={`/home`}>Regresar</Link>
    </div>
  );
};

export default UserDetails;
