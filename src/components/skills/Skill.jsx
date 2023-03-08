import {
  SkillCardContainer,
  SkillContainer,
  SkillContent,
  SkillDetails,
  SkillIcon,
  SkillTitle
} from "./styles"

const frontend = [
  {
    id: 1,
    name: "HTML",
    skillLavel: "Experienced"
  },
  {
    id: 2,
    name: "CSS",
    skillLavel: "Intermediate"
  },
  {
    id: 3,
    name: "Bootstrap",
    skillLavel: "intermediate"
  },
  {
    id: 4,
    name: "Tailwind css",
    skillLavel: "Intermediate"
  },
  {
    id: 5,
    name: "MUI",
    skillLavel: "intermediate"
  },
  {
    id: 6,
    name: "JavaScript",
    skillLavel: "Intermediate"
  },
  {
    id: 7,
    name: "React",
    skillLavel: "Intermediate"
  },
  {
    id: 7,
    name: "Redux",
    skillLavel: "Intermediate"
  },
]

const backend = [
  {
    id: 1,
    name: "Next Js",
    skillLavel: "Intermediate"
  },
  {
    id: 2,
    name: "Node Js",
    skillLavel: "Intermediate"
  },
  {
    id: 3,
    name: "Express Js",
    skillLavel: "Intermediate"
  },
  {
    id: 4,
    name: "MongoDb",
    skillLavel: "Intermediate"
  }
]

export default function Skill() {
  return (
    <section id='skills'>
      <h2>My Skill's</h2>
      <SkillContainer>
        <SkillCardContainer>
          <SkillTitle>Frontend Development</SkillTitle>
          <SkillContent>
            {frontend.map(skill => (
              <SkillDetails key={skill.id}>
                <SkillIcon />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.skillLavel}</small>
                </div>
              </SkillDetails>
            ))}
          </SkillContent>
        </SkillCardContainer>
        <SkillCardContainer>
          <SkillTitle>Backend Development</SkillTitle>
          <SkillContent>
            {backend.map(skill => (
              <SkillDetails key={skill.id}>
                <SkillIcon />
                <div>
                  <h4>{skill.name}</h4>
                  <small className='text-light'>{skill.skillLavel}</small>
                </div>
              </SkillDetails>
            ))}
          </SkillContent>
        </SkillCardContainer>
      </SkillContainer>
    </section>
  )
}
