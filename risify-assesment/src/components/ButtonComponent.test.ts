import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonComponent from '../components/ButtonComponent.vue';

describe('ButtonComponent', () => {
  // Test podstawowego renderowania
  it('renders a button with default props', () => {
    const wrapper = mount(ButtonComponent);
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  // Test renderowania z tagiem 'a'
  it('renders an anchor when the "tag" prop is "a"', () => {
    const wrapper = mount(ButtonComponent, {
      props: { tag: 'a' }
    });
    expect(wrapper.element.tagName).toBe('A');
  });

  // Test renderowania z tagiem 'router-link'
  it('renders a router-link when the "tag" prop is "router-link"', () => {
    const wrapper = mount(ButtonComponent, {
      props: { tag: 'router-link' }
    });
    expect(wrapper.element.tagName).toBe('ROUTER-LINK');
  });

  // Test reagowania na props "disabled"
  it('emits a click event when not disabled', async () => {
    const wrapper = mount(ButtonComponent);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });

  it('matches the snapshot', () => {
    const wrapper = mount(ButtonComponent, {
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
