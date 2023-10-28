const flipServices=require('../services/flipServices');

const getFlipAllProduct=(req,res)=>{
    let getFlipAllProduct=flipServices.getFlipAllProduct(req.body);
    res.send( getFlipAllProduct);
};
const getFlipProduct=(req,res)=>{
    console.log("yeh wala kaam krha hae");
    console.log(req.body);
    let  getFlipProduct=flipServices.getFlipProduct(req.body);
    res.send(getFlipProduct);
};
const postFlipProduct=(req,res)=>{
    let postFlipProduct=flipServices.postFlipProduct(req.body);
    res.send(postFlipProduct);
};
const deleteFlipProduct=(req,res)=>{
    let deleteFlipProduct=flipServices.deleteFlipProduct(req.body);
    res.send( deleteFlipProduct);
};
const updateFlipProduct=(req,res)=>{
    let updateFlipProduct=flipServices.updateFlipProduct(req.body);
    res.send( updateFlipProduct);
};
const  getFlipAllProductById =(req,res)=>{
    let  getFlipAllProductById=flipServices.getFlipAllProductById(req.body);
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