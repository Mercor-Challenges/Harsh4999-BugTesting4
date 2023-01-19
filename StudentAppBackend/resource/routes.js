const Student = require('../model/student')
const express = require('express')
const router = express.Router();
router.get('/getAll',(req,res,next)=>{
    Student.find().then((data)=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(500).json({message: 'Something went wrong'});
    })
})
router.get('/get/:id',(req,res,next)=>{
    Student.findById(req.params.id)
    .then(data=>{
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message:'Student not found'})
        }
    }).catch(err=>{
        res.status(500).json({message: 'Something went wrong'});
    })
})
router.post('/add',(req,res,next)=>{
    console.log(req.body);
    const student = new Student({
        name: req.body.name,
        std: req.body.std
    });
    student.save().then((data)=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(500).json({message: 'Something went wrong'});
    })
});
router.put('/update/:id',(req,res,next)=>{
    const student = new Student({
        _id: req.params.id,
        name: req.body.name,
        std: req.body.std
    })
    Student.updateOne({_id:req.params.id},student)
    .then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(500).json({message: 'Something went wrong'});
    })
});
router.delete('/delete/:id',(req,res,next)=>{
    Student.deleteOne({_id:req.params.id}).then(result=>{
        res.status(200).json({
            message: 'Student deleted'
        });
    }).catch(err=>{
        res.status(500).json({message: 'Something went wrong'});
    })
});
module.exports=router;