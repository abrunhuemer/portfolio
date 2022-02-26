import React from "react"
import styled from "styled-components"

import GlobalStyle from "./globalStyle"
import Header from "./header"
import Footer from "./footer"
import { Line } from "./style-elements/line"

const StyledLayout = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    #main-content {
        width: 100%;
        margin: 0 auto;
        padding: 0 5rem;
    }
`

class Layout extends React.Component {
    render() {
        return (
            <StyledLayout>
                <GlobalStyle />
                <Header />
                <Line />
                <main id="main-content">{this.props.children}</main>
                <Footer />
            </StyledLayout>
        )
    }
}

export default Layout