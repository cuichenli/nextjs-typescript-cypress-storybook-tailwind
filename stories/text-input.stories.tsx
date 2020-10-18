import React from "react"
import { TextInputComponent } from "../src/components/text-input"
import { Meta } from "@storybook/react/types-6-0"
export default {
  title: "story/text-input",
}

export const Primary: React.FunctionComponent = () => <TextInputComponent />
