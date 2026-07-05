const express = require("express");
const {insertCourse,displayCourse, updateCourse,deleteCourse,editCourse, addCourse} = require("../Controller/courseController");

const router = express.Router();

router.get("/addCourse", addCourse);
router.post("/insertCourse", insertCourse);

router.get("/displayCourse", displayCourse);

router.get("/editCourse/:id", editCourse);

router.patch("/updateCourse/:id", updateCourse);

router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;