/* eslint-disable react/prop-types */
import React from "react"
import styled from "@emotion/styled"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

import FacebookIcon from "../svgs/facebook.svg"
import LinkedInIcon from "../svgs/linkedin.svg"
import WhatsappIcon from "../svgs/whatsapp.svg"
import TwitterIcon from "../svgs/twitter.svg"

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  svg {
    padding: 0 10px;
    height: 40px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`

export const ShareIcons = ({ socialConfig }) => (
  <div>
    <p style={{ textAlign: "center" }}>Share this with your friends:</p>
    <IconWrapper>
      <FacebookShareButton url={socialConfig.config.url}>
        <FacebookIcon />
      </FacebookShareButton>
      <LinkedinShareButton url={socialConfig.config.url}>
        <LinkedInIcon />
      </LinkedinShareButton>
      <WhatsappShareButton url={socialConfig.config.url}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <TwitterShareButton url={socialConfig.config.url}>
        <TwitterIcon />
      </TwitterShareButton>
    </IconWrapper>
  </div>
)
