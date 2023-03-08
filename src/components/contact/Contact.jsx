import React, { useRef, useState } from "react"
import { Container, Form, CardContainer, Input, TextArea, MapContainer } from "./styles"
import Map from "./Map"
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef()
  const [success, setSuccess] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .sendForm("service_cqbs61z", "template_y4t8xnd", ref.current, "UH-gOtL34GeILzTKY")
      .then(
        result => {
          console.log(result.text)
          setSuccess(true)
        },
        error => {
          console.log(error.text)
          setSuccess(false)
        }
      )
  }
  return (
    <section id='contact'>
      <h2>Contact Us</h2>
      <Container>
        <CardContainer>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea
              placeholder='Write your message'
              name='message'
              rows={10}
            />
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </CardContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </Container>
    </section>
  )
}
