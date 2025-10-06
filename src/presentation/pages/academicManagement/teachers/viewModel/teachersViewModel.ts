import { useState } from "react"
import { getAllTeachersProvider, TeacherResponse } from "../../../../../domain/useCases/teacher/getAllTeachersProvider"
import { Teacher } from "../../../../../domain/entities/teacher"

export const teachersViewModel = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  // 👇 loading siempre será boolean
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const onGetAllTeachers = async () => {
    setLoading(true)
    setError(null)

    const allGetAllTeachers: TeacherResponse = await getAllTeachersProvider()

    if ("fail" in allGetAllTeachers) {
      setError(allGetAllTeachers.fail.message)
    } else {
      setTeachers(allGetAllTeachers.teachers)
    }

    setLoading(false)
  }

  return {
    teachers, setTeachers,
    loading, error,
    onGetAllTeachers
  }
}