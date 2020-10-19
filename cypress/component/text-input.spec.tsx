import React from "react"
import { mount } from "cypress-react-unit-test"
import { TextInputComponent } from "../../src/components/text-input"
import "../../styles/globals.css"
describe("HelloWorld component", () => {
  it("works", () => {
    mount(<TextInputComponent />)
  })
})
