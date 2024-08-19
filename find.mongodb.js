use('e-store')
//fetching - find, findOne

//find - returs an arrays of items or []
db.products.find({})

//findOne - returns an object or null
db.products.findOne({})

/*Methods */
//limit
db.products.find({}).limit(2)
//skip
db.products.find({}).skip(2)
//sort
db.products.find({}).sort({"price.amount":-1})
//count
db.products.find({}).count()



/*query parameter*/
db.products.find({categoty:"fruits" })
//operators: $gt, $lt, $eq, $and, $or, $nor
db.products.find({"price.amount":{$gte:10000} })
db.products.find({$nor:[{categoty:'fruits'}, {"price.currency":'$'}]})

db.products.find({name:{$nin:['Mango', 'Timba Land']}})


/*Projection parameter */
//- enables us to select the fields to fetch
db.products.find({},{name:1, "_id":0})

