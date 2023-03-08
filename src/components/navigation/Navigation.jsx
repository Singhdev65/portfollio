import React, { useState } from "react"
import { Nav, NavElement } from "./styles"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"

export default function Navigation() {
  return (
    <Nav>
      <NavElement href='#'>
        <AiOutlineHome />
      </NavElement>
      <NavElement href='#about'>
        <AiOutlineUser />
      </NavElement>
      <NavElement href='#project'>
        <BiBook />
      </NavElement>
      <NavElement href='#contact'>
        <BiMessageSquareDetail />
      </NavElement>
    </Nav>
  )
}
