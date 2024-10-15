import {Router} from 'express'
import billingService from '../Service/billingService.js'

const billingRoute = Router();

billingRoute.post('/newbill',billingService.newBill)
billingRoute.post('/allbills',billingService.getAllBills)
billingRoute.get('/alldates',billingService.allDateBills)

export default billingRoute
