import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3';
    const wrapper = mount(HelloWorld, { props: { msg } });
    expect(wrapper.find('h2').text()).toEqual(msg);
  });
});
