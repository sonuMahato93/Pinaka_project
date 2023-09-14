const express = require("express");
const { createData, getMessage, updateData, deleteData } = require("../controller/user");


//router onject
const router = express.Router();

//routes
router.get('/',getMessage)

router.post('/api',createData)

router.put('/api/:_id',updateData)

router.delete('/api/:_id',deleteData)



//REGISTER || POST


module.exports = router;
