const DetailTable = ({ details }) => {
  const titlesToShow = [
    'Title',
    'Year',
    'Runtime',
    'Director',
    'Actors',
    'Rewards',
  ]

  return (
    <table className="col-span-2 table-auto">
      <tbody>
        {Object.entries(details).map(([key, value], index) => {
          if (titlesToShow.includes(key))
            return (
              <tr key={index}>
                <td className="border px-6 py-4 text-gray-400 font-medium">
                  {key}
                </td>
                <td className="border px-6 py-4 text-gray-600 font-medium">
                  {value}
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default DetailTable
