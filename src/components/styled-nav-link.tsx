import { NavLink } from "react-router";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomNavLink = styled(NavLink)({
  textDecoration: "none",
  "& .MuiButton-root": {
    fontWeight: "bold",
  },
});

const StyledNavLink = ({path, label} : {path: string, label: string}) => {
  return (
    <CustomNavLink to={path}>
      <Button>
        {label}
      </Button>
    </CustomNavLink>
  );
};

export default StyledNavLink;
