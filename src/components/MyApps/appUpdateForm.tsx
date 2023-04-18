import { Button, Card } from 'flowbite-react';
import React from 'react';
import { api } from '../../utils/api';
import { Field, Form, Formik, FormikHelpers } from 'formik';

interface AppUpdateFormProps {
  appId: string;
  status: string;
  date: Date | null;
  notes: string | null;
}

interface ApplicationUpdateForm {
  status: string;
  date: string;
  notes: string;
}

const AppUpdateForm: React.FC<AppUpdateFormProps> = ({ appId, status, date, notes }) => {
  const ctx = api.useContext();
  const { mutate: updateMutate } = api.application.updateApplication.useMutation({
    onSuccess: () => {
      ctx.application.getAll.invalidate();
    },
  });
  const { mutate: deleteMutate } = api.application.deleteApplication.useMutation({
    onSuccess: () => {
      ctx.application.getAll.invalidate();
    },
  });

  const initialValues: ApplicationUpdateForm = {
    status: status,
    date: date ? date?.toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
    notes: notes ? notes : '',
  };

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: ApplicationUpdateForm,
          { setSubmitting }: FormikHelpers<ApplicationUpdateForm>,
        ) => {
          updateMutate({
            ...values,
            date: new Date(values.date).toISOString(),
            appId,
          });
          setSubmitting(false);
        }}
      >
        <Form>
          <div className='flex justify-around'>
            <div className='flex w-full flex-col'>
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
            </div>
            <div className='ml-2 flex w-auto flex-col'>
              <div className='mb-2 block'>
                <label className='mb-2 block text-sm font-bold ' htmlFor='Applied Date'>
                  Date
                </label>
              </div>
              <Field
                className='focus:shadow-outline my-1 w-full appearance-none rounded border py-2 px-3 leading-tight shadow-sm dark:border-black dark:bg-slate-600'
                name='date'
                type='date'
                required={true}
              ></Field>
            </div>
          </div>
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
          <div className='flex'>
            <Button className='w-full flex-1' type='submit' gradientMonochrome='teal'>
              Update
            </Button>
            <Button
              className='ml-4 flex-1'
              onClick={() => deleteMutate({ appId: appId })}
              gradientMonochrome='failure'
            >
              Delete
            </Button>
          </div>
        </Form>
      </Formik>
    </Card>
  );
};

export default AppUpdateForm;
