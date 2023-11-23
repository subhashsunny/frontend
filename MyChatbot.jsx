import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
//import '..s/infi.png';
const steps = [
  {
    id: '0',
    message: 'Welcome to the chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger:'4',
  },
  {
    id: '4',
    message: 'How may i help you!',
    trigger:'5',
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    trigger:'7',
    options: [
      { value: 1, label: 'transactions issues',extraInfo:'transactional dealings and issues will be corrected in transactions',  trigger: 'transactions',},
      { value: 2, label: 'Payment issues',extraInfo:'payment debit details,successfully or fail details will be shown',trigger: 'payments',},
          { value: 3, label: 'fixed deposit issues',extraInfo:'fixed deposit amount,intrest and years to withdraw details',  trigger: 'fixeddeposit', },
          { value: 4, label: 'gold rate issues',extraInfo:'Daily changes changes gold rate with our income',trigger: 'golddeposits', },
          { value: 5, label: 'credit card issues',extraInfo:'credit card,monthly bill,intrest etc',  trigger: 'creditcard',},
          { value: 6, label: 'Debit card issues',extraInfo:'Debid card,balance avalable,profits',  trigger: 'Debitcard' },
          { value: 7, label: 'choose here to write your issue',extraInfo:'you can write your issue in your own words if not available above',trigger:'Writeissues',},
     ],
  },{
  id:'transactions',
  message: ({ previousValue }) => {
    // Access the extraInfo of the selected option
const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
    return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
  },
  trigger: 'service',
},
{
    id:'payments',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger: 'service',
  },
  {
    id:'fixeddeposit',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger: 'service',
  },
  {
    id:'golddeposits',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger: 'service',
  },
  {
    id:'creditcard',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger: 'service',
  },
  {
    id:'Debitcard',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger: 'service',
  },
  {
    id:'Writeissues',
    message: ({ previousValue }) => {
      // Access the extraInfo of the selected option
  const selectedOption = steps.find(step => step.id === '6').options.find(option => option.value === previousValue);
      return `You selected: ${selectedOption.label}. Here's some info: ${selectedOption.extraInfo}`;
    },
    trigger:'write',
  },
  {
    id:'write',
    user: true,
    trigger: 'service',
  },
  {
    id:'service',
    message:'Our customer executive will contact you shortly',
    end: true
  },
];
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, sans-serif',
  headerBgColor: '#197B22',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#0F3789',
  botFontColor: '#fff',
  userBubbleColor: '#FF5733',
  userFontColor: '#fff',
};
const config = {
  botAvatar: "https://media.licdn.com/dms/image/D4E0BAQENJsIHQHM8pQ/company-logo_200_200/0/1687442778909/infinite_computer_solutions_logo?e=2147483647&v=beta&t=x3q9Inh2U2Cuac_ZfxSbLxab8RUrYb65S64RuL0vrBI",
  floating: true,
};
 
function MyChatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Help"
        steps={steps}
        floating={true}
        recognitionEnable={true}
        {...config}
      />
    </ThemeProvider>
  );
}
 
export default MyChatbot;