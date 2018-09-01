import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Button = (props) => {
  const ATag = styled.a`
    background:red;
    color: white;
    padding: 10px 15px;
    border: none;
    margin: 0;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    :hover{
      background: #de0d0d;
    }
  `;
  return (
    <ATag {...props}>{props.text}</ATag>
  )
}

const IndexPage = () => (
  <div>
    <h1>Hi people of BOB!!</h1>
    <p>Welcome to Battle of Blaze unofficial Tools, Guides and Tips.</p>
    <p>Now go build something great.</p>
    <h3>BOB - Dragon battle armour sets analysis</h3>
    <Button href="https://onedrive.live.com/view.aspx?resid=E402560C1B2E5CEF!1674&ithint=file%2cxlsx&app=Excel&authkey=!ADENrWfx71SHULc" text="Battle Set" target="_blank" />
  </div>
)

export default IndexPage
