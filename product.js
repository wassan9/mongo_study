const mongoose = require("mongoose");
// 下記URIのmongoDBのデフォルトのポートが27017で、その後の27017/【DB名】部分がどのDBを使用するかになっている
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true}) //IPv6(://localhost:27017)ではなく、IPv4を使用（://127.0.0.1:27017）
  .then(() => {
    console.log("コネクションOK!!!");
  })
  .catch(err => {
    console.log("コネクションエラー！");
    console.log(err);
  }
);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 10
  },
  price: {
    type: Number,
    required: true,
    min: [0, "priceは0より大きい値にしてください"]
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enum: ["S", "M", "L"]
  }
});

productSchema.methods.greet = function() {
  console.log("ハロー！やっほー！");
}

const Product = mongoose.model("Product", productSchema);

// const bike = new Prooduct({
//   name: "ジャージ",
//   price: 2980,
//   categories: ["サイクリング"],
//   size: "XS"
// });

// bike.save()
// .then(data => {
//   console.log("成功!!!");
//   console.log(data);
// })
// .catch(err => {
//   console.log("失敗...");
//   // console.log(err.errors.name.properties.message);
//   console.log(err.errors)
// })

// Prooduct.findOneAndUpdate({name: "空気入れ"},{price: -1980}, {new: true, runValidators: true})
// .then(data => {
//   console.log("成功!!!");
//   console.log(data);
// })
// .catch(err => {
//   console.log("失敗...");
//   // console.log(err.errors.name.properties.message);
//   console.log(err.errors)
// })