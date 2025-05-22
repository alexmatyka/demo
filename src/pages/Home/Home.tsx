import { type Column, DataTable } from '@/ui/organisms/Table/Table'
import { CryptoConverter } from '@/ui/organisms/CryptoConverter/CryproConverter.tsx'

type User = {
  name: string
  email: string
  role: string
}

const columns: Column<User>[] = [
  { label: 'Name', accessor: 'name' },
  { label: 'Email', accessor: 'email' },
  { label: 'Role', accessor: 'role' },
]

const data: User[] = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
]

export default function Home() {
  return (
    <div className="space-y-4 px-4">
      <h1 className="text-2xl font-semibold text-gray-100">Your Assets</h1>
      <DataTable columns={columns} data={data} />
      <CryptoConverter />
    </div>
  )
}
