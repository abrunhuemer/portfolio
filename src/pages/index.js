import { graphql } from "gatsby";
import React from "react"
import AboutMe from "../components/aboutme";
import Layout from "../components/layout"
import Projects from "../components/projects";

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <AboutMe content={this.props.data.about} />
        <Projects />
      </Layout>
    );
  }
}

export default Page 

export const pageQuery = graphql`
  query AboutSectionQuery {
    about: markdownRemark(fileAbsolutePath: {regex: "/pages/aboutme.md/"}) {
      frontmatter {
        title
        greetings
        emoji
        subtitlePrefix
        subtitleHighlight
      }
      rawMarkdownBody
    }
  }
`