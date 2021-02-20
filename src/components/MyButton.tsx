import React from "react"
import "./layout.css"
import { Fab, Action } from "react-tiny-fab"
import "react-tiny-fab/dist/styles.css"
import { colors } from "../colors"
import { ButtonHTMLAttributes } from "react"

export const MyButton: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...other
}) => {
  return (
    <button
      {...other}
      style={{
        backgroundImage: `linear-gradient(to right,${colors.redorange} , ${colors.darkred})`,
        color: colors.peach,
        border: "1px solid " + colors.peach,
      }}
      className="my-button"
    >
      {children}
    </button>
  )
}
