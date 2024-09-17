import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import clsx from 'clsx';

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    date: Yup.string().required('Booking date is required'),
    comment: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Send form data
    console.log('Form data:', values);
    resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h3>Book your campervan now</h3>
        <p className={css.body1Grey}>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.bookingForm}>
            <div className={css.formGroup}>
              <Field type="text" name="name" placeholder="Name*" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <Field type="email" name="email" className={css.input} placeholder="Email*" />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <Field type="date" name="date" className={css.input} placeholder="Booking date*" />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <Field as="textarea" name="comment" className={css.input} placeholder="Comment" />
            </div>
            <div className={css.buttonContainer}>
              <button type="submit" className={clsx(css.primaryButton, css.button)}>Send</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
