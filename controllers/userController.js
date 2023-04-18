import Model from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// get all users and admins and super admin
export async function getAll(req, res, next) {
    try {
        await Model.find({})
            .then((response) => res.status(200).json({ success: true, response }))
            .catch((err) => res.status(404).json({ success: false, err }));
    } catch (err) {
        return next(err);
    }
}

// get all users
export async function getUsers(req, res, next) {
    try {
        await Model.find({ role: "user" })
            .then((response) => res.status(200).json({ success: true, response }))
            .catch((err) => res.status(404).json({ success: false, err }));
    } catch (err) {
        return next(err);
    }
}

// get user by id
export async function get(req, res, next) {
    try {
        let { id } = req.params;
        await Model.find({ _id: id })
            .then((response) => res.status(200).json({ success: true, response }))
            .catch((err) =>
                res.status(404).json({ success: false, message: "user not found", err })
            );
    } catch (err) {
        return next(err);
    }
}

// register a new user
export async function register(req, res, next) {
    try {
        let { username, phone, email, password } = req.body;
        if (!((email && password) || (phone && password))) {
            return res.status(400).json({
                success: false,
                message: "Either phone or email is required for registration",
            });
        }
        req.body.role = "user";
        let doc = new Model(req.body);
        if (!(username && password)) {
            return res
                .status(400)
                .json({ success: false, message: "All inputs are required" });
        }
        await Model.create(doc)
            .then((response) => {
                if (response) {
                    const token = jwt.sign(
                        { username, phone, email, role: doc.role },
                        process.env.TOKEN_KEY,
                        { expiresIn: "5h" }
                    );
                    response.password = undefined;

                    res.status(200).json({ success: true, response, token });
                }
            })
            .catch((err) => {
                console.log(err);

                return err.code === 11000
                    ? res
                        .status(404)
                        .json({ sucess: false, err: "Email or Phone already in use" })
                    : res.status(404).json({ sucess: false, err });
            });
    } catch (err) {
        return next(err);
    }
}

// add a new admin
export async function addAdmin(req, res, next) {
    try {
        let { username, phone, email, password } = req.body;
        if (!((email && password) || (phone && password))) {
            return res.status(400).json({
                success: false,
                message: "Either phone or email is required for registration",
            });
        }
        req.body.role = "admin";
        let doc = new Model(req.body);
        if (!(username && password)) {
            return res
                .status(400)
                .json({ success: false, message: "All inputs are required" });
        }
        await Model.create(doc)
            .then((response) => {
                if (response) {
                    const token = jwt.sign(
                        { username, phone, email, role: doc.role },
                        process.env.TOKEN_KEY,
                        { expiresIn: "5h" }
                    );
                    response.password = undefined;
                    res.status(200).json({ success: true, response, token });
                }
            })
            .catch((err) => {
                console.log(err);

                return err.code === 11000
                    ? res
                        .status(404)
                        .json({ sucess: false, err: "Email or Phone already in use" })
                    : res.status(404).json({ sucess: false, err });
            });
    } catch (err) {
        return next(err);
    }
}

// add a super admin
export async function addSuperAdmin(req, res, next) {
    try {
        let { username, phone, email, password } = req.body;
        if (!((email && password) || (phone && password))) {
            return res.status(400).json({
                success: false,
                message: "Either phone or email is required for registration",
            });
        }
        req.body.role = "superAdmin";
        let doc = new Model(req.body);
        if (!(username && password)) {
            return res
                .status(400)
                .json({ success: false, message: "All inputs are required" });
        }
        await Model.create(doc)
            .then((response) => {
                if (response) {
                    const token = jwt.sign(
                        { username, phone, email, role: doc.role },
                        process.env.TOKEN_KEY,
                        { expiresIn: "5h" }
                    );
                    response.password = undefined;
                    res.status(200).json({ success: true, response, token });
                }
            })
            .catch((err) => {
                console.log(err);

                return err.code === 11000
                    ? res
                        .status(404)
                        .json({ sucess: false, err: "Email or Phone already in use" })
                    : res.status(404).json({ sucess: false, err });
            });
    } catch (err) {
        return next(err);
    }
}

// user login
export async function login(req, res, next) {
    try {
        let { email, password, phone, username } = req.body;
        if (!((email && password) || (phone && password))) {
            return res
                .status(400)
                .json({ success: false, message: "All inputs are required" });
        }
        await Model.findOne({ $or: [{ phone }, { email }] }).then(
            async (response) => {
                console.log(response);
                if (response && (await bcrypt.compare(password, response.password))) {
                    const token = jwt.sign(
                        {
                            username: response.username,
                            phone: response.phone,
                            email: response.email,
                            role: response.role,
                        },
                        process.env.TOKEN_KEY,
                        { expiresIn: "5h" }
                    );
                    response.password = undefined;
                    res.cookie("auth_token", token, { maxAge: 5 * 60 * 60 * 1000 });
                    res.status(200).json({ sucess: true, response, token });
                } else {
                    res.status(400).json({ sucess: false, err: "Invalid Credentials" });
                }
            }
        );
    } catch (err) {
        return next(err);
    }
}

// user logout
export function logout(req, res, next) {
    try {
        res.clearCookie("auth_token");
        return res.status(200).send("logged out");
    } catch (err) {
        res.send(err.message);
    }
}

// delete a user
export async function del(req, res, next) {
    try {
        let { id } = req.params;
        await Model.findByIdAndDelete({ _id: id })
            .then((response) =>
                res.status(200).json({
                    success: true,
                    response,
                    message: "User deleted successfully",
                })
            )
            .catch((err) =>
                res.status(404).json({ success: false, message: "user not found", err })
            );
    } catch (err) {
        return next(err);
    }
}

// check if the user has a token and is logged in
export function isLoggedIn(req, res, next) {
    // let token = req.headers["auth_token"];
    let token = req.cookies["auth_token"];
    if (!token) {
        return res.status(403).json({ success: false, message: "no" });
    } else {
        try {
            const decoded = jwt.verify(token, process.env.TOKEN_KEY);
            res.status(200).json({ success: true, message: decoded });
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }
    }
}
