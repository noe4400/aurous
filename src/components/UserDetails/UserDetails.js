import React from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "../Card/Card";
import { useHistory } from "react-router";
const UserDetails = () => {
  const history = useHistory();
  return (
    <div className="text-center">
      <h1>Detalles</h1>
      <Card>Name: Username: Email: Phone: Website: Street: City: Company:</Card>
      <NavLink to={`/home`}>Regresar</NavLink>
    </div>
  );
};

export default UserDetails;
