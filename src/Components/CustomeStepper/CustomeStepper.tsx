import { Stack, Step, StepLabel, Stepper } from "@mui/material"
import { steps } from "./utils"
import { CustomStepIcon } from "./CustomStepIcon"
import { CustomConnector } from "./CustomConnector"

export default function CustomeStepper() {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper alternativeLabel activeStep={3} connector={<CustomConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
