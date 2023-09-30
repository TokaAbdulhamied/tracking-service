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
import React, { useState, useTransition } from "react"
import MenuIcon from "@mui/icons-material/Menu"
// import { Link } from "react-router-dom" // Import Link from react-router-dom
import GoogleIcon from "@mui/icons-material/Google"
import logo from "../../Assets/Logos/logo.svg"
import EngLogo from "../../Assets/Logos/EngLogo.svg"

import SearchInput from "../SearchInput/SearchInput"
import { t } from "i18next"
import DrawerNav from "./DrawerNav"
import "./index.css"
import { useTranslation } from "react-i18next"
import LangPopover from "./LangPopover"

export const navLinks = ["nav.main", "nav.sales", "nav.prices"]

const TopNav = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)")
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [popoverLangOpen, setPopoverLangOpen] = useState(false)
  const [anchorLngEl, setAnchorLngEl] = useState(null)

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
  const openLangPopover = (event: any) => {
    setAnchorLngEl(event.currentTarget)
    setPopoverLangOpen(true)
  }

  const closeLangPopover = () => {
    setPopoverLangOpen(false)
  }
  if (isSmallScreen) {
    return <DrawerNav />
  } else {
    return (
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
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
              }}
              component="nav"
              aria-labelledby="main navigation"
            >
              {navLinks.map((link) => (
                // Use Link component to make list items clickable
                <>
                  <ListItem className="list-item">
                    <ListItemText
                      primary={t(link)}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: 16,
                          fontFamily: "Cairo-Bold",
                        },
                      }}
                      sx={{
                        width: "max-content",
                      }}
                    />
                  </ListItem>
                </>
              ))}
            </List>
          </Box>
          {/* Language and Login button on the right */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button disableRipple onClick={openPopover} className="track-btn">
              {t("nav.track")}
            </Button>

            <Button
              disableRipple
              sx={{ ml: 2, color: "#000", fontSize: 18, fontWeight: "600" }}
            >
              Login
            </Button>
            <Button
              onClick={handleLangChange}
              disableRipple
              sx={{ color: "#e30613", fontSize: 18, fontWeight: "600" }}
            >
              {t("lang")}
            </Button>
            {/* <LangPopover
              popoverOpen={popoverLangOpen}
              anchorEl={anchorLngEl}
              closePopover={closeLangPopover}
            /> */}

            <Popover
              key={"desktop"}
              elevation={1}
              slotProps={{
                paper: {
                  sx: {
                    padding: "1rem",
                  },
                },
              }}
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
              style={{ padding: "1rem" }}
            >
              <h5>{t("search.title")}</h5>
              <SearchInput height="3rem" size="1.5rem" />
              {/* <Typography sx={{ p: 2 }}>Popover Content</Typography> */}
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
}

export default TopNav
