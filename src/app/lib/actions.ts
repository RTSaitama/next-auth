 'use server'

import { redirect } from 'next/navigation'

export async function authenticateUser(identifier: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 1000))
   
  if ((identifier === 'test@example.com' || identifier === 'testuser') && password === 'password123') {
    return { id: 1, email: 'test@example.com', name: 'Test User' }
  }
       
  return null
}

export async function login(formData: FormData) {
  const identifier = formData.get('identifier') as string
  const password = formData.get('password') as string
     
  console.log('login with:', identifier)
     
  try {
    const user = await authenticateUser(identifier, password)
         
    if (user) {
      console.log('Login successful', user.email)
      redirect('/userProfile') 
      throw new Error('Login successful ')
    } else {
      console.log('Login failed ', identifier)
      throw new Error('Invalid login or password. Try: test@example.com  / password123')
    }
  } catch (error) {
    console.error('Authentication error:', error)
    throw error
  }
}

// export async function register(formData: FormData) {

// }