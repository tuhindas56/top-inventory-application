function handle404(req, res, next) {
    res.status(404).render("error")
}

function handleError(errors, req, res, next) {
    res.render("error", { errors })
}

module.exports = { handle404, handleError }
