// const connection = require('../utils/db-connection');
const db=require('../utils/db-connection');
const Student=require('../models/students');
const IdentityCard=require('../models/identitycard');

const addEntries= async (req,res)=>{

    try{
        const {email, name}=req.body;
        const student=await Student.create({
            email:email,
            name:name
        });

        res.status(201).send(`User with name: ${name} is created!`)

    } catch(err) {
        res.status(500),send('Unable to make an entry');
    }

}

const addingValuesToStudentAndIdentityTable=async (req,res)=>{
    try{
        const student= await Student.create(req.body.student);
        const idCard= await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId:student.id
        })

        res.status(201).json({student,idCard});



    }catch(error){
        res.status(500).json({error:error.message});

    }
}


const updateEntry=(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const updateQuery="UPDATE students set name= ? WHERE id= ? ";

    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows===0){
            res.status(404).send("Students not found");
            return;
        }

        res.status(200).send("User has been updated");
    })
}

const deleteEntry=(req,res)=>{
    const {id}=req.params;
    const deleteQuery=`DELETE FROM students Where id= ?`;

    db.execute(deleteQuery,[id], (err,results)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
        }

        if(results.affectedRows===0){
            res.status(404).send("Student is not found");
            return;
        }

        res.status(200).send(`User with ${id} is deleted`);
    })
}

module.exports={
    addEntries,
    updateEntry,
    deleteEntry,
    addingValuesToStudentAndIdentityTable
}