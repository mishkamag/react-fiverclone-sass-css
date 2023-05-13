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


const deleteGig = async(req, res , next)=>{
    try {
        const gig = await Gig.findById(req.params.id)
        if(gig.userId !== req.userId) return next(createError)(403, "You can delete only your gig" )

        await Gig.findByIdAndDelete(req.params.id)
        res.status(200).send("Gig has been deeleted")
    } catch (err) {
        next(err)
    }
}



const getGig = async(req, res , next)=>{}



const getGigs = async(req, res , next)=>{}

module.exports= {
    createGig,
    deleteGig,
    getGig,
    getGigs
}