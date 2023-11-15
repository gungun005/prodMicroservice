if(process.env.NODE_ENV !== 'production'){
    const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
//const { resolve } = require('promise');

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const getFlipAllProduct=async(body)=>{
    console.log("Logging starts from here...")
    console.log("Getting the product from get flip product..!!")
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.find().toArray()
        console.log(data)
        return data
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const getFlipProduct=async (body)=>{
    console.log("hi i have different products");
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.find().toArray()
        console.log(data)
        return data
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const postFlipProduct=async(body)=>{
    console.log("in repo");
    console.log(body);
    console.log("you can updates products here");
    var item = {
        product: body.product,
        units: body.units,
    };
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const deleteFlipProduct=async(body)=>{
    console.log(body);
    console.log("I have the power to delete any user");
    let searchOptions = {};
    if(body.product != null && body.product !== ""){
        searchOptions.product = body.product;
    }
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.deleteOne(searchOptions)
        console.log(data)
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 

    
};
const updateFlipProduct=async (body)=>{
    console.log(body);
    let searchOptions = {};
    if(body.product != null && body.product !== ""){
        searchOptions.product = body.product;
    }
    console.log("hi i have updated product");
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.update(searchOptions, {$set: { units : body.units}})
        console.log(data)  
        }
    
    catch(err){
        console.log(err);
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const  getFlipAllProductById =async(body)=>{
    console.log(body);
    console.log("hi i have updated product");
    try{
        await client.connect()
        const db = client.db("flipComInfo");
        const coll = db.collection("flipComInfo");
        const data = await coll.find().toArray()
        console.log(data)
        return data
    }
    catch(err){
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
};
const getFlipSearchProduct=async(body)=>{
console.log("searching");
// try{
//     await client.connect()
//     const db = client.db("flipComInfo");
//     const coll = db.collection("flipComInfo");
//     const data = await coll.find({
//         "$or":[
//             {
//                 product:{$regex:body}
//             }
//         ]
//     })
//     console.log(data)
//     return data
// }
// catch(err){
//     console.log("Error occurred")
//     return err;
// }
// finally{
//     await client.close()
// } 
};

module.exports={
    getFlipAllProduct,
    getFlipProduct,
    postFlipProduct,
    deleteFlipProduct,
    updateFlipProduct,
    getFlipAllProductById,
    getFlipSearchProduct
}