import { LoginForm } from './LoginForm';
import { Button } from './Button';
import styled from 'styled-components';
import { HiArchive, HiArrowCircleUp } from 'react-icons/hi';
import { Box } from './Box';

const Text = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l}px;
  padding: ${p => p.theme.space[4]}px;
`;

export const App = () => {
  return (
    <Box
      bg="accent"
      color="text"
      pt={4}
      width="50%"
      display="flex"
      align-items="center"
      border="normal"
      borderColor="text"
      position="relative"
      as="main"
    >
      <Box display="flex" justify-content="flex-end" mt={4} as="section">
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          magni!
        </Text>
      </Box>
      <Box mt={6} as="section">
        <LoginForm />

        <Button icon={HiArchive}>Search</Button>
        <Button icon={HiArrowCircleUp} type="submit" disabled>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
