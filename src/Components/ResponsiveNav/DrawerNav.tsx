import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Popover,
  useMediaQuery,
} from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../Assets/Logos/logo.svg"
import EngLogo from "../../Assets/Logos/EngLogo.svg"

import SearchInput from "Components/SearchInput/SearchInput"
import { navLinks } from "./TopNav"
import "./index.css"
import { useTranslation } from "react-i18next"
import { t } from "i18next"
export default function DrawerNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const { i18n } = useTranslation()

  // Function to open the popover
  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget)
    setPopoverOpen(true)
  }

  // Function to close the popover
  const closePopover = () => {
    setPopoverOpen(false)
  }
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
      <AppBar elevation={0} position="static" className="app-bar">
        <Toolbar>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            {i18n.language === "ar" ? (
              <img src={logo} alt="logo" width={120} height={36} />
            ) : (
              <img src={EngLogo} alt="logo" width={120} height={36} />
            )}
          </Box>
          <Button disableRipple onClick={openPopover} className="track-btn">
            {t("nav.track")}
          </Button>
          <IconButton
            edge="start"
            sx={{ color: "#000" }}
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Popover
          key="mobile"
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={closePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <SearchInput />
          {/* <Typography sx={{ p: 2 }}>Popover Content</Typography> */}
        </Popover>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {navLinks.map((link) => (
            // Use Link component to make list items clickable
            <>
              <ListItem onClick={toggleDrawer} className="list-item">
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      fontSize: 16,
                      fontFamily: "Cairo-Bold",
                    },
                  }}
                  primary={t(link)}
                />
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
    </>
  )
}
