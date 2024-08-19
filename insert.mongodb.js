use('e-store')

//inser one
// db.products.insertOne({name:"Banana",categoty: "fruits",price : {currency:"u-sh", amount:10000}})

//insert many
/*
db.products.insertMany([
    {name:"Timba Land", categoty:"shoes", price:{currency:"$", amount:5000}},
    {name:"Cabbage", categoty:"vegetables", price:{currency:"$", amount:0.7}},
    {name:"Apple Mango", categoty:"fruits", price:{currency:"$", amount:0.09}},
    {name:"Sweet Potatoes ", categoty:"roots", price:{currency:"$", amount:0.98}},


])
    */
//fetch
db.products.find({})