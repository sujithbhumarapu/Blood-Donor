import {Donor} from '../model/blood.js';
const createDonor=(req,res)=>{
    const donor =new Donor(req.body);
    donor.save()
        .then(doc=>{
           
            res.status(201).json(doc);
        })
        .catch(err=>{
            console.log("ERROR",err);
        })
}
//vnL57IDCosZFVt1d
//GW4gWgoVs8RmjWQw
const getDonors = async (req, res) => {
    const {bloodGroup}= req.query;
    
    try {
        const docs = await Donor.find({ bloodGroup: bloodGroup}).exec();
        res.json(docs);
       
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
export {createDonor,getDonors};