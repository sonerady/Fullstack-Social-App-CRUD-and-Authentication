import React from "react";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import { LinkContainer } from "react-router-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import { deleteMemory } from "../actions/memoryActions.js";

import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Memory = ({ memory }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
          <LinkContainer
            to={`/update/${memory._id}`}
            style={{ cursor: "pointer" }}
          >
            <Button variant="secondary" onClick={handleClickOpen}>
              Edit
            </Button>
          </LinkContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div>
              <Button variant="secondary" onClick={handleClickOpen}>
                Delete
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"WARNING"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Once you delete this memory, you have no chance to bring it
                    back. Are you sure you want to delete?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      dispatch(deleteMemory(memory._id));
                    }}
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Memory;
