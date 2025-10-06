import { getAllTeachersDatasource } from "../../../data/remote/teacherDatasource"
import { mapDbTeachersToTeachers, Teacher } from "../../entities/teacher"
import { HttpError } from "../../types/httpError"

export type TeacherResponse =
    | { teachers: Teacher[] }
    | { fail: HttpError }

export const getAllTeachersProvider = async (): Promise<TeacherResponse> => {
    const allTeachersResult = await getAllTeachersDatasource()

    if ('fail' in allTeachersResult) {
        return allTeachersResult
    }

    return { teachers: mapDbTeachersToTeachers(allTeachersResult.data) }

}