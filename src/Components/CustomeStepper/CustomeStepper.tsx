import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material"
import { steps } from "./utils"
import { CustomStepIcon } from "./CustomStepIcon"
import { CustomConnector } from "./CustomConnector"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import { useEffect, useState } from "react"
import { mapEventToStepp } from "utils"
import Divider from "@mui/material/Divider"
import { useTranslation } from "react-i18next"
import dayjs from "dayjs"
import "dayjs/locale/ar"
import "./index.css"
export default function CustomeStepper() {
  const data = useSelector((state: RootState) => state.shipments.data)
  const trackingId = useSelector(
    (state: RootState) => state.shipments.trackingId
  )

  const { t, i18n } = useTranslation()
  console.log(i18n.language)
  dayjs.locale(i18n.language)

  return (
    <Stack
      sx={{
        width: "100%",
        border: "1px solid #e4e7ec",
        borderRadius: "6px",
        paddingBottom: "1rem",
      }}
      spacing={4}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title">{`${t("shipment.id")}    ${trackingId}`}</p>
          <p></p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.lastUpdate")}</p>
          <p>
            {dayjs(data.CurrentStatus?.timestamp).format(
              "dddd DD/MM/YYYY hh:mm a"
            )}
          </p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.merchantName")}</p>
          <p>{data.merchantName}</p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.promisedDate")} </p>
          <p> {dayjs(data.PromisedDate).format("DD MMMM YYYY")}</p>
        </Stack>
      </Stack>
      <Divider />
      <Stepper
        alternativeLabel
        activeStep={data.step.count}
        connector={<CustomConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{t(label)}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
