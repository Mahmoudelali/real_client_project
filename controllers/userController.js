import Model from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function getAll(req, res, next) {
    try {
        const response = await Model.find({});
        return res.status(200).send({ success: true, response });
    } catch (err) {
        return next(err);
    }
}
