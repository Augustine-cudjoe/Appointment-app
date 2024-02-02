import React from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Addapointment = ({onSendAppointment, lastId}) => {
  const clearData={
    firstName:" ",
    secondName:" ",
    aptDate:"",
    aptTime:"",
    aptNote:" "
  }
  const [toggle, setToggle] = useState(false);
  const [ formData, setFormData]=useState(clearData)

  function appointmentPublish(){

    const appointmentDetail={
      id:lastId +1,
      firstName:formData.firstName,
      secondName:formData.secondName,
      aptDate: formData.aptDate + ' ' + formData.aptTime,
      aptNote:formData.aptNote
    }
    onSendAppointment(appointmentDetail);
    setFormData(clearData)
    setToggle(!toggle)

  }

  return (
    <div>
      <Col md="8" className=" mx-auto">
        <Card>
          <Card.Header className="text-start">
            Add Appointments
            <Button
              className="small float-end"
              onClick={() => setToggle(!toggle)}
            >
              +
            </Button>
          </Card.Header>
          <Card.Body>
            {toggle && (
              <Form>
                <Row>
                  <Col>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label className=" float-start">
                        FirstName
                      </Form.Label>
                      <Form.Control type="text" placeholder="first name"  id="firstName"
                      onChange={(e)=>setFormData({...formData,firstName:e.target.value})}/>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label className=" float-start">
                        Second Name
                      </Form.Label>
                      <Form.Control type="text" placeholder="second name" id="secondName"
                      onChange={(e)=>setFormData({...formData,secondName:e.target.value})}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Col>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label className=" float-start">
                      Appointment Date
                    </Form.Label>
                    <Form.Control type="date" id="aptDate" 
                    onChange={(e)=>setFormData({...formData,aptDate:e.target.value})}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label className="float-start">
                      Appointment Time
                    </Form.Label>
                    <Form.Control type="time"  id="aptTime"
                    onChange={(e)=>setFormData({...formData,aptTime:e.target.value})}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label className=" float-start">comment</Form.Label>
                    <Form.Control as="textarea"  id="aptNote"
                    onChange={(e)=>setFormData({...formData,aptNote:e.target.value})}/>
                  </Form.Group>
                </Col>
                <Button variant="primary" onClick={appointmentPublish}>Submit</Button>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Addapointment;
