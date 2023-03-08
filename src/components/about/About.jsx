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
import AboutMeImg from "../../assets/myImg.jpeg"

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutMeContainer>
        <AboutMe>
          <AboutMeImage>
            <img src={AboutMeImg} alt='my-image' />
          </AboutMeImage>
        </AboutMe>

        <AboutMeContent>
          <AboutMeCard>
            <CardIcon />
            <CardHeading>Experience</CardHeading>
            <CardDescription>2+ years of working</CardDescription>
          </AboutMeCard>
          <AboutContentParagraph>
            An enthusiastic and creative full-stack developer with 2+ years of
            experience. Strong in design and integration with intuitive problem
            solving skills. Proficient in React JS, Node JS, Express JS and
            MongoDB. Passionate about implementing and launching new projects.
            Ability to translate business requirements into technical solutions
            using advanced technologies.
          </AboutContentParagraph>
          <a href='#contact' className='btn btn-primary'>
            Let's Connect
          </a>
        </AboutMeContent>
      </AboutMeContainer>
    </section>
  )
}
