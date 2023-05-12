const Gig = require("../models/gig.model");
const { createError } = require("../helpers/createEror");


const createGig = async(req, res , next)=>{
    if(!req.isSeller) return next(createError(403, "Only sellers can create a Gig"))

    const newGig = new Gig({
        userId : req.userId, 
        ...req.body
    })

    try{
    const savedGig = await newGig.save();
    res.status(201).json(savedGig)
    }catch(err){
    next(err)
    }
}


const deleteGig = async(req, res , next)=>{}



const getGig = async(req, res , next)=>{}



const getGigs = async(req, res , next)=>{}

module.exports= {
    createGig,
    deleteGig,
    getGig,
    getGigs
}