import React from "react";
import Card, { CardVariant } from "./components/Card";
import Card2, { Card2Variant } from "./components/Card2";
import Card3, { Card3Variant } from "./components/Card3";

function App() {
  return (
    <div>
      <Card
        id={0}
        text="Create project"
        status={true}
        variant={CardVariant.outlined}
        onClick={() => console.log("Clicked!")}
      >
        Some text
      </Card>
      <Card
        id={1}
        text="Create ts component"
        status={true}
        variant={CardVariant.primary}
      ></Card>
      <Card
        id={2}
        text="Repeat creating ts component for 7 times"
        status={true}
        variant={CardVariant.outlined}
      ></Card>

      <Card2
        id={10}
        text="Create project"
        status={true}
        variant={Card2Variant.primary}
        onClick={() => console.log("Clicked")}
      >
        somfpdsmpsmc
      </Card2>
      <Card2
        id={11}
        text="Create ts component"
        status={true}
        variant={Card2Variant.outlined}
        onClick={() => console.log("Password")}
      >
        <input placeholder="Input password"></input>
      </Card2>
      <Card2
        id={12}
        text="Repeat creating ts component for 7 times"
        status={true}
        variant={Card2Variant.primary}
        onClick={() => console.log("Table")}
      >
        <table></table>
      </Card2>

      <Card3
        id={0}
        text="Create project"
        status={true}
        variant={Card3Variant.outlined}
      ></Card3>
      <Card3
        id={1}
        text="Create ts component"
        status={true}
        variant={Card3Variant.primary}
      ></Card3>
      <Card3
        id={2}
        text="Repeat creating ts component for 7 times"
        status={true}
        variant={Card3Variant.outlined}
      ></Card3>
    </div>
  );
}

export default App;
