import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../../Assets/Logos/logo.svg"
import EngLogo from "../../Assets/Logos/EngLogo.svg"

import { navLinks } from "./TopNav"
import "./index.css"
import { useTranslation } from "react-i18next"
import { t } from "i18next"
import SearchPopover from "./SearchPopover"
export default function DrawerNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const { i18n } = useTranslation()

  const handleLangChange = () => {
    const ar = i18n.language === "ar"
    i18n.changeLanguage(ar ? "en" : "ar")
  }
  const openPopover = (event: any) => {
    setAnchorEl(event.currentTarget)
    setPopoverOpen(true)
  }

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
              <img src={logo} alt="bosta" width={120} height={36} />
            ) : (
              <img src={EngLogo} alt="ar-bosta" width={120} height={36} />
            )}
          </Box>
          <Button disableRipple onClick={openPopover} className="nav-btn">
            {t("nav.track")}
          </Button>
          <Button
            className="nav-btn"
            onClick={handleLangChange}
            disableRipple
            sx={{ color: "#e30613 !important" }}
          >
            {t("lang")}
          </Button>
          <IconButton
            edge="start"
            sx={{ color: "#111619" }}
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <SearchPopover
          popoverOpen={popoverOpen}
          anchorEl={anchorEl}
          closePopover={closePopover}
        />
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {navLinks.map((link, index) => (
            <>
              <ListItem
                onClick={toggleDrawer}
                className="list-item"
                key={index}
              >
                <ListItemText
                  key={index + "item"}
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
