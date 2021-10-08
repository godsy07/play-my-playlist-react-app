import React, { useState, useEffect, useRef } from "react";
import MainHeaderDiv from "../../components/layouts/MainHeaderDiv/MainHeaderDiv";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { FaCopy } from "react-icons/fa";

import {
  createRoomCode,
  createRandomPassCode,
} from "../../functionalities/createPage.function";
import "./create-room.styles.css";

const CreateRoom = () => {
  const [roomID, setRoomID] = useState("THXQL");
  const [roomName, setRoomName] = useState("");
  const [passCode, setPassCode] = useState("");
  const [noOfPlayers, setNoOfPlayers] = useState(1);
  const [gameRules, setGameRules] = useState("");

  const refPassInput = useRef(null);

  useEffect(() => {
    // Room Code set during mount
    setRoomID(createRoomCode());
  }, []);

  // Functions to copy text for roomID and room passcode to clipboard
  const copyPassCode = () => {
    refPassInput.current.select();
    navigator.clipboard.writeText(refPassInput.current.defaultValue);
  };
  const copyRoomID = () => {
    navigator.clipboard.writeText(roomID);
  };

  return (
    <div className='main-container'>
      <MainHeaderDiv title='Join Room' routeName='joinRoom' />
      <div className='create-room-div'>
        <Container className='pb-1' fluid>
          <Row>
            <Col xs={12} sm={6} md={8} lg={9}>
              <h1>Create Room</h1>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Button size='lg' style={{ width: "100%" }}>
                ROOM ID: {roomID}
                <FaCopy style={{ marginLeft: "10px" }} onClick={copyRoomID} />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid >
          <Row xs={1} md={2}>
            <Col xs={12} md={6}>
              <Row className='py-2'>
                <Form.Label>Room Name:</Form.Label>
                <Col xs={12} className='py-1'>
                  <Form.Control
                    type='text'
                    onChange={(e) => setRoomName(e.target.value)}
                    value={roomName}
                  />
                </Col>
              </Row>
              <Row className='py-2'>
                <Form.Label> Passcode: </Form.Label>
                <Col xs={12} md={8} className='py-1'>
                  <Form.Control
                    ref={refPassInput}
                    type='text'
                    value={passCode}
                    onChange={(e) => setPassCode(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={4} className='py-1'>
                  <OverlayTrigger
                    placement='top'
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>Click here to copy Passcode</Tooltip>}
                  >
                    <Button
                      onClick={copyPassCode}
                      style={{ fontSize: "20px", width: "100%" }}
                    >
                      <FaCopy />
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col>
                  <Button
                    onClick={() => setPassCode(createRandomPassCode())}
                    style={{ width: "100%" }}
                  >
                    GENERATE PASSCODE
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row className='py-2'>
                <Form.Label>Number of Participants:</Form.Label>
                <Col xs={12} className='py-1'>
                  <Form.Select
                    value={noOfPlayers}
                    onChange={(e) => setNoOfPlayers(e.target.value)}
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className='py-2'>
                <Form.Label> Game Rules: </Form.Label>
                <Col xs={12} className='py-1'>
                  <Form.Control
                    as='textarea'
                    value={gameRules}
                    onChange={(e) => setGameRules(e.target.value)}
                    style={{ height: "100px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='d-flex justify-content-center my-1 py-4'>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Button size='lg' className='mt-5' style={{ width: "100%" }}>
                CREATE ROOM
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CreateRoom;