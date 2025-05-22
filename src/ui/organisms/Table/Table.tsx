export type Column<T> = {
  label: string
  accessor: keyof T
}

type DataTableProps<T> = {
  columns: Column<T>[]
  data: T[]
}

export function DataTable<T extends Record<string, any>>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto bg-[#2e2f33] rounded-lg shadow-md">
      <table className="min-w-full text-sm text-gray-200">
        <thead className="bg-[#393a3f]">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-300"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-[#3d3e43] transition-colors">
              {columns.map((col) => (
                <td key={String(col.accessor)} className="px-4 py-3 whitespace-nowrap">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
