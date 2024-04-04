import { React, useState } from "react"

const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    const onValueHandleChange = (e) => {
        setValue(e.target.value)
    }

    return [value, onValueHandleChange]
}

export default useInput