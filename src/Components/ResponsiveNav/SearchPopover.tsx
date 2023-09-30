import React from "react"
import { Popover } from "@mui/material"
import { t } from "i18next"
import SearchInput from "Components/SearchInput/SearchInput"
export default function SearchPopover({
  popoverOpen,
  anchorEl,
  closePopover,
}: any) {
  return (
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
      <p className="search-tit">{t("search.title")}</p>
      <SearchInput height="3rem" size="1.5rem" className="search-sm" />
    </Popover>
  )
}
