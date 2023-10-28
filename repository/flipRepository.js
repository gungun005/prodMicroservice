const getFlipAllProduct=()=>{
    return("Hi I  have all products list ");
    };
    const getFlipProduct=()=>{
    return("hi i have different products");
    };
    const postFlipProduct=(body)=>{
        console.log("in repo");
        console.log(body);
    return("you can updates products here");
    };
    const deleteFlipProduct=()=>{
    return("I have the power to delete any user");
    };
    const updateFlipProduct=(body)=>{
        console.log(body);
    return("hi i have updated product");
    };
    const  getFlipAllProductById =()=>{
        return("hi i have updated product");
    };
    
    module.exports={
        getFlipAllProduct,
        getFlipProduct,
        postFlipProduct,
        deleteFlipProduct,
        updateFlipProduct,
        getFlipAllProductById
    }