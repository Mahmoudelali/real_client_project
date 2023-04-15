import { parsePhoneNumber } from "libphonenumber-js";

// validates Phone using the libphonenumber-js library
function validatePhoneNumber(phoneNumber) {
    try {
        const parsedPhoneNumber = parsePhoneNumber(phoneNumber); // Parse the phone number
        if (!parsedPhoneNumber) {
            // Invalid phone number
            return {
                isValid: false,
                error: { message: "phone number is not a valid phone number" },
            };
        } else {
            if (!parsedPhoneNumber.isValid()) {
                return {
                    isValid: false,
                    error: {
                        message: "phone number is not valid according to country code",
                    },
                };
            }
            return {
                isValid: true,
                parsedPhoneNumber,
            };
        }
    } catch (error) {
        return { isValid: false, error };
    }
}

// test if we have a phone number in the body
export default function testPhone(req, res, next) {
    if (req.body.phone) {
        const result = validatePhoneNumber(req.body.phone);
        if (result.isValid === false) {
            return res.status(422).send({
                success: false,
                message: "Phone number is not valid",
                error: result.error.message,
            });
        }
        req.body.country = result.parsedPhoneNumber.country;
        req.body.countryCallingCode = result.parsedPhoneNumber.countryCallingCode;
        req.body.phone = result.parsedPhoneNumber.number;
    }
    next();
}
