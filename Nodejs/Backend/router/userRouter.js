const router = require("express").Router()
const userController = require("../controller/userController");

router.post("/create", userController.createUser)
router.post("/login", userController.login)

module.exports = router;