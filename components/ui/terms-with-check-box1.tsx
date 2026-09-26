'use client'

import Image from 'next/image'
import { useId, useState, type ReactNode } from 'react'

import { CheckBox } from '@/components/ui/check-box'
import { TermsTextBox1 } from '@/components/ui/terms-textbox1'
import { cn } from '@/lib/utils'

type TermsWithCheckBox1Props = {
  isRequired: boolean
  title: string
  termsTextBox1: ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  alert?: boolean
  disabled?: boolean
  name?: string
  className?: string
}

export function TermsWithCheckBox1({
  isRequired,
  title,
  termsTextBox1,
  checked,
  defaultChecked = false,
  onCheckedChange,
  alert = false,
  disabled = false,
  name,
  className,
}: TermsWithCheckBox1Props) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()
  const isChecked = checked ?? internalChecked

  const handleCheckedChange = (nextChecked: boolean) => {
    if (checked === undefined) {
      setInternalChecked(nextChecked)
    }

    onCheckedChange?.(nextChecked)
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="flex w-full items-center gap-3">
        <CheckBox
          checked={isChecked}
          onChange={(event) => handleCheckedChange(event.target.checked)}
          alert={alert && !isChecked}
          disabled={disabled}
          name={name}
          aria-label={`${title} 동의`}
        />

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="flex min-w-0 flex-1 items-center gap-1 bg-transparent text-left disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRequired && (
            <span className="shrink-0 text-[14px] text-Red">[필수]</span>
          )}
          <span className="min-w-0 flex-1 text-[14px] text-Key">{title}</span>
          <Image
            src={isOpen ? '/ui/ui_chevron_down.svg' : '/ui/ui_chevron_up.svg'}
            alt=""
            aria-hidden="true"
            width={isOpen ? 17 : 10}
            height={isOpen ? 10 : 17}
            className="shrink-0"
          />
        </button>
      </div>

      {isOpen && (
        <TermsTextBox1 id={contentId} className="mt-2 px-3">
          {termsTextBox1}
        </TermsTextBox1>
      )}
    </div>
  )
}
