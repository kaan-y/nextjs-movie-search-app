import MovieCard from '@/components/MovieCard'
import { shallow } from 'enzyme'

const movie = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMDkwMTJlMGMtMGJmMy00Mjg2LWEwOWEtZTAxNzQxMmVjYzVkXkEyXkFqcGdeQXVyNjc2NDI1ODA@._V1_SX300.jpg',
  Title: 'Red Heat',
  Type: 'movie',
  Year: '1988',
  imdbID: 'tt0095963',
}

describe('MovieCard', () => {
  it('renders without crashing', () => {
    shallow(<MovieCard movie={movie} />)
  })
  it('renders the title correctly', () => {
    const wrapper = shallow(<MovieCard movie={movie} />)
    expect(wrapper.find('h2').text()).toEqual(movie.Title)
  })
})
