import { Typography } from "@material-ui/core";

export default function footer() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography>This is a footer</Typography>
    </div>
  );
}
