import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";

function AppointmentInfo({ appointment, onDeleteAppointment }) {
  return (
    <>
      <ListGroup.Item>
        <p>
          
          <small>AptDate: </small> {appointment.aptDate}
        </p>
        <p>
          
          <strong>FirstName: </strong> {appointment.firstName}
        </p>
        <p>
          
          <strong> secondName: </strong> {appointment.secondName}
        </p>
        <p>
          
          <strong> Comment: </strong> {appointment.aptNote}
        </p>
        <Button
          onClick={() => onDeleteAppointment(appointment.id)}
          size="sm"
          variant="danger"
        >
          <BsTrash /> Delete
        </Button>
      </ListGroup.Item>
    </>
  );
}

export default AppointmentInfo;
