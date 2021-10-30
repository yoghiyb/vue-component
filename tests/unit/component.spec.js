import { mount, shallowMount, config } from '@vue/test-utils'
import MyRadioButton from '@/components/MyRadioButton.vue'

beforeAll(() => {
    config.renderStubDefaultSlot = true
})

afterAll(() => {
    config.renderStubDefaultSlot = false
})

describe('MyRadioButton.vue', () => {
    it('renders all props when passed', () => {
        const name = 'my-radio-btn'
        const id = 'radio-1'
        const value = 'my-value-1'
        const label = 'My Label'

        const myRadioBtn = shallowMount(MyRadioButton, {
            props: {
                name,
                id,
                value,
                label
            }
        })

        expect(myRadioBtn.props().id).toBe(id)
        expect(myRadioBtn.props().name).toBe(name)
        expect(myRadioBtn.props().value).toBe(value)
        expect(myRadioBtn.props().label).toBe(label)

        expect(myRadioBtn.find('.label').text()).toEqual(label)
    })

    it('render subcompoent inside MyRadioButton', () => {
        const form = '<input type="text" id="my-form" class="form-control">'
        const wrapper = shallowMount(MyRadioButton, {
            slots: {
                default: form
            }
        })

        expect(wrapper.find('#my-form').exists()).toBe(true)
    })

    it('render subcompoent inside subcompoent MyRadioButton', () => {
        const form1 = '<input type="text" id="form-1" class="form-control">'
        const form2 = '<input type="text" id="form-2" class="form-control">'

        const name1 = 'my-radio-btn'
        const id1 = 'radio-1'
        const value1 = 'my-value-1'
        const label1 = 'My Label 1'

        const name2 = 'my-radio-btn'
        const id2 = 'radio-2'
        const value2 = 'my-value-2'
        const label2 = 'My Label 2'

        const wrapper2 = shallowMount(MyRadioButton, {
            props: {
                name: name2,
                id: id2,
                value: value2,
                label: label2
            },
            slots: {
                default: form2
            }
        })

        const wrapper1 = shallowMount(MyRadioButton, {
            props: {
                name: name1,
                id: id1,
                value: value1,
                label: label1
            },
            slots: {
                default: [
                    form1,
                    wrapper2.html()
                ]
            }
        })

        expect(wrapper1.props().id).toBe(id1)
        expect(wrapper1.props().name).toBe(name1)
        expect(wrapper1.props().value).toBe(value1)
        expect(wrapper1.props().label).toBe(label1)

        expect(wrapper1.find('.label').text()).toEqual(label1)

        expect(wrapper2.props().id).toBe(id2)
        expect(wrapper2.props().name).toBe(name2)
        expect(wrapper2.props().value).toBe(value2)
        expect(wrapper2.props().label).toBe(label2)

        expect(wrapper2.find('.label').text()).toEqual(label2)

        expect(wrapper1.find('#form-1').exists()).toBe(true)
        expect(wrapper1.find('#form-2').exists()).toBe(true)
    })
})
