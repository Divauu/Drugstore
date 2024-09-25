import { Request } from "express";
import multer from "multer";
import { ROOT_DIRECTORY } from "../config";
import { error } from "console";

/** define storage to save uploaded file */
const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        callback: (error: Error | null, destination: string) => void
    ) => {
        const storagePath = `${ROOT_DIRECTORY}/public/medicine-photo/`;
        callback(null, storagePath);
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: (error: Error | null, filename: string) => void // Mengubah parameter ke filename
    ) => {
        const filename = `${Math.random()}-${file.originalname}`; // Memperbaiki tanda kutip
        callback(null, filename);
    }
})

/** define function to filtering file */
const filterFile = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback ) => {
    /** define allowed extension */
    const allowedFile = /png|jpg|jpeg|gif/
    /** check extensions of uploaded file */
    const isAllow = allowedFile.test(file.mimetype)

    if(isAllow){
        callback(null, true)
    } else {
        callback(new Error(`Your file is not allowed to be uploaded`))
    }
}

const uploadMedicinePhoto = multer({
    storage, fileFilter: filterFile, limits: {fileSize: 2 * 1024 * 1024}
})

export {uploadMedicinePhoto}
