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
        const {frontmatter, rawMarkdownBody} = this.props.content;

        return (
            <StyledSection id="aboutme">
                <h1 className="title">
                    {frontmatter.greetings}{" "}
                    <span role="img" aria-label="emoji">
                    {frontmatter.emoji}
                    </span>
                    <br />
                    {frontmatter.title}
                </h1>
                <h2 className="subtitle">
                    {frontmatter.subtitlePrefix}{" "}
                    <span className="highlighted">{frontmatter.subtitleHighlight}</span>
                </h2>
                <div className="description">
                    {rawMarkdownBody}
                </div>
            </StyledSection>
        );
    }
}

export default AboutMe