import React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"
import CustomeTable from "Components/CustomeTable/CustomeTable"
import CustomeStepper from "Components/CustomeStepper/CustomeStepper"
import CircularProgress from "@mui/material/CircularProgress"

import SearchInput from "Components/SearchInput/SearchInput"
import { useSelector } from "react-redux"
import { RootState } from "Store/store"

function App() {
  const { t, i18n } = useTranslation()
  const data = useSelector((state: RootState) => state.shipments.data)
  const status = useSelector((state: RootState) => state.shipments.status)
  const error = useSelector((state: RootState) => state.shipments.error)
  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }

  const [language, setLanguage] = React.useState("ar")
  document.body.dir = i18n.dir()
  const handleLangChange = (evt: any) => {
    const lang = evt.target.value
    console.log(lang)
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }
  return (
    <div className="App">
      <select onChange={handleLangChange} value={language}>
        <option value="ar">AR</option>
        <option value="en">EN</option>
      </select>
      <main className="main-wrapper">
        {status !== "succeeded" ? (
          <>
            <h4>{t("search.title")}</h4>
            <SearchInput className="lg-search" />
            {status === "loading" && <CircularProgress />}
            {status === "failed" && (
              <section>
                <p>{t("shipment.id")}</p>
                <p>{t("shipment.error")}</p>
              </section>
            )}
          </>
        ) : (
          <>
            <CustomeStepper />
            <section className="details-sec">
              <CustomeTable />
              <aside>asid</aside>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default App
