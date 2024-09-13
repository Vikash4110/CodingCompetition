require('dotenv').config();
const express = require('express');
const connectDb = require('./utils/db');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error-middleware');
const path = require('path');
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-router');
const adminRoute = require('./router/admin-router');
const teacherRoute = require('./router/teacher-router');
const feedbackRoute = require('./router/feedback-router');
const Port = process.env.PORT || 3000;
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://feedback-ptu.vercel.app','https://ratemytutor-ptu.vercel.app'],
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  credentials: true,
};
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use(cors(corsOptions));
app.use(express.json());

app.use('api/auth', authRoute);
app.use('api/admin', adminRoute);
app.use('api/data/teacher', teacherRoute);
app.use('api/data/feedback',feedbackRoute)
app.use('api/form', contactRoute);

// Error handling middleware
app.use(errorMiddleware);

connectDb()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
