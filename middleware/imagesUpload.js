import multer from "multer";

// naming the image and saving its name to the database and the image to the uploads folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
        );
    },
});
const upload = multer({ storage }).single("image");

export default upload;
