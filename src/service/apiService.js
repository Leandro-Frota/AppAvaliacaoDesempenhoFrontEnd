import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
})

export const getEmployees =  () => {api.get("/employees")}
export const registerEmployee = async (data) => { return api.post("/employees", data)}

export const saveStepData = async (eployeeId,step,data) => {
    return api.post(`/employees/${eployeeId}/steps/${step}`, data)
}
export const getStepsData = async (employeeId, step) => {
    return api.get(`/employees/${employeeId}/step/${step}`)
}