import React from "react";
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
// import Pizza from './Pizza'

// STYLING
const StyledDiv = styled.div`
color: black;
background-color: #8aa3aa;
margin-top: 10%;
margin-left: 35%;
margin-right: 35%;
opacity: 85%;
text-align: center;
border-radius: 20px;
`
const StyledBtn = styled.button`
padding: .5rem;
margin-bottom: 1rem;
font-weight: bold;
font-size: 2rem;
background-color: #FF6347;
border-radius: 15px;
&:hover {
      background-color: #B21B00;
      color: #bdb76b;
      transition: all 0.35s ease-in-out;
      transform: scale(1.1);
    }
    transition: all 0.25s ease-in-out;
  }
`

const App = () => {
  return (
    <>
    <StyledDiv>
      <h1>Lambdo's Pizza</h1>
      <h2>Come Eat It!</h2>
      {/* <StyledBtn id='order-pizza'>Pizza?</StyledBtn> */}
      <Link to='/pizza'>
        <StyledBtn className='pizza-button' id="order-pizza">
          Pizza?
        </StyledBtn>
      </Link>
      <p>*eat at your own risk, we are a coding bootcamp, not a professional pizza kitchen</p>
        {/* <Switch>

        // <Route path='/pizza' />
        <Route exact path='/' />

        </Switch> */}
    
    
    </StyledDiv>
    </>
  );
};
export default App;
