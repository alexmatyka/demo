import { Dialog } from '@headlessui/react'
import { Field, Label, Input, Button } from '@headlessui/react'
import clsx from 'clsx'
import { MouseEvent } from 'react'

export function LoginModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      <Dialog.Panel className="relative z-10 w-full max-w-md mx-auto bg-[#1e1e1e] rounded-2xl p-6 shadow-xl ring-1 ring-white/10">
        <Dialog.Title className="text-lg font-semibold mb-4 text-white">Login</Dialog.Title>
        <form className="space-y-4">
          <Field>
            <Label className="text-sm font-medium text-white">Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              className={clsx(
                'mt-1 block w-full rounded-md border-none bg-white/5 px-3 py-2 text-sm text-white',
                'focus:outline-none focus:ring-2 focus:ring-white/20'
              )}
            />
          </Field>

          <Field>
            <Label className="text-sm font-medium text-white">Password</Label>
            <Input
              type="password"
              placeholder="••••••••"
              className={clsx(
                'mt-1 block w-full rounded-md border-none bg-white/5 px-3 py-2 text-sm text-white',
                'focus:outline-none focus:ring-2 focus:ring-white/20'
              )}
            />
          </Field>

          <Button
            onClick={onSubmit}
            type="submit"
            className="w-full rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            Log in
          </Button>
        </form>
      </Dialog.Panel>
    </Dialog>
  )
}
