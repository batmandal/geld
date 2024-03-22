const fs = require("fs").promises;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { connect2Database } = require("./database");

const { User } = require("./model/user.model");
const { Category } = require("./model/category.model");
const { log } = require("util");
const { Record } = require("./model/record.model");

// import { v4 as uuidv4 } from "uuid";

connect2Database();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/log-in", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "iim hereglegch algo",
    });
  }
  if (user.password !== password) {
    return res.status(401).json({
      message: "password buruu bn",
    });
  }

  const token = jwt.sign({ email }, "secret-key");

  res.json({
    token,
  });
});

// app.post("/sign-up", async (req, res) => {
//   const { email, password } = req.body;

//   const filePath = "src/data/users.json";

//   const usersRaw = await fs.readFile(filePath, "utf8");

//   const users = JSON.parse(usersRaw);

//   const user = users.find((user) => user.email === email);

//   if (user) {
//     return res.status(409).json({
//       message: "User already exists",
//     });
//   }

//   const id = uuidv4();

//   users.push({
//     id,
//     email,
//     password,
//   });

//   await fs.writeFile(filePath, JSON.stringify(users));

//   res.json({
//     message: "user created",
//   });
// });

app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;

  await User.create({
    email,
    password,
    updatedAt: new Date(),
    createdAt: new Date(),
  });

  res.json({
    message: "User created",
  });
});

app.get("/users", async (_req, res) => {
  const users = await User.find({});

  res.json(users);
});

// app.post("/records", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     console.log("h");
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const {
//       amount,
//       date,
//       time,
//       note,
//       recordType,
//       name,
//       recordIcon,
//       recordColor,
//     } = req.body;

//     const filePath = "src/data/records.json";

//     const recordsRaw = await fs.readFile(filePath, "utf8");

//     const records = JSON.parse(recordsRaw);

//     records.push({
//       recordColor,
//       recordIcon,
//       name,
//       recordType,
//       date,
//       time,
//       note,
//       amount,
//       userEmail: email,
//     });

//     await fs.writeFile(filePath, JSON.stringify(records));

//     res.json({
//       message: "Record created",
//     });
//   } catch (error) {
//     console.log("a", error);
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

// app.get("/records", async (req, res) => {
//   const { authorization } = req.headers;

//   // return res.json(authorization);

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized1",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     // return res.json(email);

//     const filePath = "src/data/records.json";

//     const recordsRaw = await fs.readFile(filePath, "utf8");

//     const records = JSON.parse(recordsRaw);

//     const usersRecords = records.filter((record) => record.userEmail === email);

//     res.json({
//       data: usersRecords,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

// app.post("/categories", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const { categoryName, isIcon, isColor } = req.body;

//     const filePath = "src/data/categories.json";

//     const categoriesRaw = await fs.readFile(filePath, "utf8");

//     const categories = JSON.parse(categoriesRaw);

//     categories.push({
//       isIcon,
//       categoryName,
//       isColor,
//       userEmail: email,
//     });

//     await fs.writeFile(filePath, JSON.stringify(categories));

//     res.json({
//       message: "Category created",
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;
  const {
    amount,
    // date,
    // time,
    note,
    recordType,
    name,
    recordIcon,
    recordColor,
  } = req.body;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const payload = jwt.verify(authorization, "secret-key");

  const { email } = payload;

  await Record.create({
    amount,
    // date,
    // time,
    note,
    recordType,
    name,
    recordIcon,
    recordColor,
    email,
  });

  res.json({ message: "Record created" });
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const payload = jwt.verify(authorization, "secret-key");

  const { email } = payload;

  const records = await Record.find({ email: email });

  return res.json(records);
});

app.post("/categories", async (req, res) => {
  const { authorization } = req.headers;
  const { categoryName, isIcon, isColor } = req.body;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const payload = jwt.verify(authorization, "secret-key");

  const { email } = payload;

  await Category.create({ categoryName, isIcon, isColor, email });

  res.json({ message: "Category created" });
});

app.get("/categories", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const payload = jwt.verify(authorization, "secret-key");

  const { email } = payload;

  const categories = await Category.find({ email: email });

  return res.json(categories);
});

// app.get("/categories", async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   try {
//     const payload = jwt.verify(authorization, "secret-key");

//     const { email } = payload;

//     const filePath = "src/data/categories.json";

//     const categoriesRaw = await fs.readFile(filePath, "utf8");

//     const categories = JSON.parse(categoriesRaw);

//     const userCategories = categories.filter(
//       (category) => category.userEmail === email
//     );

//     res.json({
//       data: userCategories,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
// });

const port = 3005;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
