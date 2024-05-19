if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv").config({ path: `${__dirname}/../.env` });
}

const mongoose = require("mongoose");
const { resolve, reject } = require('promise');
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getFlipAllProduct = async (body) => {
  console.log("Logging starts from here...");
  console.log("Getting the product from get flip product..!!");
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.find().toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};

const getFlipProduct = async (body) => {
  console.log("hi i have different products");
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.find().toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};

/*
    This function uses middle-ware express-validator to validate that the request is following the required schema. Came up with this solution since model.save() is calling the DB & collection which doesn't seems fine. So we came to this approach.
    The expected schema is a middleware that can be seen in routes and this is the ones we are consuming. Others are also expected to follow similar approach.
*/

const postFlipProduct = async (body) => {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.insertOne(body);
    return data.acknowledged;
};

/*
    Read about API Responses for different scenarios:
        EX: 404, 201,500
    Delete feature will be utilized such that any element if bought by the customer 
    so the total number of units will be decreased by the quantities user bought.
*/
const deleteFlipProduct = async (body) => {
  console.log(body);
  console.log("I have the power to delete any user");
  let searchOptions = {};
  let deleteValue = Number(-1);
  console.log(searchOptions);
  // search option should be comparny name and name of object so to act as combo
  // lays chips, uncle chips
  // make change in searchoptions
  if (body.name != null && body.name !== "") {
    searchOptions.name = body.name;
  }
  if (body.company != null && body.company !== "") {
    searchOptions.company = body.company;
  }
  // If the user doesn't provides any value we'll delete only 1 instance
  // otherwise we'll delete the units provided by the user.
  if (body.units != null && body.units !== "") {
    deleteValue = -1 * Number(body.units);
  }

  // searchOptions = {
  //     "name" : "chocolate",
  //     "company" : "nestle"
  // }
  // will be taken care at DB.
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.findOneAndUpdate(searchOptions, {
      $inc: { units: deleteValue },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};
/*
    1. Search the user where company and product provided.
    2. Update details like add units and change prices.
    3. Why ? => This will be utilized by the Admin of the store.   
    based on product and company -> enhance on the same     
*/ 
const updateFlipProduct = async (body) => {
  console.log(body);
  let searchOptions = {};
  if (body.product != null && body.product !== "") {
    searchOptions.product = body.product;
  }
  
  console.log("hi i have updated product");
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.updateOne(searchOptions, {
      $set: {$inc:{ units: body.units }},
    });
    data=await coll.updateOne(searchOptions,{
        $set:{price:body.price},
    });
    console.log(data);
  } catch (err) {
    console.log(err);
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};
const getFlipAllProductById = async (body) => {
  console.log(body);
  console.log("hi i have updated product");
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.find().toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};
/*
    The search option will be used to search for given element or the product in the inventory as requested by the user.
    We'll use this where we have search icon on the search bar of the UI.
*/
const getFlipSearchProduct = async (body) => {
  console.log("searching");
  console.log(body);
  let searchOptions = {};
  if (body.name != null && body.name !== "") {
    searchOptions.name = new RegExp(body.name, "i");
  }
  if (body.company != null && body.company!== "") {
    searchOptions.company = new RegExp(body.company, "i");
  }
  // make the same for company name and product name.
  console.log("hi i have updated product");
  try {
    await client.connect();
    const db = client.db("flipComInfo");
    const coll = db.collection("flipComInfo");
    const data = await coll.find(searchOptions).toArray();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    console.log("Error occurred");
    return err;
  } finally {
    await client.close();
  }
};

module.exports = {
  getFlipAllProduct,
  getFlipProduct,
  postFlipProduct,
  deleteFlipProduct,
  updateFlipProduct,
  getFlipAllProductById,
  getFlipSearchProduct,
};
