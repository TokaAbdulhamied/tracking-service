import React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"
import CustomeTable from "Components/CustomeTable/CustomeTable"
import CustomeStepper from "Components/CustomeStepper/CustomeStepper"
import CircularProgress from "@mui/material/CircularProgress"
import SearchInput from "Components/SearchInput/SearchInput"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"
import SideSec from "Components/SideSec/SideSec"
import TopNav from "Components/ResponsiveNav/TopNav"
import { Update, getLastUpdates } from "utils"

function App() {
  const { t, i18n } = useTranslation()
  const { data, status, trackingId } = useSelector(
    (state: RootState) => state.shipments
  )
  document.body.dir = i18n.dir()
  let lastUpdates: Update[] = getLastUpdates(data.TransitEvents)

  return (
    <div className="App">
      <TopNav />
      <main className="main-wrapper">
        {status !== "succeeded" ? (
          <>
            <h4>{t("search.title")}</h4>
            <SearchInput className="lg-search" />
            {status === "loading" && (
              <CircularProgress sx={{ marginTop: "1em" }} />
            )}
            {status === "failed" && (
              <section>
                <p className="id">{`${t("shipment.id")} ${trackingId}`}</p>
                <div className="error">{t("shipment.error")}</div>
              </section>
            )}
          </>
        ) : (
          <>
            <CustomeStepper />
            <section className="details-sec">
              <CustomeTable data={lastUpdates} />
              <SideSec />
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default App
