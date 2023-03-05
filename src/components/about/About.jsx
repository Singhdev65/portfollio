import { FaAward } from "react-icons/fa"
import {
  AboutContentParagraph,
  AboutMe,
  AboutMeCard,
  AboutMeContainer,
  AboutMeContent,
  AboutMeImage,
  CardDescription,
  CardHeading,
  CardIcon
} from "./styles"

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMe>
          <AboutMeImage>
            <img src='' alt='my-image' />
          </AboutMeImage>
        </AboutMe>

        <AboutMeContent>
          <AboutMeCard>
            <CardIcon />
            <CardHeading>Experience</CardHeading>
            <CardDescription>2+ years of working</CardDescription>
          </AboutMeCard>
          <AboutContentParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            laboriosam eligendi voluptatum quaerat dolorem facere amet modi
            distinctio consequatur quasi aut molestiae in at expedita numquam
            quibusdam incidunt, voluptas doloremque.
          </AboutContentParagraph>
          <a href='#contact' className='btn btn-primary'>
            Let's Connect
          </a>
        </AboutMeContent>
      </AboutMeContainer>
    </section>
  )
}
