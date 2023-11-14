const flipServices=require('../services/flipServices');

const getFlipAllProduct= async (req,res) => {
    let getFlipAllProduct=await flipServices.getFlipAllProduct(req.body);
    res.send( getFlipAllProduct);
};
const getFlipProduct= async (req,res)=>{
    console.log("yeh wala kaam krha hae");
    console.log(req.body);
    let  getFlipProduct=await flipServices.getFlipProduct(req.body);
    res.send(getFlipProduct);
};
const postFlipProduct= async(req,res)=>{
    console.log("in controller");
    console.log(req.body);
    let postFlipProduct=await flipServices.postFlipProduct(req.body);
    res.send(postFlipProduct);
};
const deleteFlipProduct= async (req,res)=>{
    let deleteFlipProduct= await flipServices.deleteFlipProduct(req.body);
    res.send( deleteFlipProduct);
};
const updateFlipProduct= async (req,res)=>{
    let updateFlipProduct= await flipServices.updateFlipProduct(req.body);
    res.send( updateFlipProduct);
};
const  getFlipAllProductById = async (req,res)=>{
    let  getFlipAllProductById= await flipServices.getFlipAllProductById(req.body);
    res.send( getFlipAllProductById);
};
    
    module.exports={
        getFlipAllProduct,
        getFlipProduct,
        postFlipProduct,
        deleteFlipProduct,
        updateFlipProduct,
        getFlipAllProductById
    }