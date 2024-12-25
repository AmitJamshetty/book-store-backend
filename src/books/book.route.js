const express = require("express");
const router = express.Router();
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

router.post("/create-book", verifyAdminToken, postABook);
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;