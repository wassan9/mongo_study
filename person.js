const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true}) //IPv6(://localhost:27017)ではなく、IPv4を使用（://127.0.0.1:27017）
  .then(() => {
    console.log("コネクションOK!!!");
  })
  .catch(err => {
    console.log("コネクションエラー！");
    console.log(err);
  }
);

const personSchema = new mongoose.Schema({
  first: String,
  last: String
});

personSchema.virtual("fullName").get(function() {
  return `${this.first} ${this.last}`;
});

// pre()はsaveの前に実行するミドルウェア
personSchema.pre("save", async function() {
  this.first = "ほげ";
  this.last = "もげ"
  console.log("今から保存するよ");
})

// post()はsaveの後に呼ばれるミドルウェア
personSchema.post("save", async function() {
  console.log("保存したよ");
})

const Person = mongoose.model("Person", personSchema);