const express = require("express");
const hotelController = require("../controllers/hotelController");
const Router = express.Router();

Router.route("/").post(hotelController.createHotel).get(hotelController.getAll);
Router.route("/:id")
  .get(hotelController.getOne)
  .delete(hotelController.deleteOne)
  .put(hotelController.updateOne);

module.exports = Router;
