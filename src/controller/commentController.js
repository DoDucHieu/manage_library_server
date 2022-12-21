import Comment from "../model/comment.js"

// const getAllCartByUserName = async (req, res) => {
//   try {
//     const userName = req.query.userName;
//     const result = await Cart.find(
//       { userName: userName },
//       { createdAt: 0, updatedAt: 0, userName: 0, _id: 0 }
//     ).populate("bookId", { createdAt: 0, updatedAt: 0 });
//     return res.status(200).json({
//       errCode: 0,
//       errMessage: "Get all cart success!",
//       data: result,
//     });
//   } catch (e) {
//     return res.status(500).json({
//       errCode: 1,
//       errMessage: e.message,
//     });
//   }
// };
const getAllCommentByBookId = async(req, res)=>{
    try {
        const data = req.query;
        const result = await Comment.findAll({
            bookId: data.bookId,
          });
          return res.status(200).json({
            errCode: 0,
            errMessage: "Get all comment success!",
            data: result,
          });
    } 
    catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message,
        });
    }
}

const addComment = async (req, res)=>{
    try {
        const data = req.body;
        const result = await Comment.create({
            userName: data.userName,
            bookId: data.bookId,
            comment: data.comment,
          });
          return res.status(200).json({
            errCode: 0,
            errMessage: "Add comment success!",
            data: result,
          });
    } 
    catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message,
        });
    }
}

const updateComment = async (req, res) => {
  try {
    const data = req.body;
    const result = await Comment.findOne({
      userName: data.userName,
      bookId: data.bookId,
      comment: data.comment
    });
    if (result) {
      result.comment = data.comment
      await result.save();
      return res.status(200).json({
        errCode: 0,
        errMessage: "Update comment success!",
        data: result,
      });
    } 
    } catch (e) {
        return res.status(500).json({
            errCode: 1,
            errMessage: e.message,
        });
    }
};

const deleteComment = async (req, res) => {
  try {
    const data = req.body;
    const result = await Cart.findOneAndDelete({
      userName: data.userName,
      bookId: data.bookId,
      comment: data.comment
    });
    return res.status(200).json({
      errCode: 0,
      errMessage: "Delete comment success!",
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      errCode: 1,
      errMessage: e.message,
    });
  }
};

const cartController = {
  getAllCommentByBookId,
  addComment,
  updateComment,
  deleteComment,
};
export default cartController;
