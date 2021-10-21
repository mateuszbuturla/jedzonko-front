import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';

describe.each([
  { value: '123456789', expects: '123456789' },
  { value: 'e', expects: 'e' },
  { value: 'abcdefg', expects: 'e' },
])('LoginFormTest', ({ value, expects }) => {
  // test('with written form values', async () => {
  //   // const { result: methodsCtx } = renderHook(() => useForm());
  //   const { getByTestId } = await render(
  //     <FormProvider {...methodsCtx.current}>
  //       <form data-testid={form}>
  //         <InputNumber />
  //       </form>
  //     </FormProvider>,
  //   );
  //   const input = screen.getByLabelText(name, { exact: true });
  //   await userEvent.type(input, value);
  //   expect(getByTestId(form)).toHaveFormValues({ [name]: expects });
  // });
});
