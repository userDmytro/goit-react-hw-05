import { Form, Field, Formik } from "formik";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notifyEmpty = () =>
    toast.error("There is nothing to search for", {
      position: "top-right",
    });

  const handleSearch = (values, actions) => {
    if (values.query.trim() === "") return notifyEmpty();
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
