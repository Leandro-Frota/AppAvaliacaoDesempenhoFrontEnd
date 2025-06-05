import { URL_API } from "@/Utils/constants/constants";
import axios from "axios";

const api = axios.create({
    baseURL: URL_API, // Replace with your actual API URL
    headers: {
        "Content-Type": "application/json",
    },
})

export const getEmployees = async () => api.get("/employees")

export const registerEmployee = async (data) => api.post("/employees", data)

export const updateDataRegisterEmployee = async (employeeId, data) => api.put(`/employees/${employeeId}`, data)

export const saveStepData = async (employeeId,step,data) => api.put(`/employees/${employeeId}/steps/${step}`, data)

export const getStepData = async (employeeId, step) => api.get(`/employees/${employeeId}/step/${step}`)

export const deleteEmployee = async (employeeId) => api.delete(`/employees/${employeeId}`)