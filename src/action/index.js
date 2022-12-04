
export const incNumber = (num) => {
    return {
        type: "increment",
        payload:num
    }
}

export const decNumber = () => {
    return {
        type: "decrement",
    }
}
