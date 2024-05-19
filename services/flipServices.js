const flipRepository = require("../repository/flipRepository");

const getFlipAllProduct = () => {
  let getFlipAllProduct = flipRepository.getFlipAllProduct();
  return getFlipAllProduct;
};

const getFlipProduct = () => {
  let getFlipProduct = flipRepository.getFlipProduct();
  return getFlipProduct;
};

const postFlipProduct = (body) => {
  console.log("in service");
  console.log(body);
  let postFlipProduct = flipRepository.postFlipProduct(body);
  return postFlipProduct;
};

const deleteFlipProduct = (body) => {
  let deleteFlipProduct = flipRepository.deleteFlipProduct(body);
  return deleteFlipProduct;
};

const updateFlipProduct = (body) => {
  let updateFlipProduct = flipRepository.updateFlipProduct(body);
  return updateFlipProduct;
};

const getFlipAllProductById = (body) => {
  console.log("in service");
  console.log(body);
  let getFlipAllProductById = flipRepository.getFlipAllProductById(body);
  return getFlipAllProductById;
};

const getFlipSearchProduct = (body) => {
  console.log("in service");
  console.log(body);
  let getFlipSearchProduct = flipRepository.getFlipSearchProduct(body);
  return getFlipSearchProduct;
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
