import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import FlListBox from "../FlListBox/FlListBox";
import "./CfList.css";

export default () => {
  const [crowdFund, setCrowdFund] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState({ message: "", status: "" });

  useEffect(() => {
    axios
      .get("/api/freelancer/")
      .then((resp) => {
        setIsLoading(false);

        if (resp.data.status === "success") {
          setCrowdFund(resp.data.message);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const ListActual = () => {
    return crowdFund.map((value, index) => {
        return (
          <FlListBox
            key={index}
            setMessages={setMessages}
            freelance={value}
            link="/freelancer/"
          />
        )
    });
  };


  const ListContainer = () => {
    return (
      <>
        <h1 className="h1first">Check available Freelancers!</h1>
        <div className="row">
          <ListActual />
        </div>
      </>
    );
  };

  return (
    <Container>
      {isLoading ? (
        "Loading...."
      ) : (
        <>
          <ListContainer />
        </>
      )}
    </Container>
  );
};
