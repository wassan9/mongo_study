const mongoose = require("mongoose");
// 下記URIのmongoDBのデフォルトのポートが27017で、その後の27017/【DB名】部分がどのDBを使用するかになっている
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true}) //IPv6(://localhost:27017)ではなく、IPv4を使用（://127.0.0.1:27017）
  .then(() => {
    console.log("コネクションOK！！！");
  })
  .catch(err => {
    console.log("コネクションエラー！");
    console.log(err);
  }
)
// mongooseのModelのスキーマを定義
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const amadeus = new Movie({ title: "Amadeus", year: 1996, score: 9.2, rating: "R" });

// Movie.insertMany([ // insertManyメソッドはDBへの挿入に時間がかかりPromiseが返ってくるので非同期処理になる
//   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
//   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
//   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
//   { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
//   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
// ]).then(data => {
//   console.log("成功！");
//   console.log(data);
// })

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "コネクションエラー！！！"));
// db.once("open", function() {
//   console.log("接続OK！！！");
// });