import React from "react"
import { Container } from "./style"
import CursusBlock from "../CursusBlock"

const classes = ["Rekenen", "Taal", "Cambridge Chinese", "Courses in English"]

const CursusGrid = () => (
  <Container>
    {classes.map(i => (
      <CursusBlock name={i} />
    ))}
  </Container>
)

export default CursusGrid
