const mongoose = require("mongoose");
const url = "mongodb+srv://pavi:pavi@cluster0.ydkuj.mongodb.net/UrlShortnerAuth?retryWrites=true&w=majority"
module.exports = () => {
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
	
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

};

