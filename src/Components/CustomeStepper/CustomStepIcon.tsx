import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import { StepIconProps, styled } from "@mui/material"
import Check from "@mui/icons-material/Check"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
const CustomStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => {
  const step = useSelector((state: RootState) => state.shipments.data.step)
  const colors: Record<string, string> = {
    error: "#e30613",
    active: "#36b600",
    warning: "#f9ba02",
  }
  return {
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: colors[step.stepperState],
    }),
    ...(ownerState.completed && {
      backgroundColor: colors[step.stepperState],
    }),
  }
})

export function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <QuestionMarkIcon className="QontoStepIcon-completedIcon" />,
    2: <ShoppingBagIcon className="QontoStepIcon-completedIcon" />,
    3: <LocalShippingIcon className="QontoStepIcon-completedIcon" />,
    4: <AssignmentTurnedInIcon className="QontoStepIcon-completedIcon" />,
  }

  return (
    <CustomStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[String(props.icon)]
      )}
    </CustomStepIconRoot>
  )
}
