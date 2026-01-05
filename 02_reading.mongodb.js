use("ecommerce")

// db.products.find()

// db.products.find({name: "Wireless Mouse"})

// db.products.find({category: "Electronics"})

// db.products.find({price: {$gt: 1000}})

// db.products.find({price: {$gte: 1000, $lte: 50000}})

// db.products.find({$or: [{price: {$gte: 1000}}, {category: "Electronics"}]})

// db.products.find({$and: [{price: {$gte: 1000}}, {category: "Electronics"}]})

// db.products.find({}, {name: 1, price: 1, _id: 0})

// Pagination Concepts

// db.products.find().sort({price: -1}).limit(2)

// db.products.find().skip(1).limit(1)