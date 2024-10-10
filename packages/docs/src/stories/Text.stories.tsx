import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jj-consult-ui/react-ui'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo deserunt voluptates inventore amet dolorem sed suscipit et dignissimos unde? Distinctio saepe minima ratione repellendus, nulla explicabo dolorem nam neque non.',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      }
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}