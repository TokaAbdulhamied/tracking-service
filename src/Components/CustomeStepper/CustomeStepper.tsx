import { Stack, Step, StepLabel, Stepper } from "@mui/material"
import { steps } from "./utils"
import { CustomStepIcon } from "./CustomStepIcon"
import { CustomConnector } from "./CustomConnector"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import { useEffect, useState } from "react"
import { mapEventToStepp } from "utils"
import Divider from "@mui/material/Divider"

export default function CustomeStepper() {
  const data = useSelector((state: RootState) => state.shipments.data)
  // const [step, setStep] = useState({ count: -1 })
  // useEffect(() => {
  //   let lastEvent: number = data?.TransitEvents?.length - 1
  //   let step = mapEventToStepp(data.TransitEvents[lastEvent])
  //   if (step.count === -1 && step.state === "CANCELLED") {
  //     let laststep = mapEventToStepp(data.TransitEvents[lastEvent - 1])
  //     step = { ...step, count: laststep.count, stepperState: "error" }
  //   }
  //   setStep(step)
  //   console.log(step, "step")
  // }, [])

  return (
    <Stack
      sx={{
        width: "100%",
        border: "1px solid #e4e7ec",
        borderRadius: "6px",
      }}
      spacing={4}
    >
      <Stack direction="row" justifyContent="space-between">
        <p style={{ flex: 1 }}> this</p>
        <p style={{ flex: 1 }}>this</p>
        <p style={{ flex: 1 }}>this</p>
        <p style={{ flex: 1 }}>this</p>
      </Stack>
      <Divider />
      <Stepper
        alternativeLabel
        activeStep={data.step.count}
        connector={<CustomConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
