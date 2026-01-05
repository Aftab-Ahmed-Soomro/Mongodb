use("ecommerce")

// db.contacts.deleteOne({name: "Bob"})


db.orders.deleteMany({status: "Delivered"})