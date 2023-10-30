const flipRepository=require('../repository/flipRepository')

const getFlipAllProduct=()=>{
    let getFlipAllProduct=flipRepository.getFlipAllProduct();
    return getFlipAllProduct;
};
const getFlipProduct=()=>{
    let  getFlipProduct=flipRepository.getFlipProduct();
    return getFlipProduct;
};
const postFlipProduct=(body)=>{
    console.log("in service");
    console.log(body);
    let postFlipProduct=flipRepository.postFlipProduct(body);
    return postFlipProduct;
};
const deleteFlipProduct=()=>{
    let deleteFlipProduct=flipRepository.deleteFlipProduct();
    return deleteFlipProduct;
};
const updateFlipProduct=(body)=>{
    let updateFlipProduct=flipRepository.updateFlipProduct(body);
    return updateFlipProduct;
};
const  getFlipAllProductById =()=>{
    let  getFlipAllProductById=flipRepository.getFlipAllProductById();
    return  getFlipAllProductById;
};
    
    module.exports={
        getFlipAllProduct,
        getFlipProduct,
        postFlipProduct,
        deleteFlipProduct,
        updateFlipProduct,
        getFlipAllProductById
    }