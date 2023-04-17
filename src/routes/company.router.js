const companyController = require('../controllers/company.controller')
const { verifyToken, verifyTokenIsAdmin } = require('../middlewares')

module.exports = require('express').Router()
  .get("/list", companyController.getAll)
  .get("/list/paging", companyController.getPaging)
  .get("/detail", companyController.getOne)
  .post("/create", verifyTokenIsAdmin, companyController.create)
  .put("/update", verifyTokenIsAdmin, companyController.updateOne)
  .delete("/delete", verifyTokenIsAdmin, companyController.delete)