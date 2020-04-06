import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import { rhythm, scale } from "../utils/typography"

const StyledNav = styled.nav`
  border-bottom: 1px solid rgb(218, 218, 218);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 60px;

  div {
    margin-right: 8px;
  }
`

const Circle = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Dark = styled(Circle)`
  background-color: black;
`

const Blue = styled(Circle)`
  background-color: blue;
`

const Light = styled(Circle)`
  background-color: white;
  border: 1px solid grey;
`

const Purple = styled(Circle)`
  background-color: purple;
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [theme, setTheme] = React.useState("light")

  let header

  if (location.pathname === rootPath) {
    header = (
      <div style={{ marginBottom: rhythm(1.5) }}>
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <h3 style={{ marginBottom: 0, marginTop: 0 }}>
          Learn bite-sized programming concepts fast.
        </h3>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <Global
        styles={css`
          :root {
            --main-bg-color: pink;
          }
        `}
      />
      <div>
        {/* <StyledNav>
          <Dark
            onClick={() =>
              document.documentElement.style.setProperty(
                "--main-bg-color",
                "#000"
              )
            }
          />
          <Light
            onClick={() =>
              document.documentElement.style.setProperty(
                "--main-bg-color",
                "#fff"
              )
            }
          />
          <Purple />
          <Blue />
        </StyledNav> */}
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(28),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
