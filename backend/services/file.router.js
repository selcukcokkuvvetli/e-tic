let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

let fileWorker = require('../config/file.controller.js');

router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

router.get('/api/file/all', fileWorker.listUrlFiles);
 
router.get('/api/file/:filename', fileWorker.downloadFile);
 
module.exports = router;