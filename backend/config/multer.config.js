const multer = require('multer');
 
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null,  'C:\\Users\\selcuk\\OneDrive\\Masaüstü\\d')
	},
	filename: (req, file, cb) => {
	  cb(null,file.originalname)
	}
});
 
var upload = multer({storage: storage});
 
module.exports = upload;