import PropTypes from 'prop-types'

const DetailTable = ({ details }) => {
  const titlesToShow = [
    'Title',
    'Year',
    'Runtime',
    'Director',
    'Actors',
    'Ratings',
  ]

  return (
    <table className="col-span-2 table-fixed overflow-hidden rounded-lg">
      <tbody>
        {Object.entries(details).map(([key, value], index) => {
          if (titlesToShow.includes(key))
            return (
              <tr key={index}>
                <td className="border text-right px-6 py-4 text-gray-400 font-medium w-1/4 sm:w1/6">
                  {key}
                </td>
                <td className="border px-6 py-4 text-gray-600 font-medium w-full">
                  {Array.isArray(value)
                    ? value.map((item) => (
                        <>
                          <span>{item.Source}</span> - <span>{item.Value}</span>
                          <br />
                        </>
                      ))
                    : value}
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
  )
}

DetailTable.propTypes = {
  details: PropTypes.object.isRequired,
}

export default DetailTable
