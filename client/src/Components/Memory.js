import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import { deleteMemory } from "../axios/index.js";

const Memory = ({ memory }) => {
  return (
    <Card className="rounded" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title>{memory.title}</Card.Title>
        <Card.Text>{memory.content}</Card.Text>
        <Card.Title>{memory.creator}</Card.Title>
        <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
      </Card.Body>
      <Card.Footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <LinkContainer to="/create" style={{ cursor: "pointer" }}>
          <BiEdit size={20} color="white" />
        </LinkContainer>
        <MdDeleteOutline
          size={23}
          color="red"
          style={{ cursor: "pointer" }}
          onClick={() => deleteMemory(memory._id)}
        />
      </Card.Footer>
    </Card>
  );
};

export default Memory;
