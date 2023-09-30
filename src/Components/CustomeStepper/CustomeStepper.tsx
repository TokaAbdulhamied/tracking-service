import { Stack, Step, StepLabel, Stepper } from "@mui/material"
import { colors, steps } from "./utils"
import { CustomStepIcon } from "./CustomStepIcon"
import { CustomConnector } from "./CustomConnector"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import Divider from "@mui/material/Divider"
import { useTranslation } from "react-i18next"
import dayjs from "dayjs"
import "dayjs/locale/ar"
import "./index.css"
export default function CustomeStepper() {
  const data = useSelector((state: RootState) => state.shipments.data)
  const step = useSelector((state: RootState) => state.shipments.data.step)

  const trackingId = useSelector(
    (state: RootState) => state.shipments.trackingId
  )

  const { t, i18n } = useTranslation()
  dayjs.locale(i18n.language)

  return (
    <Stack
      sx={{
        width: "100%",
        border: "1px solid #e4e7ec",
        borderRadius: "6px",
      }}
      spacing={2}
    >
      <Stack
        sx={{ paddingInline: { md: "6px" } }}
        pt="1rem"
        direction="row"
        justifyContent="space-between"
      >
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title">{`${t("shipment.id")}    ${trackingId}`}</p>
          <p
            className="steps-title"
            style={{
              color: colors[step?.stepperState],
            }}
          >
            {step.stepperState === "active"
              ? t(`step.${step.state}`)
              : t(`state.${step.state}`)}
          </p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.lastUpdate")}</p>
          <p className="steps-title">
            {dayjs(data.CurrentStatus?.timestamp).format(
              "dddd DD/MM/YYYY hh:mm a"
            )}
          </p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.merchantName")}</p>
          <p className="steps-title">{data.merchantName}</p>
        </Stack>
        <Stack sx={{ flex: 1 }}>
          <p className="sm-title"> {t("shipment.promisedDate")} </p>
          <p className="steps-title">
            {dayjs(data.PromisedDate).format("DD MMMM YYYY")}
          </p>
        </Stack>
      </Stack>
      <Divider sx={{ marginTop: "1rem" }} />
      <Stepper
        sx={{ "&.MuiStepper-root": { marginBottom: ".8rem" } }}
        alternativeLabel
        activeStep={data.step.count}
        connector={<CustomConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                  fontFamily: "Cairo-Bold",
                  fontSize: { md: "12px", xs: "10px" },
                },
              }}
              StepIconComponent={CustomStepIcon}
            >
              {t(label)}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
