const Model = require("../models/model")

const createDate = async (req, res) => {
    const data = new Model({
        date: req.body.date,
    })

    try {
        const date = await data.save();
        res.json({data : date})
    }
    catch (error) {
        res.json({message: error.message})
    }
}

const getDates = async (req, res) => {
    try {
        const date = await Model.find()
        res.json({data: date})
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteDate = async (req, res) => {
    try {
        const dateId = req.params.dateId
        const date = await Model.findByIdAndDelete(dateId)
        res.json({message: "Date Deleted Succssfully"})
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {
    createDate,
    getDates,
    deleteDate
}