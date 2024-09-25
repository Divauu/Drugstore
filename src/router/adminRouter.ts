import { Router } from "express";
import { authentication, createAdmin, deleteAdmin, readAdmin, updateAdmin } from "../controller/adminController";
import { createValidation, updateValidation, authValidation } from "../middleware/adminValidation";
import { verifyToken } from "../middleware/authorization";

const router = Router()

router.post(`/`, [verifyToken, createValidation], createAdmin)
//route for show all medicine
router.get(`/`, [verifyToken],readAdmin)
//route for update medicine
router.put(`/`, [verifyToken, updateValidation] ,updateAdmin)
//route for remove
router.delete(`/:id`, [verifyToken],deleteAdmin)
router.post(`/auth`, [authValidation] ,authentication)


export default router