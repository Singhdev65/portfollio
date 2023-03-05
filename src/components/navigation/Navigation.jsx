import React, { useState } from "react"
import { Nav, NavElement } from "./styles"

export default function Navigation() {
  return (
    <Nav>
      <NavElement href='#'>Home</NavElement>
      <NavElement href='#about'>About</NavElement>
      <NavElement href='#project'>Project</NavElement>
      <NavElement href='#contact'>Contact</NavElement>
    </Nav>
  )
}
