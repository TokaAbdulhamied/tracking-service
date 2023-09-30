import React, { useState } from "react"
import "./SearchInput.css"
import SearchIcon from "@mui/icons-material/Search"
import { IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { AppDispatch } from "Store/store"
import { getShipmentsData } from "Store/ShipmentsMiddleware"
import { useTranslation } from "react-i18next"
import { clear } from "Store/ShipmentsReducer"
type Props = {
  height?: string
  size?: string
  className?: string
}
function SearchInput({ height = "4rem", size = "3rem", className }: Props) {
  const { t } = useTranslation()
  const [value, setValue] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const handleSearch = () => {
    if (value === "") dispatch(clear())
    else dispatch(getShipmentsData(value))
  }

  return (
    <span
      style={{ height: height }}
      className={`search-input-container ${className}`}
    >
      <input
        placeholder={t("search.placeholder")}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <IconButton
        onClick={handleSearch}
        sx={{
          borderRadius: "0px",
          backgroundColor: "#E30613",
          borderStartEndRadius: "10px",
          borderEndEndRadius: "10px",
          border: "1px solid #E30613",
          height: "100%",
          // padding: "4px 15px",
          ":hover": {
            backgroundColor: "#E30613",
          },
        }}
      >
        <SearchIcon sx={{ color: "#fff", fontSize: size }} />
      </IconButton>
    </span>
  )
}

export default SearchInput
