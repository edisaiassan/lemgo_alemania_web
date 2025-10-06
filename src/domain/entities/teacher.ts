import { DbTeacher } from "../../data/remote/types/dbTeacher";
import { Sex } from "../types/sex"

export type Teacher = {
    id: string,
    dni: string,
    name: string,
    lastname: string,
    sex: Sex,
    specialty: string,
    phone?: string,
    email?: string,
    isActive: boolean,
    date: Date
}

export const mapDbTeacherToTeacher = (db: DbTeacher): Teacher => ({
  id: db.id.toString(),
  dni: db.dni,
  name: db.nombres,
  lastname: db.apellidos,
  sex: db.genero as Sex, // casteo: asegúrate que los valores coincidan con tu enum Sex
  specialty: db.especialidad,
  phone: db.telefono ?? undefined,
  email: db.correo ?? undefined,
  isActive: db.activo === 1,
  date: db.fecha_registro,
});

export const mapDbTeachersToTeachers = (dbList: DbTeacher[]): Teacher[] =>
  dbList.map(mapDbTeacherToTeacher);