import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  return (
    <AppBar position='static' sx={{ mb: 2 }}>
      <Toolbar>
        <Typography
          variant='h6'
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          Movie App
        </Typography>
        <Box>
          <Button component={Link} to='/' color='inherit' sx={{ textTransform: "none", fontSize: "1rem", mr: 2 }}>
            Home
          </Button>
          <Button component={Link} to='/favorites' color='inherit' sx={{ textTransform: "none", fontSize: "1rem" }}>
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
