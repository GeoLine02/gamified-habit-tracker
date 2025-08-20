import { ZodSchema } from "zod";

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> };

export const validateForm = <T>(
  schema: ZodSchema<T>,
  data: unknown
): ValidationResult<T> => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};

    result.error.issues.forEach((err) => {
      if (err.path[0]) {
        fieldErrors[String(err.path[0])] = err.message;
      }
    });

    return { success: false, errors: fieldErrors };
  }

  return { success: true, data: result.data };
};
