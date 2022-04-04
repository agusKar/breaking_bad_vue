import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import { BButton } from 'bootstrap-vue'
/*import { createLocalVue } from '@vue/test-utils'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)
*/

describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm).toBeTruthy()
  })

  test('props working fine', async () => {
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
      //localVue,
      propsData: {
        Character: character
      },
      stubs: {
        'b-button': BButton
      }
    })
    const characterName = wrapper.find('h2[data-test="characterName"]')
    const characterNickname = wrapper.find('li[data-test="characterNickname"]')
    expect(characterName.text()).toMatch('Walter')
    expect(characterNickname.text()).toMatch('Nickname: Heisemberg')

    const characterButton = wrapper.find('[data-test="characterButton"]')
    expect(characterButton.text()).toMatch('More Info')
    //await wrapper.find('[data-test="characterButton"]').trigger('click')
    //expect(window.location.pathname).toEqual('/character/2')
  })
})
