export const required = (value: string) => {
    if (value) return undefined
    else return "Field is required"
}

export const maxLength = (length: number) => {
    return (value: string) => {
        if (value.length < length) return undefined
        else return `Max length is ${length} symbols`
    }
}