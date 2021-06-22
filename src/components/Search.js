import React, { useState, useEffect } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import axios from "axios";
import "./Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';


//flag , alpha2Code, alpha3Code, nativeName, altSpellings, callingCodes
const columns = [{
    dataField: "_id",
    hidden: true
  },
  {
    dataField: "flag",
    text: "Flag",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true
  },
  {
    dataField: " alpha2Code",
    text: " Alpha2Code",
    sort: true
  },
 {
    dataField: "alpha3Code",
    text: "Alpha3Code",
    sort: true
  },
  {
    dataField: " nativeName",
    text: " Nativename",
    sort: true
  },
  {
    dataField: "altSpellings",
    text: "AltSpellings",
    sort: true
  },
  {
    dataField: " callingCodes",
    text: " CallingCodes",
    sort: true
  }
];
const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const pagination = paginationFactory({
  page: 2,
  sizePerPage: 25,
  lastPageText: '>>',
  firstPageText: '<<',
  nextPageText: '>',
  prePageText: '<',
  showTotal: true,
  alwaysShowAllBtns: true,
  onPageChange: function (page, sizePerPage) {
    console.log('page', page);
    console.log('sizePerPage', sizePerPage);
  },
  onSizePerPageChange: function (page, sizePerPage) {
    console.log('page', page);
    console.log('sizePerPage', sizePerPage);
  }
});



const Search = () => {
  
  const [countries, setCountries] = useState([]);
  //const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
 // const [filterData, setFilterData] = useState(allData);

 
  // https://jsonplaceholder.typicode.com/albums/1/photos
  // https://restcountries.eu/rest/v2/all
  useEffect(() => {
  setLoading(false)
    axios
    .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
        setLoading(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
     
  }, []);

 

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

 

 /* const seacrhHandler = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
    return data.name.search(value) !== -1;
    });
    setFilterData(result)
  
  };*/


  
  



  const CountryDetail = (props) => {
    const { name, flag , alpha2Code, alpha3Code, nativeName, altSpellings, callingCodes } = props;
    

  
    return (
      <>
      <div>
        <p>
          <img src={flag} alt={name} style={{ width: "20px", height: "20px" }} />
        </p>
        <p>{name}</p>
        <p>{alpha2Code}</p>
        <p>{alpha3Code}</p>
        <p>{nativeName}</p>
        <p>{altSpellings}</p>
        <p>{callingCodes}</p>
        </div>
      </>
    );
  };


  /*const stylesOne = {
    display: "inline",
    width: "30%",
    height: 50,
    float: "left",
    padding: 5,
    border: "0.5px solid black",
    marginBottom: 10,
    marginRight: 10,
  };*/

  return (
    <div className="container">
      <div style={{ margin: "0 auto", marginTop: "10%" }}>
        <label>Search:</label>
        <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
     
      </div>
      <div className="item"> 
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
      ))}
      </div>
      
      <BootstrapTable keyField='_id' data={countries} columns={columns} defaultSorted={defaultSorted}  pagination={pagination} />
      {/*<div>
        {filterData.map((value, index) => { 
          return(
         <div>
         <div key={value.id}style={stylesOne}>
         {value.name}
         </div>
         </div>
           
          )
        })}*/}
      </div>
 
  );
};

export default Search;
