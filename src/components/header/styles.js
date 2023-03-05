import styled from "styled-components"
import { mobile, tablet } from "../responsive"

export const HeaderWrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
  ${tablet({ height: "68vh" })}
  ${mobile({ height: "100vh" })}
`

export const Container = styled.div`
  width: var(--container-width-lg);
  margin: 0 auto;
  text-align: center;
  height: 100%;
  position: relative;
`

export const CTA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`

export const HeaderSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
  ${mobile({ display: "none" })}
`

export const ME = styled.div`
  background: var(--color-primary);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem, 1.5rem, 1.5rem, 1.5rem;
`

export const Scroll = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  ${mobile({ display: "none" })}
`
