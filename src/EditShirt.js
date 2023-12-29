import React, { Component } from 'react';
import { UINavBar, ShirtUpdateForm } from "./ui-components";
import { useParams } from "react-router-dom";
import "./App.css";

function EditShirt() {
  return <Put />;
}

function Put() {
  const { cid } = useParams();
  console.log("found it!" + {cid})
  return (
    <div>
      <header className="App-header">
        <UINavBar />
        <ShirtUpdateForm idProp={cid} />
      </header>
    </div>
  );
}

export default EditShirt;
