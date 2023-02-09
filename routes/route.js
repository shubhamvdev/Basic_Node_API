const express = require('express');
const router = express.Router()

const { 
    createDate,
    getDates,
    deleteDate
} = require("../controllers/controller")

router.post("/post",createDate)
router.get("/get", getDates)
router.delete("/delete/:dateId",deleteDate)

module.exports = router;