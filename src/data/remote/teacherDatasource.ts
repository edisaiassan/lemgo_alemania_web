import axios from "axios";
import { PaginationParam } from "../../domain/types/paginationParam";
import { DbTeacher, mapApiTeacher } from "./types/dbTeacher";
import { HttpError } from "../../domain/types/httpError";

const teacherUrl = `${import.meta.env.VITE_MAIN_URL}/teacher`

type TeacherResponse =
  | { data: DbTeacher[] }
  | { fail: HttpError }

export const getAllTeachersDatasource = async (): Promise<TeacherResponse> => {
  try {
    const response = await axios.get(teacherUrl);

    let teachers: DbTeacher[]
    try {
      teachers = (response.data?.data ?? []).map(mapApiTeacher);
    } catch (e: any) {
      return {
        fail: {
          status: 422, // Unprocessable Entity → datos no válidos
          message: "Error al transformar los datos de teacher",
        },
      };
    }

    return { data: teachers }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return {
        fail: {
          status: error.response?.status ?? 500,
          message: error.response?.statusText ?? "Unknown error"
        } as HttpError,
      };
    }

    return {
      fail: {
        status: 500,
        message: "Unexpected error"
      } as HttpError,
    };
  }
}

export const getTeachersDatasource = async (
  dni: string,
  { page, limit }: PaginationParam
) => {
  const teachersResult = await axios.get(teacherUrl);
}