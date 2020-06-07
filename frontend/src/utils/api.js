import axiosInstance from './axiosInsance'

export function getAllTasks() {
  return axiosInstance.get('/task/')
}

export function getUsers() {
  return axiosInstance.get('/users/')
}

export function getTasksWithParams(key, params) {
  return axiosInstance.get('/task/', {params})
}

export function getUsersWithParams(key, params) {
  return axiosInstance.get('/users/', {params})
}

export function createTask(data) {
  return axiosInstance({
    method: 'POST',
    url: '/task/',
    data,
  })
}

export function updateTask(taskId, data) {
  return axiosInstance({
    method: 'PATCH',
    url: `/task/${taskId}/`,
    data,
  })
}

export function updateProfile(profileId, data) {
  return axiosInstance({
    method: 'PATCH',
    url: `/users/user_profile/${profileId}/`,
    data,
  })
}
