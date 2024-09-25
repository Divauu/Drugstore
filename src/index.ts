import Express from "express"
import MedicineRoute from "./router/medicineRouter"
import adminRoute from "./router/adminRouter"

const app = Express()
/** allow to read a body request with JSON format */
app.use(Express.json())

/** prefix for medicine root */
app.use(`/medicine`, MedicineRoute)

app.use(`/admin`, adminRoute)

const PORT = 1229
app.listen(PORT, () => { 
    console.log(`Server Drugstore run on  port ${PORT}`)
})