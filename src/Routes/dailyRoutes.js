import { Router } from "express";
import dailyService from "../Service/dailyService.js";

const dailyRouter = Router()

dailyRouter.post('/eod',dailyService.endofDay)
dailyRouter.post('/sales',dailyService.showSales)

export default dailyRouter
