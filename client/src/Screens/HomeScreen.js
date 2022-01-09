import React, { useEffect, useState } from "react";
import { Spinner, Row, Col } from "react-bootstrap";

import Memory from "../Components/Memory.js";
import { fetchMemories } from "../axios/index.js";

const HomeScreen = () => {
  const [memories, setMemories] = useState();

  useEffect(() => {
    const getMemories = async () => {
      const { data } = await fetchMemories();
      console.log(data);
      setMemories(data);
    };
    getMemories();
  }, []);

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
