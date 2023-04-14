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
  const { data, isLoading, error } = api.company.getAll.useQuery(); // replace with zustand or atom
  const router = useRouter();

  if (isLoading) {
    return (
      <div className='grid h-full w-full grid-cols-6 gap-4'>
        <div className='col-span-4 col-start-2 '></div>
      </div>
    );
  }

  if (error) {
    return <div>{'An Error has occurred: ' + error.message}</div>;
  }

  if (!data) {
    return (
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-4 col-start-2 h-full w-full'></div>
      </div>
    );
  }

  const initialValues: ApplicationForm = {
    status: 'Applied',
    position: '',
    location: '',
    date: new Date().toISOString().slice(0, 10),
    notes: '',
    companyId: data[0].id,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ApplicationForm, { setSubmitting }: FormikHelpers<ApplicationForm>) => {
        mutate({
          ...values,
          date: new Date(values.date).toISOString(),
          companyId: values.companyId,
        });
        setSubmitting(false);
        router.push('/my_apps');
      }}
    >
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-4 col-start-2 w-full'>
          <Form className='mb-4 rounded px-8 pt-6 pb-8 shadow-md dark:bg-midnight_light'>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold' htmlFor='status'>
                Application Status
              </label>
            </div>
            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
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
              <label className='mb-2 block text-sm font-bold ' htmlFor='position'>
                Position
              </label>
            </div>
            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
              name='position'
              type='text'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold ' htmlFor='location'>
                Location
              </label>
            </div>
            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
              name='location'
              type='text'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold ' htmlFor='Applied Date'>
                Applied Date
              </label>
            </div>
            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
              name='date'
              type='date'
              required={true}
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold ' htmlFor='Notes'>
                Notes
              </label>
            </div>
            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
              name='notes'
              as='textarea'
            ></Field>
            <div className='mb-2 block'>
              <label className='mb-2 block text-sm font-bold ' htmlFor='companyId'>
                Company
              </label>
            </div>

            <Field
              className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
              name='companyId'
              as='select'
              required={true}
            >
              {data.map((element) => {
                return (
                  <option key={element.id} value={element.id}>
                    {element.name}
                  </option>
                );
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
