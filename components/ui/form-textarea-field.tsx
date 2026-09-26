import { useId, type ComponentProps } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type FormTextareaFieldProps = Omit<
  ComponentProps<typeof Textarea>,
  'id' | 'required'
> & {
  title: string
  isRequired?: boolean
  id?: string
  containerClassName?: string
}

export function FormTextareaField({
  title,
  isRequired = false,
  id,
  containerClassName,
  ...textareaProps
}: FormTextareaFieldProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId

  return (
    <div className={cn('w-full', containerClassName)}>
      <label
        htmlFor={textareaId}
        className="mb-2 block text-[16px] leading-normal text-Key"
      >
        {title}
        {isRequired && (
          <span className="ml-1 text-Red" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <Textarea
        id={textareaId}
        required={isRequired}
        aria-required={isRequired || undefined}
        {...textareaProps}
      />
    </div>
  )
}
