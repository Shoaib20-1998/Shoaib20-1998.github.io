import styled from '@emotion/styled'
import React from 'react'
import ContactComp from './Chakracomp/Contactcomp'
import Headingofsection from './Chakracomp/Headingofsection'
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon'

function Contact() {
  return (
    <DIV id="contact">
      <Headingofsection heading={"Contact"} />
      <ContactComp />
      <FontAwsomeCodeIcon />

    </DIV>
  )
}

const DIV = styled.div`
    width:80%;
    text-align:center;
    margin: 100px auto 0;
`




export default Contact