import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector"
import { styled } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"

export const CustomConnector = styled(StepConnector)(({ theme }) => {
  const { i18n } = useTranslation()
  const arabic = i18n.language === "ar"
  const step = useSelector((state: RootState) => state.shipments.data.step)
  const colors: Record<string, string> = {
    error: "#e30613",
    active: "#36b600",
    warning: "#f9ba02",
  }
  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
      left: `calc(${arabic ? "50%" : "-50%"} + 20px)`,
      right: `calc(${arabic ? "-50%" : "50%"} + 20px)`,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: colors[step?.stepperState],
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: colors[step?.stepperState],
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 5,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }
})
