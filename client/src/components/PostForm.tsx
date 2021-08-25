import React from 'react';
import { useForm } from 'react-hook-form';
import EditIcon from './icons/EditIcon';
import PostFormStyle from '../styles/post-form.style';
import { useCreatePostMutation } from '../stores/post/api';

type FormFields = {
  body: string;
};

const FIELD_BODY_MAX_LENGTH = 100;

const PostForm: React.FC = () => {
  const [createPost] = useCreatePostMutation();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    defaultValues: { body: '' },
  });

  return (
    <form css={PostFormStyle.root} autoComplete='off' onSubmit={(event) => event.preventDefault()}>
      <div css={PostFormStyle.field}>
        <input
          css={PostFormStyle.fieldBody}
          style={errors.body ? { borderColor: 'var(--color-error)' } : undefined}
          type='text'
          tabIndex={1}
          maxLength={FIELD_BODY_MAX_LENGTH}
          {...register('body', {
            required: 'Required contents',
            maxLength: {
              value: FIELD_BODY_MAX_LENGTH,
              message: `Max length ${FIELD_BODY_MAX_LENGTH}`,
            },
          })}
        />
        {errors.body && <span css={PostFormStyle.fieldBodyErrorMessage}>{errors.body.message}</span>}
        <span css={PostFormStyle.fieldBodyLength}>{`${watch('body').length} / ${FIELD_BODY_MAX_LENGTH}`}</span>
      </div>
      <button
        css={PostFormStyle.action}
        type='button'
        tabIndex={2}
        aria-label='Post'
        disabled={Boolean(errors.body) || isSubmitting}
        onClick={handleSubmit((formFields) => {
          const { body } = formFields;
          createPost({ body })
            .unwrap()
            .finally(() => {
              reset();
            });
        })}
      >
        <EditIcon />
      </button>
    </form>
  );
};

export default PostForm;
