import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const RegisterForm = () => {
     const router = useRouter();
    const handleSubmit = async (values, { resetForm }) => {
      console.log(values)
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      console.log("response", response);
      if (!response.ok) return toast.error("Something went wrong!");

      toast.success("User has been registered!");
      router.push("/shop");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      // Додати необхідну обробку помилки
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <Field type="tel" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
