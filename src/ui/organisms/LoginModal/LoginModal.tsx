import { Dialog } from '@headlessui/react'

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

      <Dialog.Panel className="relative z-10 w-full max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <Dialog.Title className="text-lg font-semibold mb-4">Login</Dialog.Title>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </form>
      </Dialog.Panel>
    </Dialog>
  )
}
