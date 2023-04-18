import styled from '@emotion/styled'
import React,{useRef} from 'react'
import Headingofsection from './Chakracomp/Headingofsection'
import SkillSection from './Chakracomp/SkillSection'
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon'

function Skills() {
  return (
    <DIV id="skills" >
      
      
      <Headingofsection heading={"Tech Stack and Dev Tools"} />
      <SkillSection />
      <FontAwsomeCodeIcon />
    </DIV>
  )
}
export default Skills

const DIV = styled.div`
    width:80%;
    margin: 5% auto 0;
    text-align:center;
    .skillsmaindiv{
      display:flex;
      /* grid-template-Columns:repeat(5,1fr); */
      justify-content:space-evenly;
    }
    img{
      width:30%
    }
`