export const ErrorFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-900 text-red-300 rounded-2xl shadow-lg space-y-2">
      <span className="text-4xl font-bold text-red-500 animate-pulse">BOOM!</span>
      <span className="text-lg">Something has gone terribly wrong</span>
      <span className="text-sm text-gray-400">(but we already sent droids to fix it)</span>
    </div>
  )
}
