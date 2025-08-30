const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "..")));

// 모든 GET 요청에 대해 index.html 반환 (SPA를 위한 설정)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// 404 에러 핸들러 - 모든 다른 경로를 index.html로 리다이렉트
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
