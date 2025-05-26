import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your actual API URL
    headers: {
        "Content-Type": "application/json",
    },
})

export const getEmployees = async () => api.get("/employees")

export const registerEmployee = async (data) => api.post("/employees", data)

export const saveStepData = async (employeeId,step,data) => api.put(`/employees/${employeeId}/steps/${step}`, data)

export const getStepData = async (employeeId, step) => api.get(`/employees/${employeeId}/step/${step}`)