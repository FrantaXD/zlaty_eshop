import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";

export function Cart_form() {
  const validate = Yup.object({
    name: Yup.string(),
  });
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validate}
      onSubmit={(values) => {}}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="name">ss</label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" component="div" />
          </div>
        </Form>
      )}
    </Formik>
  );
}
