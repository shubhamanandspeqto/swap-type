
import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-widgets/styles.css";
// import DropdownList from "react-widgets/DropdownList";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { main } from "../src/token-swap/js/cli/script-main";

const App = () => {
  const [isConnected, setConnected] = useState(false);
  const [senderSelectToken, setsenderSelectToken] = useState("SOL");
  const [senderSelectValue, setsenderSelectValue] = useState("0");
  const [ReceverValue, setReceverValue] = useState("SOL");
  const [senderReceverValue, setsenderReceverValue] = useState("0");

  var walletId= '';
  main();
  
  const handleClick = () => {

    setConnected(true)

    window.solana.connect().then((res:any) => {
      console.log(res,'wallet------------')
      walletId = res.publicKey.toString()
      window.alert(walletId)
    });

  }
    const handleClick1 = () => {
      // window.solana.disconnect(); 
      setConnected(false);
    }

  function handleChange(event:any) {
    console.log(event.target.value)
    setsenderSelectToken(event.target.value)
  }
  function handleChange2(event:any) {
    console.log(event.target.value)
    setsenderSelectValue(event.target.value)
  }
  function handleChange3(event:any) {
    console.log(event.target.value)
    setReceverValue(event.target.value)
  }
  function handleChange4(event:any) {
    console.log(event.target.value)
    setsenderReceverValue(event.target.value)
  }
  function handleSubmit(e:any) {


console.log(senderSelectToken,senderSelectValue,ReceverValue,senderReceverValue)





    // main();
console.log()
    e.preventDefault();
    console.log('You clicked submit.');
    console.log( e.target.value);

    
  }


  return (
    <div className="App">

      <Button onClick={isConnected ? handleClick1 : handleClick}>{isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}</Button>
      <Form onSubmit={handleSubmit}>
        <h2>Swap</h2>
        <Container className='token-a'>
          <Row>
            <Col>
              <select value={senderSelectToken} onChange={handleChange} >
                <option value="SOL">SOL</option>
                <option value="SRM">SRM</option>
                {/* <option value="USDC">USDC</option> */}
              </select>
            </Col>
            {/* <Col> <DropdownList
              //  onChange={handleChange}
              ref={usertokenaRef}
              defaultValue="SOL"
              data={["SRM", "SOL", "USDC", "USDT"]}
            /></Col> */}
            <Col><Form.Control value={senderSelectValue} onChange={handleChange2} type="text" placeholder="0" /></Col>
          </Row>
        </Container>
        <Container className='token-b'>
          <Row>
            <Col>
              <select value={ReceverValue} onChange={handleChange3}>
                <option value="SOL">SOL</option>
                <option value="SRM">SRM</option>
                {/* <option value="USDC">USDC</option> */}
              </select>
            </Col>
            {/* <Col><DropdownList
              //  onChange={handleChange}
              ref={usertokenbRef}
              defaultValue="SOL"
              data={["SRM", "SOL", "USDC", "USDT"]}
            /></Col> */}
            <Col><Form.Control value={senderReceverValue} onChange={handleChange4} type="text" placeholder="0" /></Col>
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
