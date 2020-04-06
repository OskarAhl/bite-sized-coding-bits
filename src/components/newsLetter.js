import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "@emotion/styled"
import { Button } from "./button"
import { Input } from "./input"

const HelperText = styled.p`
  margin-top: 0.5rem;
  color: rgb(113, 128, 150);
  line-height: normal;
  font-size: 0.875rem;
`
const ErrorText = styled.p`
  color: #e53e3e;
  line-height: normal;
  font-size: 0.875rem;
  margin-bottom: 8px;
`
const EmailListForm = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!email) {
      setStatus("no_email")
      return
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setStatus("invalid_email")
      return
    }
    setStatus("loading")
    addToMailchimp(email).then(data => {
      setStatus("success")
    })
  }

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Get weekly interactive coding challenges</h2>
      {status === "success" ? (
        <div>Thanks for signing up! 🎉</div>
      ) : (
        <div>
          {status === "no_email" && (
            <ErrorText>Please enter your email address</ErrorText>
          )}
          {status === "invalid_email" && (
            <ErrorText>Email should be email@example.com</ErrorText>
          )}
          <Input
            placeholder="Email address"
            name="email"
            type="text"
            aria-describedby="email-helper-text"
            onChange={handleEmailChange}
          />
          <HelperText id="email-helper-text">
            We'll never share your email.
          </HelperText>
          <Button type="submit" loading={status === "loading"}>
            Subscribe
          </Button>
        </div>
      )}
    </form>
  )
}

export default EmailListForm
