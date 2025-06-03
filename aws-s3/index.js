require("dotenv").config();
const express = require("express");
const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

// AWS S3 setup
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Multer config (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const fileName = `${crypto.randomUUID()}${path.extname(
    req.file.originalname
  )}`;

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  try {
    await s3.send(new PutObjectCommand(uploadParams));
    res.status(200).json({ message: "File uploaded", key: fileName });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: "Upload failed", error });
  }
});

// Optional: generate a presigned upload URL
app.get("/presigned-url", async (req, res) => {
  const key = `${crypto.randomUUID()}.jpg`; // Example for image file
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    ContentType: "image/jpeg",
  });

  try {
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    res.json({ url, key });
  } catch (err) {
    console.error("Presigned URL Error:", err);
    res.status(500).json({ message: "Failed to generate URL" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
