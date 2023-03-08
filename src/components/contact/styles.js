import styled from "styled-components"
import { mobile, tablet } from "../responsive"

export const Container = styled.div`
  width: var(--container-width-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  ${tablet({ gridTemplateColumns: "1fr" })}
  ${mobile({ gap: "1rem" })}
`

export const CardContainer = styled.div`
  background: var(--color-bg-variant);
  padding: 3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  ${tablet({ width: "var(--container-width-md)" })}
  ${tablet({ width: "var(--container-width-sm)" })}
`

export const MapContainer = styled.div`
  background: transparent;
  padding: 3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  ${tablet({ width: "var(--container-width-md)" })}
  ${tablet({ display: "none" })}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`
