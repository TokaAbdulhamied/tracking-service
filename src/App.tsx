import React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className="App">
      <nav>nav</nav>
      <main>
        <h1>title</h1>
        <section>search input</section>
      </main>
      <main>
        <section>stepper</section>
        <section>table</section>
        <aside>asid</aside>
      </main>
    </div>
  )
}

export default App
