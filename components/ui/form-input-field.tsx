import { useId, type ComponentProps } from 'react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type FormInputFieldProps = Omit<
  ComponentProps<typeof Input>,
  'id' | 'required'
> & {
  title: string
  isRequired?: boolean
  id?: string
  containerClassName?: string
}

export function FormInputField({
  title,
  isRequired = false,
  id,
  containerClassName,
  ...inputProps
}: FormInputFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={cn('w-full', containerClassName)}>
      <label
        htmlFor={inputId}
        className="mb-2 block text-[16px] leading-normal text-Key"
      >
        {title}
        {isRequired && (
          <span className="ml-1 text-Red" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <Input
        id={inputId}
        required={isRequired}
        aria-required={isRequired || undefined}
        {...inputProps}
      />
    </div>
  )
}
