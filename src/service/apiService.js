import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
})

export const getEmployees =  () => api.get("/employees")

export const registerEmployee = async (data) => api.post("/employees", data)

export const saveStepData = async (employeeId,step,data) => api.put(`/employees/${employeeId}/steps/${step}`, data)

export const getStepsData = async (employeeId, step) => api.get(`/employees/${employeeId}/step/${step}`)