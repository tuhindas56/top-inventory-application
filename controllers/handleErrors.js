function handle404(req, res, next) {
    res.status(404).send("Page not found")
}

function handleError(err, req, res, next) {
    res.sendStatus(500)
}

module.exports = { handle404, handleError }
