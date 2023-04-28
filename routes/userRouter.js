import express from "express";
const router = express.Router();
import {
    getAll,
    getUsers,
    get,
    register,
    login,
    logout,
    del,
    isLoggedIn,
    addAdmin,
    addSuperAdmin,
} from "../controllers/userController.js";
import testPhone from "../middleware/validatePhone.js";
import { admin, superAdmin, verifyUser } from "../middleware/auth.js";
import upload from "../middleware/imagesUpload.js";

// get users and admin and superAdmins
router.get("/", verifyUser, admin, superAdmin, getAll);

// get users
router.get("/users", verifyUser, admin, getUsers);

// check if the user is logged in
router.get("/is-logged-in", isLoggedIn);

// get user by id
router.get("/:id", verifyUser, get);

// register a new user account
router.post("/register", upload, testPhone, register);

// add a new admin account
// router.post("/add-admin", verifyUser, admin, superAdmin, testPhone, addAdmin);
router.post(
    "/add-admin",
    verifyUser,
    admin,
    superAdmin,
    upload,
    testPhone,
    addAdmin
);

// add a new super admin account
router.post(
    "/add-super-admin",
    verifyUser,
    admin,
    superAdmin,
    upload,
    testPhone,
    addSuperAdmin
);

// login
router.post("/login", login);

// logout
router.post("/logout", logout);

// delete a user by id
router.delete("/:id", verifyUser, admin, superAdmin, del);

export default router;
