const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const dotenv = require("dotenv");

dotenv.config();

aws.config.update({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
});

const s3 = new aws.S3();

const upload = multer({
  storage : multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    acl: "public-read",
    metadata: function (req, file, cb) {
      console.log("hello",file);
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, "tweet"+Date.now().toString()+file.originalname);
    }
  })
});

module.exports = upload;
