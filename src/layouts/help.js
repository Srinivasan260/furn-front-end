import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/esm/Button';
import './about.css'
import help from '../images/help.png'


function Help() {

  const [Problem, setProblem] = useState('')

  const onHelp = async (e) => {
    const email = JSON.parse(localStorage.getItem('user')).email;
    console.log(email)
    let result = await fetch(`http://localhost:3004/problem/${email}`, {
      method: "post",
      body: JSON.stringify({ Problem, email }),
      headers: {
        "Content-type": "Application/JSON"
      }
    })
    result = await result.json()
    console.log(result)
    if (result) {
      alert("help successfully")

    }

  }
  return (
    <div>
      <br /><br />
      <div className="row-help">
        <div className='help-cont'>

          <Container className='cont-help'>

            <h1 className="help-h3"> <b>HELP ?</b></h1>

            <Container className="help-form">

              <Form >
                <Form.Group as={Col} md="11" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Report a Problem :</Form.Label>
                  <Form.Control as="textarea" rows={3} value={Problem} onChange={(e) => { setProblem(e.target.value) }} />
                </Form.Group>

                <Button type="submit" className="help-btn" onClick={onHelp}> Submit</Button>
              </Form><br></br>
            </Container>
          </Container>

          <h6 class="help-h6" > </h6>
          <br></br>


          <h4 className="help-h4"> If You Encountered any problem .Please report it.Our team can fix it as soon as possible.</h4>


        </div>

        <div className='img-help'>
          <img src={help} className='img-help4' />
        </div>

      </div>

    </div>

  )
}

export default Help