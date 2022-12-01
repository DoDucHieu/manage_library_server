import Book from "../model/book.js";

const getAllBook = async (req, res) => {
  try {
    const result = await Book.find({});
    if (result) {
      return res.status(200).json({
        errCode: 0,
        errMessage: "Get all book success1!",
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

const bookController = {
  getAllBook,
};

export default bookController;
