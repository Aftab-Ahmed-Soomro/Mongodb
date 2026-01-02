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

cmds:
 
1) use db
2) show db
3) show dbs
4) show collection
5) show collections
6) cls 
7) db.collection.insertOne({
  "name":"Aftab Ahmed"
})
8) db.collection.insertMany([{
  "name":"Aftab Ahmed"
},{
  "name":"Zeeshan Haider"
}])