import styled from '@emotion/styled'
import React from 'react'
import Headingofsection from './Chakracomp/Headingofsection'
import ProjectCart from './Chakracomp/ProjectCart'
import bestylish from '../images/bestylish.png'
import Carousel from './Chakracomp/Crousel'
import dark from '../images/dark.png'
function Projects() {
  return (
    <DIV id="projects" >

      <Headingofsection heading={"Projects"} />
      <div className='projectcard'>
        <div data-aos="fade-up-right">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-right">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        {/* <Carousel /> */}
      </div>
    </DIV>
  )
}

const DIV = styled.div`
    text-align:center;
    width:80%;
    margin: 5% auto 0;
    font-family: sans-serif;

    .projectcard{

      display: grid;
      grid-template-columns: repeat(2,1fr);

    }

`

export default Projects