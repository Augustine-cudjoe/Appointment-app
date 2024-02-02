import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";
import { BsCheck2 } from "react-icons/bs";

const Drow = ({sortBy, onSortByChange, orderBy, onOrderByChange}) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
         sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={()=>onSortByChange("firstName")}>Fist Name {(sortBy==="firstName") && <BsCheck2  className="float-end"/>}</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={()=>onSortByChange("secondName")}>Second Name {(sortBy==="secondName") && <BsCheck2 className="float-end"/>}</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={()=>onSortByChange("aptNote")}>AptNote{(sortBy==="aptNote") && <BsCheck2 className="float-end"/>}</Dropdown.Item>
          <Dropdown.Divider />
            <Dropdown.Item  href="#/action-4" onClick={()=>onOrderByChange("asc")}> ASC {(orderBy==="asc") && <BsCheck2 className="float-end"/>} </Dropdown.Item>
            <Dropdown.Item  href="#/action-5" onClick={()=>onOrderByChange("desc")}>DESC {(orderBy==="desc") && <BsCheck2 className="float-end"/>} </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

function Search({query,onQueryChange,sortBy, onSortByChange, orderBy, onOrderByChange}) {
  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control size="sm"  
            value={query} onChange={(e)=>onQueryChange(e.target.value)}/>

            <Drow  
            sortBy={sortBy}
            onSortByChange={mysort=>onSortByChange(mysort)}
            orderBy={orderBy} 
            onOrderByChange={myorder=>onOrderByChange(myorder)}/>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
