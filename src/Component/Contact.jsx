import styled from '@emotion/styled'
import React from 'react'
import ContactComp from './Chakracomp/Contactcomp'

function Contact() {
  return (
    <DIV id="contact">
    <ContactComp />
    </DIV>
    )
}

const DIV=styled.div`
    border:1px solid black;
    width:80%;
    margin: 100px auto 0;
`

  


export default Contact