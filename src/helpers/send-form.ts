import { FormikValues, FormikHelpers } from "formik"

export const encode = (data: FormikValues) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

export const handleSubmit = (
  values: FormikValues,
  { resetForm }: FormikHelpers<FormikValues>
) => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ ...values }),
  })
    .then(() => console.log("Formularz został wysłany"))
    .catch((error) => console.log(error))
  resetForm()
}
