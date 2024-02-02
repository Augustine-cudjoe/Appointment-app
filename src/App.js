import "./App.css";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import Search from "./component/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Addapointment from "./component/Addapointment";

import AppointmentInfo from "./component/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [appointmentList, setappointmentList] = useState([]);
  const [query, setQuery] = useState(" ");
  const [sortBy, setSortBy] = useState("firstName");
  const [orderBy, setOrderBy] = useState("asc");

  const filterAppointment = appointmentList
    .filter((item) => {
      return (
        item.firstName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.secondName.toLowerCase().includes(query.toLocaleLowerCase()) ||
        item.aptNote.toLowerCase().includes(query.toLocaleLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setappointmentList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onDeleteAppointment = (id) => {
    setappointmentList(
      appointmentList.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <h1 className="fw-light text-center mt-3 mb-3">
            Appointments <BsCalendar2CheckFill />
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3 ">
        <Addapointment
          onSendAppointment={(myappointment) =>
            setappointmentList([...appointmentList, myappointment])
          }
          lastId={appointmentList.reduce(
            (max, item) => (Number(item.id) > max ? Number(item.id) : max),
            0
          )}
        />
      </Row>
      <Row className="justify-content-center ">
        <Col md="4">
          <Search
            query={query}
            onQueryChange={(myquery) => setQuery(myquery)}
            orderBy={orderBy}
            onOrderByChange={(mysort) => setOrderBy(mysort)}
            sortBy={sortBy}
            onSortByChange={(mysort) => setSortBy(mysort)}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="8">
          <Card className="mb-3">
            <Card.Header className="text-start">Appointment</Card.Header>
            <ListGroup variant="flush" className="text-start">
              {filterAppointment.map((appointment) => (
                <AppointmentInfo
                  key={appointment.id}
                  appointment={appointment}
                  onDeleteAppointment={onDeleteAppointment}
                />
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
