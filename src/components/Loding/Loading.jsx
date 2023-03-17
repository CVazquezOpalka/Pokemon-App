import React from "react";
import { Ring } from "@uiball/loaders";
import { height } from "@mui/system";

export const Loading = () => {
  return (
    <div
      className="containerSpiner"
      style={{
        display: "flex",
        width: "100%",
        height: "500px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ring size={100} lineWeight={5} speed={2} color="black" />
    </div>
  );
};
