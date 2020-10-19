import React from "react"

export const TextInputComponent: React.FunctionComponent = () => {
  return (
    <div>
      <input
        placeholder="type"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
    </div>
  )
}
