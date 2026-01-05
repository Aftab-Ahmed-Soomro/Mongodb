use("ecommerce")

// db.products.updateOne(
//   {name: "Gaming Laptop"},
//   {$set: {price: 90000}}
// )

// db.products.updateMany(
//   {category: "Electronics"},
//   {$set: {price: 500}}
// )

// db.products.updateMany(
//   {category: "Electronics"},
//   {$inc: {stock: 11}}
// )

// db.products.find()

db.products.updateOne(
  {name: "Wireless Mouse"},
  {$push: {tags: "Mouse"}}
)