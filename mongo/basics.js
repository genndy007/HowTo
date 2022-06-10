// use database
use ip91

// db.<collection_name>.method()

// insert
db.kochev_hh.insertOne({
    "FirstName": "Aaron", 
    "LastName": "Smith", 
    "Title": "Owner", 
    "HireDate": new Date("2020-12-12")
})

// get one
db.kochev_hh.findOne({FirstName: "Robert", LastName: "King"})

// get sorted
db.kochev_hh.find({"Title": "Sales Representative"}).sort({LastName: 1})

// get where
db.kochev_hh.find({
    HireDate: {
        $lt: new Date('1994-01-01'), 
        $gt: new Date('1993-01-01')
    }
})

// update
db.kochev_hh.updateOne(
    {FirstName: "Janet", LastName: "Leverling"}, 
    {$set: {"Orders": [
        {OrderId: 1, OrderDate: new Date('2000-01-10'), OrderSum: 2000}, 
        {OrderId: 2, OrderDate: new Date('2000-02-10'), OrderSum: 3000}, 
        {OrderId: 3, OrderDate: new Date('2001-10-10'), OrderSum: 4000}
    ]
}})
db.kochev_hh.updateMany({}, {$set: {"Country": "USA"}})

// delete
db.kochev_hh.deleteMany({"Country": null})
db.kochev_hh.deleteMany({})

// drop 
db.kochev_hh.drop()   // collection
db.dropDatabase()     // db




