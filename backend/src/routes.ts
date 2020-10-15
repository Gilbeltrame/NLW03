import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/uploads'
import orphanagesController from './controllers/orphanagesController'



const routes = Router();
const upload = multer(uploadConfig)

//index, show ,create ,update ,delete

routes.get('/orphanages' , orphanagesController.index)
routes.get('/orphanages/:id' , orphanagesController.show)
routes.post('/orphanages', upload.array('images') , orphanagesController.create)

export default routes;