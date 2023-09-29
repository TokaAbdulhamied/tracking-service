import React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"
import CustomeTable from "Components/CustomeTable/CustomeTable"
import CustomeStepper from "Components/CustomeStepper/CustomeStepper"

function App() {
  const { t } = useTranslation()
  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }
  const { i18n } = useTranslation()
  const [language, setLanguage] = React.useState("ar")

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
      <main>
        <h1>title</h1>
        <section>search input</section>
      </main>
      <main style={{ paddingInline: "5rem" }}>
        <CustomeStepper />
        <main>
          <section>
            <CustomeTable />
          </section>
          <aside>asid</aside>
        </main>
      </main>
    </div>
  )
}

export default App
