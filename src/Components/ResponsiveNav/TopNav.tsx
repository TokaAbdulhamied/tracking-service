import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material"
import React, { useState } from "react"
import logo from "../../Assets/Logos/logo.svg"
import EngLogo from "../../Assets/Logos/EngLogo.svg"
import { t } from "i18next"
import DrawerNav from "./DrawerNav"
import "./index.css"
import { useTranslation } from "react-i18next"
import SearchPopover from "./SearchPopover"

export const navLinks = ["nav.main", "nav.sales", "nav.prices"]

const TopNav = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)")
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
              <img src={logo} alt="ar-bosta" width={120} height={36} />
            ) : (
              <img src={EngLogo} alt="bosta" width={120} height={36} />
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
              {navLinks.map((link, index) => (
                <>
                  <ListItem className="list-item" key={index}>
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
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button disableRipple onClick={openPopover} className="nav-btn">
              {t("nav.track")}
            </Button>
            <Button
              className="nav-btn"
              disableRipple
              sx={{
                ml: 2,
                color: "#111619",
                fontSize: 16,
                fontFamily: "Cairo-Bold",
              }}
            >
              {t("nav.signin")}
            </Button>
            <Button
              className="nav-btn"
              onClick={handleLangChange}
              disableRipple
              sx={{ color: "#e30613 !important" }}
            >
              {t("lang")}
            </Button>
            <SearchPopover
              popoverOpen={popoverOpen}
              anchorEl={anchorEl}
              closePopover={closePopover}
            />
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
}

export default TopNav
