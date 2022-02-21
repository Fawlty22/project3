import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CONTRACTS } from "../../graphql/queries";

const ReturningToday = () => {
  //query for contracts and filter through for the ones coming back today.
  const {loading, data} = useQuery(QUERY_CONTRACTS);
console.log(data)

  return (
    <Card bg="dark" style={{ width: "18rem" }} className="p-2">
      {/* This link will be instead inside a .map() that populates the contracts returning today.  We dont want the whole card to link, just the contract id's.  */}

      <Card.Body className="text-center text-info">
        <Card.Title >Returning Today</Card.Title>
        <ListGroup>
          <ListGroup.Item className="fw-bold" style={{ background: "violet" }}>
            Select A Contract Below
          </ListGroup.Item>
          {/* map here to dynamically create the contracts coming back today */}
          {data?.contracts.map((each, index) => (
            <Link key={each._id} className={`${index == data.contracts.length - 1 ? 'rounded-bottom' : ''}`} style={{ textDecoration: "none" }} to={`/contracts/${each._id}`}>
              <ListGroup.Item className="bg-secondary text-white">{each._id}</ListGroup.Item>
            </Link>
          ))}

          
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ReturningToday;
