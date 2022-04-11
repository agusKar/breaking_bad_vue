import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm).toBeTruthy()
  })

  test('props working fine', () => {
    const character = {
      img: '',
      name: 'Walter',
      occupation: [
        'oc1', 'oc2'
      ],
      nickname: 'Heisemberg',
      char_id: 2
    }

    const wrapper = mount(Card, {
      propsData: {
        Character: character
      }
    })
    const characterName = wrapper.find('h2[data-test="characterName"]')
    const characterNickname = wrapper.find('li[data-test="characterNickname"]')
    expect(characterName.text()).toMatch('Walter')
    expect(characterNickname.text()).toMatch('Nickname: Heisemberg')

    const characterButton = wrapper.find('[data-test="characterButton"]')
    expect(characterButton.text()).toMatch('More Info')
    /* wrapper.find('[data-test="characterButton"]').trigger('click')
    expect(window.location.pathname).toEqual('/character/2') */
  })
})
