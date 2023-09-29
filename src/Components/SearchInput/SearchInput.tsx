import React, { useState, useTransition } from "react"
import "./SearchInput.css"
import SearchIcon from "@mui/icons-material/Search"
import { Button, IconButton, InputAdornment, TextField } from "@mui/material"

import { useTranslation } from "react-i18next"
type Props = {
  className?: string
}
function SearchInput({ className }: Props) {
  const { t } = useTranslation()
  const [value, setValue] = useState("")

  return (
    <span
      // style={{ height: "3rem" }}
      className={`search-input-container ${className}`}
    >
      <input
        placeholder={t("search.placeholder")}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <IconButton
        sx={{
          borderRadius: "0px",
          backgroundColor: "#E30613",
          borderStartEndRadius: "10px",
          borderEndEndRadius: "10px",

          border: "1px solid #E30613",
          height: "100%",
          padding: "4px 15px",
          ":hover": {
            backgroundColor: "#E30613",
          },
        }}
      >
        <SearchIcon sx={{ fontSize: "3rem", color: "#fff" }} />
      </IconButton>
    </span>
  )
}

export default SearchInput
