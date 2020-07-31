import React from "react";
import "./css/App.css";
import Layout from "./components/Layout";
import ContentBlock from "./components/ContentBlock";
import ContentOne from "./components/content/ContentOne";
import ContentTwo from "./components/content/ContentTwo";
import ContentThree from "./components/content/ContentThree";
import ContentFour from "./components/content/ContentFour";
import ContentFive from "./components/content/ContentFive";
import ContentSix from "./components/content/ContentSix";

function App() {
  return (
    <div className="App">
      <Layout>
        <ContentBlock>
          <ContentOne />
          <ContentTwo />
          <ContentThree />
          <ContentFour />
          <ContentFive />
          <ContentSix />
        </ContentBlock>
      </Layout>
    </div>
  );
}

export default App;
