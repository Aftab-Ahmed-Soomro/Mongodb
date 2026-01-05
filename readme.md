<!-- Basics -->

you can store data in:
1) local db --> array
2) file
3) sql 
4) mongo

mongodb have two types:
1) mongodb Compass (GUI)
2) mongosh (Shell)

db --> collection(s) --> document(s) in json form 

id is in the form of objectid --> ('1232b32828j')

Object id represented as _id

DBMS query is faster than frontend/backend functionalities 

<!-- CMDS: -->
 
1) use db
2) show db
3) show dbs
4) show collection
5) show collections
6) cls 
7) db.dropDatabase()

<!-- Insert -->
8) db.collection.insertOne({
  "name":"Aftab Ahmed"
})
9) db.collection.insertMany([{
  "name":"Aftab Ahmed"
},{
  "name":"Zeeshan Haider"
}])


<!-- Find -->
10) db.find() --> all data in collection
11) db.products.find({name: "Wireless Mouse"}) --> single find or same name many
12) db.products.find({}, {name: 1, price: 1, _id: 0}) --> find specific entities
13) db.products.limit(2) --> pagination
14) db.products.sort(1) --> ascending
15) db.products.sort(-1) --> descending
16) db.products.skip(10)

<!-- Comparison Operators -->

17) $gt
18) $gte
19) $lt
20) $lte
21) $or
22) $and

<!-- Update -->

1) set
2) inc
3) push

23) db.products.updateOne(
  {name: "Gaming Laptop"},
  {$set: {price: 90000}}
)

24) db.products.updateMany(
  {category: "Electronics"},
  {$set: {price: 500}}
)

25) db.products.updateMany(
  {category: "Electronics"},
  {$inc: {price: 500}}
)

<!-- Delete -->

26) deleteOne
27) deleteMany