import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ConfirmationEmailProps {
  userFirstname: string;
  userLastname: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ConfirmationEmail = ({
  userFirstname, userLastname, message
}: ConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for submitting a request!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>We received your submission!</Heading>
            <Text style={text}>Hi {userFirstname} {' '} {userLastname},</Text>
            <Text style={text}>
              Thank you for submitting a request! Below, we have attached your form submission.
              We'll follow up with you shortly!
            </Text>
            <Text style={text}>
            For any future inquries related to this submission, please contact us through our {' '}
              <Link style={anchor} href="mailto:studio.brixnstones@gmail.com">
                email
              </Link>
              {' '} or by {' '}
              <Link style={anchor} href="tel: +12487562614">
                phone.
              </Link>
            </Text>
            <Text style={text}>See you soon!</Text>
          </Section>
          <Img
            src='https://cdn.discordapp.com/attachments/817432681633153029/1136369752667861092/logo2.png'
            width="225"
            alt="BrixNStones"
          />
        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
        <Text style={h2}>
          Your form submission: {' '}
          <span className="text-black">{message} </span>
        </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;

const main = {
  backgroundColor: '#f6f9fc',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  padding: '45px',
};

const text = {
  fontSize: '16px',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: '300',
  color: '#404040',
  lineHeight: '26px',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px 0',
  padding: '0',
};

const h2 = {
  color: '#333',
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontSize: '14px',
  margin: '0px 0',
  padding: '0',
};

const button = {
  backgroundColor: '#007ee6',
  borderRadius: '4px',
  color: '#fff',
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '210px',
  padding: '14px 7px',
};

const anchor = {
  textDecoration: 'underline',
};
