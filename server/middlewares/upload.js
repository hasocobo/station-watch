const multer = require("multer");

// Dosya depolama konfigürasyonu
const storage = multer.memoryStorage(); // Fotoğrafı bellekte tut

// Dosya filtreleme
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only images are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;