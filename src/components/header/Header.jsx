import React from "react"
import {
  Container,
  HeaderWrapper,
  CTA,
  HeaderSocial,
  ME,
  Scroll
} from "./styles"
import MyImg from "../../assets/headerImg.jpeg"
import { BsLinkedin } from "react-icons/bs"
import { AiOutlineGithub } from "react-icons/ai"

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <h5>Hello I'm</h5>
        <h1>Prince Kumar</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA>
          <a href='#' className='btn'>
            Download CV
          </a>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </CTA>
        <HeaderSocial>
          <a href='http://linkedin.com' target='_blank'>
            <BsLinkedin />
          </a>
          <a href='http://github.com' target='_blank'>
            <AiOutlineGithub />
          </a>
        </HeaderSocial>
        <ME>
          <img src={MyImg} alt='my picture' />
        </ME>
        <Scroll href='#contact'>Scroll Down</Scroll>
      </Container>
    </HeaderWrapper>
  )
}
