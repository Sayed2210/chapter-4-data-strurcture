const range = (start: number, end: number , step: number = 1) : number[] => {
    const result = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i)
        }
    }
    return result
}

console.log(range(1, 10))
console.log(range(5, 2, -1))