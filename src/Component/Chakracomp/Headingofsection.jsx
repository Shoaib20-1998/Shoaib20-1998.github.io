import styled from '@emotion/styled'
import React from 'react'

function Headingofsection({heading}) {
  return (
    <DIV>
      <h1>{heading}</h1>
    </DIV>
  )
}




const DIV = styled.div`       
    color: teal;
    border: 1px teal;
    border-bottom-style: dotted;
    border-left-style: dotted;
    margin:10px 5px 25px;
    padding: 10px 30px;
    font-family:sans-serif;
    font-size:60px;
  @media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
     h1{
        font-size:40px;
     }
  }  
    
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/  
      
      h1{
        font-size:35px;
     }
    
  }

  @media only screen and (min-width: 50px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
      font-size:30px;    
  }

`




export default Headingofsection