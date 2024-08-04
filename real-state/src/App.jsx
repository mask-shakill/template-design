import React from "react";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import TemplateThree from "./components/TemplateThree";
import TemplateFour from "./components/TemplateFour";

import TemplateFive from "./components/TemplateFive";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-200 ">
      <br /> <br />
      <TemplateThree />
      <br /> <br />
      <TemplateTwo />
      <br /> <br />
      <TemplateOne />
      <br /> <br />
      <TemplateFour />
      <br /> <br />
      {/* <DemoTemp /> */}
      <TemplateFive />
      <br /> <br />
    </div>
  );
};

export default App;
