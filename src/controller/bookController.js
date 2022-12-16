import Book from "../model/book.js";

const getAllBook = async (req, res) => {
  try {
    const result = await Book.find({});
    if (result) {
      console.log("hello");
      return res.status(200).json({
        errCode: 0,
        errMessage: "Get all book success!",
        data: result,
      });
    } else {
      throw new Error("There are no book!");
    }
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: e.message,
    });
  }
};

const createBook = async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const result = await Book.create({
      title: data.title,
      author:data.author,
      description: data.description,
      datePublish: data.datePublish,
      pageNumber: data.pageNumber,
      price: data.price,
      category: data.category,
      imgUrl: data.imgUrl,
    });
    return res.status(200).json({
      errCode: 0,
      errMessage: "Create new book success!",
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: e.message,
    });
  }
};

const bookController = {
  getAllBook,
  createBook,
};

export default bookController;
