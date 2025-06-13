import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/"
      height={70}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src="/Milan.png" alt="Logo" style={{ height: "100%", width: "auto" }} />
    </LinkStyled>
  );
};

export default Logo;