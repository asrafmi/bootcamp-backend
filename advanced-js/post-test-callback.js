
// create function sum
function sum(a, b, result) {
    result(a + b)   
}

// create function minus
function min(a, b, result) {
    result(a - b)
}

// create function divide
function div(a, b, result) {
    result(a / b)   
}

// create function times
function times(a, b, result) {
    result(a * b)
}

// create function square
function square(a, b, result) {
    result(a ** b)
}

sum(100, 5, function(sumResult) {
    div(sumResult, 15, function(divResult) {
        min(divResult, 7, function(minResult) {
            sum(minResult, 50, function(sumResult) {
                div(sumResult, 4, function(divResult) {
                    times(divResult, 3, function(timesResult) {
                        sum(timesResult, 120, function(sumResult) {
                            console.log(`a) 100 + 5 / 15 - 7 + 50 / 4 * 3 + 120 = ${sumResult}`);
                        })
                    })
                })
            })
        })
    })
})


// b. 130 * 2 / 10 - 80 + 5 + 50 - 20 / 40
times(130, 2, function(timesResult) {
    div(timesResult, 10, function(divResult) {
        min(divResult, 80, function(minResult) {
            sum(minResult, 5, function(sumResult) {
                sum(sumResult, 50, function(sumResult) {
                    min(sumResult, 20, function(minResult) {
                        div(minResult, 40, function(divResult) {
                            console.log(`b) 130 * 2 / 10 - 80 + 5 + 50 - 20 / 40 = ${divResult}`);
                        })
                    })
                })
            })
        })
    })
})

// c. 400 / 5 * 4 - 90 + 50 / 2 * 5 * 10
div(400, 5, function(divResult) {
    times(divResult, 4, function(timesResult) {
        min(timesResult, 90, function(minResult) {
            sum(minResult, 50, function(sumResult) {
                div(sumResult, 2, function(divResult) {
                    times(divResult, 5, function(timesResult) {
                        times(timesResult, 10, function(timesResult) {
                            console.log(`c) 400 / 5 * 4 - 90 + 50 / 2 * 5 * 10 = ${timesResult}`);
                        })
                    })
                })
            })
        })
    })
})

// d. 90 * 5 / 9 ** 2 / 100 - 120 + 75 * 3
times(90, 5, function(timesResult) {
    div(timesResult, 9, function(divResult) {
        square(divResult, 2, function(squareResult) {
            div(squareResult, 100, function(divResult) {
                min(divResult, 120, function(minResult) {
                    sum(minResult, 75, function(sumResult) {
                        times(sumResult, 3, function(timesResult) {
                            console.log(`d) 90 * 5 / 9 ** 2 / 100 - 120 + 75 * 3 = ${timesResult}`);
                        })
                    })
                })
            })
        })
    })
})

// e. 75 * 2 / 50 ** 3 / 9 - 80 + 100 / 5
times(75, 2, function(timesResult) {
    div(timesResult, 50, function(divResult) {
        square(divResult, 3, function(squareResult) {
            div(squareResult, 9, function(divResult) {
                min(divResult, 80, function(minResult) {
                    sum(minResult, 100, function(sumResult) {
                        div(sumResult, 5, function(divResult) {
                            console.log(`e) 75 * 2 / 50 ** 3 / 9 - 80 + 100 / 5 = ${divResult}`);
                        })
                    })
                })
            })
        })
    })
})

// f. 200 * 4 / 10 + 2500 - 300 * 2 * 3 / 500 * 4 + 1300
times(200, 4, function(timesResult) {
    div(timesResult, 10, function(divResult) {
        sum(divResult, 2500, function(sumResult) {
            min(sumResult, 300, function(minResult) {
                times(minResult, 2, function(timesResult) {
                    times(timesResult, 3, function(timesResult) {
                        div(timesResult, 500, function(divResult) {
                            times(divResult, 4, function(timesResult) {
                                sum(timesResult, 1300, function(sumResult) {
                                    console.log(`f) 200 * 4 / 10 + 2500 - 300 * 2 * 3 / 500 * 4 + 1300 = ${sumResult}`);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// g. 200 * 4 / 10 + 12 / 2 * 10 / 12 ** 3 * 5 + 120
times(200, 4, function(timesResult) {
    div(timesResult, 10, function(divResult) {
        sum(divResult, 12, function(sumResult) {
            div(sumResult, 2, function(divResult) {
                times(divResult, 10, function(timesResult) {
                    div(timesResult, 12, function(divResult) {
                        square(divResult, 3, function(squareResult) {
                            times(squareResult, 5, function(timesResult) {
                                sum(timesResult, 120, function(sumResult) {
                                    console.log(`g) 200 * 4 / 10 + 12 / 2 * 10 / 12 ** 3 * 5 + 120 = ${sumResult}`);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})