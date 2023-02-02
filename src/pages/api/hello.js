// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = {
  name: "Himanshu Kumar Rana",
  reg_no: "0832CS191075",
  email: "er.ranahimanshu@gmail.com",
};

function convertToBase64(data) {
  const base64Data = {};
  Object.keys(data).forEach((key) => {
    base64Data[key] = data[key];
    base64Data[`b_${key}`] = btoa(data[key]);
  });
  return base64Data;
}

const base64Data = convertToBase64(data);
// console.log(base64Data);

// fetch("http://localhost:3000/api/hello", {
//   Method: "POST",
//   Headers: {
//     Accept: "application.json",
//     "Content-Type": "application/json",
//   },
//   Body: JSON.stringify({ base64Data }),
//   Cache: "default",
// });

export default function handler(req, res) {
  res.status(200).json({ base64Data });
}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/HimanshukrRana/login_auth.git
// git push -u origin main
