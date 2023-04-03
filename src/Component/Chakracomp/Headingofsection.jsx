import styled from '@emotion/styled'
import React from 'react'

function Headingofsection({heading}) {
  return (
    <Button className='heading'>{heading}</Button>
  )
}




const Button = styled.button`
    
    
      font-size:70px;
      color: teal;
      border: 1px teal;
      border-bottom-style: dotted;
      border-left-style: dotted;
      margin:10px 5px;
      padding: 10px 30px;
      font-family:sans-serif;
    @media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
    .heading{
      font-size:40px;
    }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
    .heading{
      font-size:30px;
    }
  }

  @media only screen and (min-width: 325px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
  .heading{
      font-size:20px;
      
    }
  }
}
`




export default Headingofsection