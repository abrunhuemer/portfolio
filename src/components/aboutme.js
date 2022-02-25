import React from "react";
import styled from "styled-components";

//TODO: define colors or Styled Section globally
const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 violet;
    }
    background-color: #cdf3e1;
`

class AboutMe extends React.Component {
    render() {
        return (
            <StyledSection id="projects">
                <h1 className="title">
                    Hello <span role="img" aria-label="emoji">👋</span><br />
                    I'm Alexander Brunhuemer
                </h1>
                <h2 className="subtitle">
                    I design and build <span className="highlighted">things for the web</span>.
                </h2>
                <div className="description">
                    Product Manager and Freelance Web Developer. Based in Linz.
                </div>
            </StyledSection>
        );
    }
}

export default AboutMe