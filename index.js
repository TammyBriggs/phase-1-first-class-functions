function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction() {
    return function cow () {}
}
function returnsAnAnonymousFunction() {
    return function () {}
}