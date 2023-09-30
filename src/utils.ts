export function mapEventToStepp(event: any) {
  // const lastItem = events.length - 1
  switch (event.state) {
    case "TICKET_CREATED": {
      return {
        count: 1,
        ...event,
        stepperState: "active",
      }
    }
    case "PACKAGE_RECEIVED":
    case "IN_TRANSIT":
    case "NOT_YET_SHIPPED": {
      return {
        count: 1,
        ...event,
        stepperState: "active",
      }
    }
    case "OUT_FOR_DELIVERY": {
      return {
        count: 2,
        ...event,
        stepperState: "active",
      }
    }
    case "WAITING_FOR_CUSTOMER_ACTION": {
      return {
        count: 2,
        ...event,
        stepperState: "warning",
      }
    }
    case "DELIVERED_TO_SENDER": {
      return {
        count: 2,
        ...event,
        stepperState: "error",
      }
    }

    case "DELIVERED": {
      return {
        count: 4,
        ...event,
        stepperState: "active",
      }
    }
    default: {
      return {
        count: -1,
        ...event,
      }
    }
  }
}

// 7234258
// 13737343
// 67151313
