import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [error, setError] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://localhost:3001`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      setError(err)
    })
  }, [])

  return (
    <div className="App">
      Testing:{" "}
      <div>
        {data && { data }} {error && { error }}
      </div>
    </div>
  )
}

export default App
