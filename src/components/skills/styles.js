import styled from "styled-components"
import { BsPatchCheckFill } from "react-icons/bs"
import { mobile, tablet } from "../responsive"

export const SkillContainer = styled.div`
  width: var(--container-width-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  ${tablet({ gridTemplateColumns: "1fr" })}
  ${mobile({ gap: "1rem" })}
`

export const SkillCardContainer = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  ${tablet({ width: "80%", padding: "2rem", margin: "0 auto" })}
  ${mobile({ width: "100%", padding: "2rem 1rem" })}
`

export const SkillTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`

export const SkillContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  ${tablet({ padding: "1rem" })}
`

export const SkillDetails = styled.div`
  display: flex;
  gap: 1rem;
`

export const SkillIcon = styled(BsPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`
