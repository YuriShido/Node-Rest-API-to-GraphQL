const router = require('express').Router()

const employeeService = require('../service/employeesData')

//Get employee
router.get('/', (req, res) => res.json(employeeService.getAll()))

//GET /employy/:id
router.get('/:id', (req, res) => {
    const employeeID = req.params.id
    return res.json(employeeService.getById(employeeID))
})

//POST /empolee
router.post('/', (req, res) => {
    const newEmployee = req.body
    return res.json(employeeService.save(newEmployee))
})

//DELETE /empolyee
router.delete('/', (req, res) =>  {
    const employeeID = req.params.id
    return res.json(employeeService.deleteById(employeeId))
})

module.exports = router