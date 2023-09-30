import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector"
import { styled } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import { colors } from "./utils"

export const CustomConnector = styled(StepConnector)(({ theme }) => {
  const { i18n } = useTranslation()
  const arabic = i18n.language === "ar"
  const step = useSelector((state: RootState) => state.shipments.data.step)

  return {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
      left: `calc(${arabic ? "50%" : "-50%"})`,
      right: `calc(${arabic ? "-50%" : "50%"})`,
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
