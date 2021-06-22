import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
//import TestCounter from "./components/TestCounter";
//import SearchComponents from "./components/SearchComponents.";
import SearchTable from "./components/SearchTable";
//import Search from "./components/Search";
//import ModalItem from "./components/ModalItem";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((result) => setCountries(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
       
    <Header />
    <SearchTable countries={countries} setCountries={setCountries} />
    <Footer />
    </div>
  );
}

export default App;
