import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import LinkedInIcon from "../svgs/linkedin.svg"
import TwitterIcon from "../svgs/twitter.svg"
import InstagramIcon from "../svgs/instagram.svg"
import QuoraIcon from "../svgs/quora.svg"
import { rhythm } from "../utils/typography"

const SocialIcons = styled.div`
  display: flex;
  transition: all 0.3s ease;
  padding-top: 8px;

  a {
    box-shadow: none;
    height: 25px;
  }
  svg {
    height: 25px;
    padding-right: 10px;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        alignItems: "center",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p style={{ marginBottom: 0 }}>{author.summary}</p>
        <SocialIcons>
          <a
            href="https://twitter.com/AhlrothOskar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.quora.com/profile/Oskar-Ahlroth"
            rel="noopener noreferrer"
            target="_blank"
          >
            <QuoraIcon style={{ fill: "#B92B27" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/oskar-ahlroth-6581b3b8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/oskarahlroth/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </SocialIcons>
      </div>
    </div>
  )
}

export default Bio
