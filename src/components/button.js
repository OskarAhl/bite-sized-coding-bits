import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  will-change: transform, background-color, box-shadow, color, border;
  font-size: 14px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 0, 131);
  box-shadow: rgba(255, 0, 131, 0.5) 0px 10px 40px -10px;
  outline: none;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  transition: all 0.3s ease 0s, transform 0.5s ease 0s;

  &:hover {
    background-color: rgb(220, 0, 115);
  }
`
export const Button = ({ children, loading, ...props }) => (
  <StyledButton {...props}>{loading ? "loading..." : children}</StyledButton>
)
