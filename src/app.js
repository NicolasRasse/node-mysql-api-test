import express from "express";
import indexRoutes from "./routes/index.routes.js";
import employeesRoutes from "./routes/employees.routes.js";

const app = express()
app.use(express.json())
app.use(indexRoutes)
app.use('/api', employeesRoutes)
app.use((res, req, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

export default app