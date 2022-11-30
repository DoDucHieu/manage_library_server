import Product from "../model/product.js";

const getAllProduct = async (req, res) => {
  try {
    const result = await Product.find({});
    if (result) {
      return res.status(200).json({
        errCode: 0,
        errMessage: "Get all product success!",
        data: result,
      });
    } else {
      throw new Error("There are no product!");
    }
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: e.message,
    });
  }
};

const productController = {
  getAllProduct,
};

export default productController;
