use("e-store")
//get all products
db.products.find({}, {name:1})

//update -updateMany/updateOne
//db.products.updateMany({age:"Banana"}, {$set:{name:"Ndizi"}})
//db.products.find({}, {name:1})
//update one
//db.products.updateOne({name:"Ndizi"}, {$set:{name:"Banana"}})
//db.products.find({}, {name:1})

//
// db.products.findOneAndUpdate({name:'Timba Land'}, {$set:{name:"Timber Land"}})
db.products.find({}, {name:1, price:1})
//update all products whose price is 10k to 15k
// db.products.updateMany({"price.amount":10000}, {$set:{"price.amount":15000}})
db.products.find({}, {name:1, price:1})
//update all prodcuts whose currency is $ to 75%
db.products.updateMany({$and:[{"price.currency":"$"}, {"price.amount":{$gte:10}}]}, {$mul:{"price.amount":0.75}})

db.products.find({}, {name:1, price:1})
