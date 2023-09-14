const userModel = require("../model/userModel");

 


const getMessage = (req, res) => {
    res.send({message:'Hello, To All !!!'});
  };
  
  // POST Request to the /api endpoint
  
  const createData = async(req, res) => {
    const receivedData = req.body;
    try{
    // Log the received data
    const newData = await userModel.create(receivedData)
    console.log('Received POST data:', newData);
    res.status(201).json({ newData, message: 'Data received successfully',success:true });
    }catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
        });
      }
  };
  
  // PUT Request to the /api endpoint
  
  
  const updateData = async(req, res) => {
    const _id = req.params._id;
    const receivedData = req.body;
    try {
        const newData = await userModel.findByIdAndUpdate(
            _id,
             receivedData
            ,
            { new: true }
          );
          // Log the received data
    console.log('Received PUT data:', newData);
    res.status(200).json({ newData, message: 'Data received and updated successfully', success:true });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
        });
      }
    };
    
  
  // DELETE Request to the /api endpoint
  
  const deleteData = async (req, res) => {
    const _id = req.params._id; 

    try {
      const deletedData = await userModel.findByIdAndDelete(_id);
  
      // Check if deletedData is null (document not found)
      if (!deletedData) {
        return res.status(404).json({ success: false, message: 'Data not found' });
      }
  
      res.status(200).json({ message: 'Data deleted successfully', success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  };
  


  module.exports ={getMessage,createData,updateData,deleteData}