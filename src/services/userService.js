import * as tokenService from './tokenService'

const BASE_URL = '/api/users'


const getAllUsers = async () => {
  try {
    const res = await fetch(BASE_URL, 
      { headers: {Authorization: `Bearer ${tokenService.getToken()}`}},
      { mode: 'cors'}
    )
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


const getUserProfile = async (userId) => {
  console.log("I'M IN THE RIGHT FUNCTION")
  console.log(`${BASE_URL}/${userId}`)
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, 
      { headers: {Authorization: `Bearer ${tokenService.getToken()}`}},
      { mode: 'cors'}
    )
    const data = await res.json()
    console.log("data", data)
    return data
  } catch (error) {
    throw error
  }
}


export {
  getAllUsers,
  getUserProfile
}