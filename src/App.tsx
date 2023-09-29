import React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"
import CustomeTable from "Components/CustomeTable/CustomeTable"
import CustomeStepper from "Components/CustomeStepper/CustomeStepper"
import SearchInput from "Components/SearchInput/SearchInput"

function App() {
  const { t } = useTranslation()
  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }
  const { i18n } = useTranslation()
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
        <h4>{t("search.title")}</h4>
        <SearchInput className="lg-search" />
      </main>
      {/* <main className="main-wrapper">
        <CustomeStepper />

        <section>
          <CustomeTable />
        </section>
        <aside>asid</aside>
      </main> */}
    </div>
  )
}

export default App
