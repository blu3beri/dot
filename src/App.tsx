import React from "react";
import { useAgent } from "@aries-framework/react-hooks";
import "./App.css";

export const App: React.FC = () => {
  const { agent } = useAgent();

  return (
    <div>
      <p>agent: {JSON.stringify(agent)}</p>
    </div>
  );
};
