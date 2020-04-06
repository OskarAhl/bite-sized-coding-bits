import React from "react"
import styled from "@emotion/styled"

const StyledInput = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  -webkit-appearance: none;
  font-size: 1.125rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  background-color: rgb(255, 255, 255);
  margin-bottom: 0.75rem;
  transition: all 0.2s ease 0s;
  outline: none;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: rgb(218, 218, 218);

  &:focus {
    z-index: 1;
    box-shadow: rgb(49, 130, 206) 0px 0px 0px 1px;
    border-color: rgb(49, 130, 206);
  }
`
export const Input = ({ ...props }) => <StyledInput {...props} />
