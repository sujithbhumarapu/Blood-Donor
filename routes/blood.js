import express from 'express';
import {createDonor,getDonors} from '../controller/blood';
const router= express.Router();

router
    .post("/",createDonor)
    .get("/",getDonors);
export {router};