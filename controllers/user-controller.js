const userModel = require('../models/user');

exports.getUserList = async (req, res) => {
    userModel.findAll()
        .then(getData =>{
            res.json({isExecuted:true, data:getData});
            res.end();
        })
}

exports.getUserAdd = async (req,res) => {
    const formData = {
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        address     : req.body.address,
        gender      : req.body.gender,
        dob         : req.body.dob,
        entry_month : req.body.entry_month
    }
    userModel.create(formData)
        .then((data) =>{
            return res.json({isExecuted : true, message:'Data saved successfully'});
        }).catch((err)=>{
            return res.json({isExecuted:false, message:err.message});
        })
};

exports.getUserById = async(req,res) =>{
    let userId = req.params.id;

    userModel.findOne(
        { where : {id:userId} }
    )
    .then(editData => {
       return res.json({isExecuted:true, data: editData, message: "Data fetched successfully."});
    })
    .catch(err => {
       return res.json({isExecuted:false, message: err.message});
    })
};

exports.updateUser = async(req,res) => {
    let updateUserId = req.body.id;

    await userModel.update({
        first_name  : req.body.first_name,
        last_name   : req.body.last_name,
        address     : req.body.address,
        gender      : req.body.gender,
        dob         : req.body.dob,
        entry_month : req.body.entry_month
    }, {where : {id:updateUserId}})
    .then(() =>{
      return  res.json({isExecuted:true, message: "Data updated successfully"});
    }).catch(err =>{
      return res.json({isExecuted:false, message:"Update failed: " + err.message});
    })
};

exports.deleteUser = async(req,res) => {
    let deleteUserId = req.params.id;

    userModel.destroy({where:{id:deleteUserId}})
    .then(() => {
      return  res.json({isExecuted:true, message:"Data deleted successfully"});
    })
    .catch(err=>{
       return res.json({isExecuted:false, message: err.message});
    })
};