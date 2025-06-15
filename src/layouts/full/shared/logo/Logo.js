import { Link } from "react-router-dom";
import { styled, Box } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled
      to="/admin/dashboard"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px"
      }}
    >
      <Box
        component="img"
        src="/Milan.png"
        alt="Logo"
        sx={{
          height: "50px",
          width: "auto",
          maxWidth: "160px",
          objectFit: "contain"
        }}
      />
    </LinkStyled>
  );
};

export default Logo;