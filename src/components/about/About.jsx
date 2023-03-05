import React from 'react'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me__image">
              <img src="" alt="my-image" />
            </div>
        </div>
      </div>

      <div className="about__content">
          <div className="about__card">
            <article className="about__card">
            {/* ICON HERE */}
              <h5>Experience</h5>
              <small>2+ years of working</small>
            </article>

          </div>
      </div>

    </section>
  )
}
