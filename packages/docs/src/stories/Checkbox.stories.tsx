import { Box, Checkbox, CheckboxProps, Text } from "@jj-consult-ui/react-ui";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}