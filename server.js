//load all configurations 
let config = require('./src/config/configuration'); //this will load all config of env varables
const { port } = config;
let express = require("express");
let app = express();


require('./src/model/index'); //load db connection
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')


app.use('/weather', require('./src/routes/weather'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.status(404).json({
    success: false,
    message: "route not found",
    data: null,
  });
});

// error handler
app.use(function (err, req, res, next) {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
    data: null
  });
});

app.listen((port), (error, res) => {
  if (error) {
    console.log("error ", error);
  } else {
    console.log("server is running on port", port);
  }
})