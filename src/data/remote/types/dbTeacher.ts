export type DbTeacher = {
  id: number;
  dni: string;
  nombres: string;
  apellidos: string;
  genero: string;
  especialidad: string;
  telefono?: string | null;
  correo?: string | null;
  activo: number; // tinyint → 0 | 1
  fecha_registro: Date; // datetime
}


export const mapApiTeacher = (t: any): DbTeacher => ({
  id: t.id,
  dni: t.dni,
  nombres: t.nombres,
  apellidos: t.apellidos,
  genero: t.genero,
  especialidad: t.especialidad,
  telefono: t.telefono ?? null,
  correo: t.correo ?? null,
  activo: t.activo,
  fecha_registro: new Date(t.fecha_registro),
})