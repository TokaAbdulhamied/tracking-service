import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import { StepIconProps, styled } from "@mui/material"
import Check from "@mui/icons-material/Check"

const CustomStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
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
    backgroundColor: "grey",
  }),
  ...(ownerState.completed && {
    backgroundColor: "green",
  }),
}))

export function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  const icons: { [index: string]: React.ReactElement } = {
    2: <ShoppingBagIcon />,
    3: <LocalShippingIcon />,
    4: <AssignmentTurnedInIcon />,
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
