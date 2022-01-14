
import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { main } from "../src/token-swap/js/cli/script-main";

const App = () => {
  const [isConnected, setConnected] = useState(false);
  // const usertokenaRef = React.useRef();
  // const usertokenavalueRef = React.useRef();
  // const usertokenbRef = React.useRef();
  // const usertokenbvalueRef = React.useRef();
  var walletId= '';
  // const [formData, updateFormData] = React.useState(initialFormData);

  // const initialFormData = Object.freeze({
  //   tokena: "",
  //   tokenavalue: "",
  //   tokenb:"",
  //   tokenbvalue:""
  // });

  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };


  const handleClick = () => {

    setConnected(true)

    window.solana.connect().then((res:any) => {
      console.log(res,'wallet------------')
      walletId = res.publicKey.toString()
      window.alert(walletId)
      // console.log("wallet-address",id)
    });



  }

    const handleClick1 = () => {
      // window.solana.disconnect(); 
      setConnected(false);
    }
  function handleSubmit(e:any) {
    // main(walletId);
    e.preventDefault();
    // console.log('You clicked submit.');
    // console.log(usertokenaRef.current.value, usertokenavalueRef.current.value, usertokenbRef.current.value, usertokenbvalueRef.current.value);
  }
  return (
    <div className="App">

      <Button onClick={isConnected ? handleClick1 : handleClick}>{isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}</Button>
      <Form onSubmit={handleSubmit}>
        <h2>Swap</h2>
        <Container className='token-a'>
          <Row>
            <Col>
              <select >
                <option value="SOL">SOL</option>
                <option value="SRM">SRM</option>
                <option value="USDC">USDC</option>
              </select>
            </Col>
            {/* <Col> <DropdownList
              //  onChange={handleChange}
              ref={usertokenaRef}
              defaultValue="SOL"
              data={["SRM", "SOL", "USDC", "USDT"]}
            /></Col> */}
            <Col><Form.Control  type="text" placeholder="0" /></Col>
          </Row>
        </Container>
        <Container className='token-b'>
          <Row>
            <Col>
              <select >
                <option value="SOL">SOL</option>
                <option value="SRM">SRM</option>
                <option value="USDC">USDC</option>
              </select>
            </Col>
            {/* <Col><DropdownList
              //  onChange={handleChange}
              ref={usertokenbRef}
              defaultValue="SOL"
              data={["SRM", "SOL", "USDC", "USDT"]}
            /></Col> */}
            <Col><Form.Control  type="text" placeholder="0" /></Col>
          </Row>
        </Container>
        <Button variant="primary" type="submit">
          Swap
        </Button>
      </Form>
    </div>
  );
}


export default App;
