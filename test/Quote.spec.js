import { mount } from '@vue/test-utils'
import Quote from '@/components/Quote.vue'

describe('Quote', () => {
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      href: 'http://localhost:3000/'
    }
  });
  test('testing links', async () => {
    const wrapper = mount(Quote, {
      propsData: {
        idQuote: 1
      }
    })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(window.location.href).toBe('/character/2')
  })
})
