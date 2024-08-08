import React from "react";
import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
import Temp3 from "./components/Temp3";
import Temp4 from "./components/Temp4";

const App = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 pt-2 pb-10 bg-orange-100">
      <Temp1 />
      <Temp2 />
      <Temp3 />
      <Temp4 />
    </div>
  );
};

export default App;
