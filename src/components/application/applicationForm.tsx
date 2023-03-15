import { Button } from 'flowbite-react';
import { Formik, FormikHelpers, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { api } from '../../utils/api';

interface ApplicationForm {
  status: string;
  position: string;
  location: string;
  date: string;
  notes: string | undefined;
  companyId: string;
}

const ApplicationForm = () => {
  const { mutate } = api.application.createApplication.useMutation();
  const router = useRouter();

  const initialValues: ApplicationForm = {
    status: 'Applied',
    position: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    companyId: '1',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (
        values: ApplicationForm,
        { setSubmitting }: FormikHelpers<ApplicationForm>,
      ) => {
        mutate({
          ...values,
          date: new Date(values.date).toISOString(),
          companyId: parseInt(values.companyId),
        });
        setSubmitting(false);
        router.push('/my_apps');
      }}
    >
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-4 col-start-2 w-full'>
          <Form className='mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md'>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='status'>
                Application Status
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='status'
              required={true}
              as='select'
            >
              <option>Applied</option>
              <option>Screen</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='position'>
                Position
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='position'
              type='text'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='location'>
                Location
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='location'
              type='text'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='Applied Date'>
                Applied Date
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='date'
              type='date'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='Notes'>
                Notes
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='notes'
              as='textarea'
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='companyId'>
                Company
              </label>
            </div>
            <Field
              className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
              name='companyId'
              as='select'
              required={true}
            >
              {[...Array(500).keys()].map((element) => {
                return <option key={element}>{element + 1}</option>;
              })}
            </Field>

            <Button className='mt-6 w-full' gradientDuoTone='pinkToOrange' type='submit'>
              Create Application
            </Button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default ApplicationForm;
