import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
    width: 100%;
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 5rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StyledLogo = styled.div`
  font-size: 2rem;
  font-family:  'Fira Code', 'Andalé Mono', 'Courier New' ;
  font-weight: 500;
  font-style: normal;
  color: black;
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" aria-label="Home">
                <StyledLogo>&lt;Alexander Brunhuemer /&gt;</StyledLogo>
            </Link>
        </StyledHeader>
    )
}

export default Header