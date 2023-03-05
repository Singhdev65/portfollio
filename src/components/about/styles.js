import styled from "styled-components"
import { FaAward } from "react-icons/fa"
import { mobile, tablet } from "../responsive"

export const AboutMeContainer = styled.div`
  width: var(--container-width-lg);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  ${tablet({ gridTemplateColumns: "1fr", gap: 0 })}
`

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  ${tablet({ width: "50%", margin: "2rem auto 4rem" })}
  ${mobile({ width: "65%", margin: "0 auto 3rem" })}
`

export const AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
`

export const AboutMeContent = styled.div`
  ${mobile({ textAlign: "center" })}
`

export const AboutMeCard = styled.article`
  margin:0 auto;
  width:50%;
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  padding: 2rem;
  text-align: center;
  transition:var(--transition);
  &:hover {
    background: transparent;
    border-color:var(--color-primary-variant)
    cursor:default;
  };
`

export const CardIcon = styled(FaAward)`
  color: var(--color-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

export const CardHeading = styled.h5`
  font-size: 0.95rem;
  font-weight: 500;
`

export const CardDescription = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`

export const AboutContentParagraph = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
  ${tablet({ margin: "1rem 0 1.5rem" })}
  ${mobile({ margin: "1.5rem 0" })}
`
