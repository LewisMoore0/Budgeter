import Image from "next/image";
import { AppBar, Toolbar, IconButton, Typography, Box  } from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';

export default function FixedToolBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <Toolbar >
        <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" textAlign='center' sx={{ flexGrow: 1 }}>
            Budgeting App
          </Typography>
      </Toolbar>
    </AppBar>
    </Box>
    </>
  )
}
