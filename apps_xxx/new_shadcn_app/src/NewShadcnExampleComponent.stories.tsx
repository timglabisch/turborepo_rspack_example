import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import NewShadcnExampleComponent from './NewShadcnExampleComponent';

const meta = {
  title: 'Components/NewShadcnExampleComponent',
  component: NewShadcnExampleComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewShadcnExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
