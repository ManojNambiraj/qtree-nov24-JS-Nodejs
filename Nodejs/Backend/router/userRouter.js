const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../Auth/auth");

router.post("/create", userController.createUser);
router.post("/login", userController.login);
router.get("/users", auth, userController.users);
router.get("/user/:id", userController.user);
router.put("/edit/:id", userController.editUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
