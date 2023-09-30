import { Box, Stack } from "@mui/material"
import { RootState } from "Store/store"
import React from "react"
import { useSelector } from "react-redux"
import sideImg from "../../Assets/sideImage.jpeg"
import { t } from "i18next"
import Button from "@mui/material/Button"
export default function SideSec() {
  const data = useSelector((state: RootState) => state.shipments.data)

  return (
    <aside>
      <p style={{ textAlign: "start" }}>{t("delivery.address")}</p>
      <Box
        sx={{
          color: "#475467",
          fontSize: "16px",
          fontFamily: "Cairo-Regular",
          backgroundColor: "#fafafa",
          border: "1px solid #e4e7ec",
          padding: "1rem",
          borderRadius: "5px",
          justifyContent: "space-evenly",
        }}
      >
        {data.address}
      </Box>
      <Stack
        direction="row"
        sx={{
          padding: ".5rem",
          border: "1px solid #e4e7ec",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
      >
        <img src={sideImg} height={"100px"} width={"150px"} />
        <Stack>
          <p style={{ fontFamily: "Cairo-Bold", fontSize: "13px" }}>
            {t("problem")}
          </p>
          <Button
            disableRipple
            aria-disabled
            sx={{
              fontFamily: "Cairo-Regular",
              backgroundColor: "#e30613",
              color: "#fff",
              borderRadius: "12px",
              ":hover": {
                backgroundColor: "#e30613",
              },
            }}
          >
            {t("problem.btn")}
          </Button>
        </Stack>
      </Stack>
    </aside>
  )
}
