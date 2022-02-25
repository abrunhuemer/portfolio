import React from "react"
import AboutMe from "../components/aboutme";
import Layout from "../components/layout"
import Projects from "../components/projects";

class Page extends React.Component {
  render() {
    return (
      <Layout>
        <AboutMe />
        <Projects />
      </Layout>
    );
  }
}

export default Page 