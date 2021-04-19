import SearchBar from '@/components/SearchBar'
import { mount, shallow } from 'enzyme'
import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue({})

describe('SearchBar', () => {
  it('renders without crashing', () => {
    mount(<SearchBar />)
  })
  it('renders the placeholder', () => {
    const searchWrapper = mount(<SearchBar />)
    const input = searchWrapper.find('input')
    expect(input.at(0).props().placeholder).toBe('Search for any movie...')
  })
  it('should call function onChange', () => {
    const wrapper = shallow(<SearchBar />)
    const mockFunc = jest.fn()
    let input = wrapper.find('input')
    input.simulate('change', mockFunc())
    expect(mockFunc).toBeCalledTimes(1)
  })
})
