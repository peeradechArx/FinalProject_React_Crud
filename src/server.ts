import express from 'express';
const app = express();
const port = 3000;

// สร้างข้อมูลตัวอย่าง
const users = [
  {
    id: 1,
    fname: "",
    lname: "",
    username: "",
    avatar: ""
  },
];

// เส้นทาง API สำหรับการรับข้อมูลผู้ใช้
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
