import React, { useEffect, useState } from "react";
import { Spinner, Row, Col } from "react-bootstrap";

import { fetchMemories } from "../actions/memoryActions.js";
import { useDispatch, useSelector } from "react-redux";

import Memory from "../Components/Memory.js";
import { fetchMemory } from "../axios/index.js";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const memories = useSelector((state) => state.memories);

  useEffect(() => {
    !memories[0] ? dispatch(fetchMemories()) : console.log("başarısız.");
  }, [dispatch]);

  return (
    <>
      <h1>All Memos</h1>
      {!memories ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          {memories.map((memory) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="m-auto"
              key={memory._id}
            >
              <Memory memory={memory} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
