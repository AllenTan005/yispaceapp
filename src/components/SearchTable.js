import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Modal, Button } from "react-bootstrap";


const SearchTable = ({ countries, setCountries }) => {
 
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function imgFormatter(cell, row) {
    return <img src={cell} alt="" style={{ width: "50px", height: "50px" }} />;
  }

  

  const columns = [
    {
      dataField: "alpha2code",
      hidden: true,
    },
    {
      dataField: "flag",
      text: "Flag",
      sort: true,
      formatter: imgFormatter,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
      style: { cursor: 'pointer' }
    },
    {
      dataField: "alpha2Code",
      text: " Alpha2Code",
      sort: true,
    },
    {
      dataField: "alpha3Code",
      text: "Alpha3Code",
      sort: true,
    },
    {
      dataField: "nativeName",
      text: " Nativename",
      sort: true,
    },
    {
      dataField: "altSpellings",
      text: "AltSpellings",
      sort: true,
    },
    {
      dataField: "callingCodes",
      text: "CallingCodes",
      sort: true,
    },
    //{
    //  dataField: "translations",
     // text: "More info",
     // sort: true,
     // formatter: ModalFormatter,
   // },
  ];

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>More Info</h1>
          <ol style={{listStyle:"circle", padding: "20"}}>
            <li>Capital:{modalInfo.capital}</li>
            <li>Region:{modalInfo.region}</li>
            <li>population:{modalInfo.population}</li>
            <li>
              translations:{modalInfo.translations.br},
              {modalInfo.translations.ja}
            </li>
            <li>subRegion:{modalInfo.subregion}</li>
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 25,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField="alpha2Code"
        data={countries}
        columns={columns}
        pagination={pagination}
        rowEvents={rowEvents}
        filter={filterFactory()}
      />

      {show ? <ModalContent /> : null}
    </div>
  );
};

export default SearchTable;
