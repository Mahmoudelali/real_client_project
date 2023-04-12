import mongoose from "mongoose";
import bcrypt from "bcrypt";
import parsePhoneNumberFromString from "libphonenumber-js";

const { Schema, model } = mongoose;

let validateEmail = function (email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: "username is required",
            trim: true,
        },
        phone: {
            type: String,
            required: "phone number is required",
            trim: true,
            unique: true,
            validate: {
                validator: function (v) {
                    const phoneNumber = parsePhoneNumberFromString(v, this.countryCode);
                    return phoneNumber && phoneNumber.isValid();
                },
                message: (props) =>
                    `${props.value} is not a valid phone number for ${this.countryCode}`,
            },
        },
        country_code: {
            type: String,
            required: "country code is required",
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            validate: [validateEmail, "Please fill a valid email address"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        password: {
            type: String,
            required: "password is required",
        },
        image: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            enum: ["user", "admin", "superAdmin"],
            default: "user",
        },
    },
    {
        timestamps: true,
        collection: "User",
    }
);

userSchema.pre("save", function (next) {
    bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(this.password, salt))
        .then((hashPassword) => {
            this.password = hashPassword;
            next();
        })
        .catch((err) => {
            next(err);
        });
});

const User = model("User", userSchema);
export default User;
