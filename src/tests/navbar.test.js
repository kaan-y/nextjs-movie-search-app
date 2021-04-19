import Navbar from '@/components/Navbar'
import { mount } from 'enzyme'

describe('Navbar', () => {
  it('renders without crashing', () => {
    mount(<Navbar />)
  })
  it('renders the title', () => {
    const wrapper = mount(<Navbar />)
    const title = wrapper.find('a')
    expect(title.text()).toBe('Movie Search App')
  })
})
