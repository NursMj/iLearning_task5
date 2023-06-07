import Papa from 'papaparse'

function exportToCSV(data: object[], filename: string): void {
  const csv = Papa.unparse(data)

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

  const link = document.createElement('a')
  if (link.download !== undefined) {
    link.href = URL.createObjectURL(blob)
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export default exportToCSV