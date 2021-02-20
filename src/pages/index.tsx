import React from "react"
import { Link } from "gatsby"
import { MyButton } from "../components/MyButton"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { colors, loaderColors } from "../colors"
import Loader from "react-loader-spinner"
import randomItem from "random-item"
import getMessage from "@darkobits/dot-dot-dot"
import "../styles.css"

const colorKeys = Object.keys(loaderColors)
type SpinnerTypes =
  | "Audio"
  | "BallTriangle"
  | "Bars"
  | "Circles"
  | "Grid"
  | "Hearts"
  | "Oval"
  | "Puff"
  | "Rings"
  | "TailSpin"
  | "ThreeDots"
  | "Watch"
  | "RevolvingDot"
  | "Triangle"
  | "Plane"
  | "MutatingDots"
  | "CradleLoader"
const IndexPage = () => {
  const [status, setStatus] = React.useState<"pre" | "loading" | "post">("pre")
  const [color, setColor] = React.useState(colors.peach)
  const [spinner, setSpinner] = React.useState<SpinnerTypes>("Puff")
  const [mes, setMes] = React.useState(getMessage() + "...")
  const [lalr, setLalr] = React.useState(0)

  React.useEffect(() => {
    let str = window.localStorage.getItem("lalr")

    if (!str) {
      window.localStorage.setItem("lalr", "3")
      setLalr(3)
    } else setLalr(+str)
  }, [])

  React.useEffect(() => {
    if (status === "loading") {
      let id = setInterval(() => {
        setSpinner(
          randomItem(["Puff", "Watch", "Bars", "Grid", "BallTriangle", "Rings"])
        )
        setMes(getMessage() + "...")
      }, 4000)
      setTimeout(() => {
        clearInterval(id)
        setStatus("post")
        setLalr(lalr + 1)
        window.localStorage.setItem("lalr", `${lalr + 1}`)
      }, 16000)
    }
  }, [status])
  return (
    <div
      className="app-container"
      style={{
        height: "100%",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {status !== "loading" && (
        <>
          {status === "post" && (
            <>
              <h2 style={{ color: colors.peach }}>
                YOUR CATAN GAME IS CALLED...
              </h2>
              <h1 className="lalr" style={{ color: colors.purple }}>
                L.A.L.R. PT {lalr}
              </h1>
            </>
          )}
          <MyButton onClick={() => setStatus("loading")}>
            Generate Catan Game Title
          </MyButton>
        </>
      )}
      {status === "loading" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: color }}>{mes}</h2>
          <Loader type={spinner} color={color} height={200} width={200} />
        </div>
      )}
    </div>
  )
}

export default IndexPage
