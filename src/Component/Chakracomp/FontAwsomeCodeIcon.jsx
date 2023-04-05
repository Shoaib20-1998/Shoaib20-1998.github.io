import styled from '@emotion/styled'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FontAwsomeCodeIcon() {
    return (
        <ICON className='codeicon'>
            <FontAwesomeIcon className='iconstyle' icon={faCode} flip size="lg" />
        </ICON>
    )
}

const ICON=styled.div`

  /* border:1px solid black; */
  margin:20px auto 20px;
   width:130px;
  .iconstyle{
    color: #008080;
    font-Size: 100px;
  }
   @media only screen and (min-width: 601px) and (max-width: 1200px){
   width:100px;
    .iconstyle{
    color: #008080;
    font-Size: 80px;
  }
   }

   @media only screen and (min-width:426px) and (max-width: 600px){
    width:60px;
    .iconstyle{
    color: #008080;
    font-Size: 45px;
  }
   }

   @media only screen and (min-width: 50px) and (max-width: 425px){

    width:40px;
    .iconstyle{
    color: #008080;
    font-Size: 30px;
  }
   }
`

export default FontAwsomeCodeIcon