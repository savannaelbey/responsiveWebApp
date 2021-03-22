import React from 'react';
import { Div, Text } from 'atomize';

let infoContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci. Praesent interdum pharetra quam eu pharetra. Nullam commodo nec mi non cursus. In hac habitasse platea dictumst. Nunc nec tincidunt odio, nec suscipit elit. Nam suscipit lectus vel justo pulvinar ultrices. Sed convallis eget dui consectetur placerat. Nunc id elementum dolor. Duis suscipit pulvinar mi a tristique.'

const ReturnsProcess = () => {
  return (
    <Div>
      <Text p='1rem' textAlign='center' textSize='heading' style={{ fontWeight: 'bold' }}> Returns Process</Text>
      <Text textSize="paragraph" textAlign="center">{infoContent}</Text>
    </Div>
  );
}

export default ReturnsProcess;
