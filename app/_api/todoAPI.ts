'use server'

import { revalidatePath } from "next/cache";

export async function editTodo(formData: FormData) {
  console.log(formData)
  const rawFormData = {
    text: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/todos/${formData.get('id')}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')
}

export async function changeStatusTodo(formData: FormData) {
  const rawFormData = {
    completed: formData.get('checkbox') === 'on' ? true : false
  }

  const res = await fetch(`${process.env.BASE_URL}/todos/${formData.get('id')}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')
}

export async function deleteTodo(previousState: {success: boolean}, formData: FormData) {
  console.log(previousState.success,formData)

  const res = await fetch(`${process.env.BASE_URL}/lists/${formData.get('listId')}/todos/${formData.get('id')}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return {success: true}
}

export async function createNewList(previousState: {success: boolean}, formData: FormData) {
  const rawFormData = {
    name: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/lists`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return {success: true}
}

export async function createNewTodo(previousState: {success: boolean}, formData: FormData) {

  console.log(formData)
  const rawFormData = {
    text: formData.get('text'),
  }

  const res = await fetch(`${process.env.BASE_URL}/lists/${formData.get('listId')}/todos`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  revalidatePath('/')

  return {success: true}
}