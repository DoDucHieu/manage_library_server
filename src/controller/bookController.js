import Book from "../model/book.js";

const getAllBook = async (req, res) => {
  try {
    const result = await Book.find({});
    if (result) {
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

const createNewBook = async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const result = await Book.create({
      bookName: data.bookName,
      price: data.price,
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
  createNewBook,
};

export default bookController;
