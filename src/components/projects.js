import React from "react";
import styled from "styled-components";

//TODO: define colors globally
const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #79dbc6;
    }
    background-color: #b7bfec;
`

class Projects extends React.Component {
    render() {
        return (
            <StyledSection id="projects">
                <h1 className="title">
                    Projects
                </h1>
                <h2 className="subtitle">
                    Cause actually  <span className="highlighted">building things makes for a fun hobby</span>.
                </h2>
                <div className="description">
                    Here I showcase some of my recent projects
                </div>
            </StyledSection>
        );
    }
}

export default Projects