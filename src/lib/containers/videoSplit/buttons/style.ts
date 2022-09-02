export const structure: { [key: string]: Structure } = {
  base: {
    wrapper: 'w-full flex flex-wrap md:flex-nowrap md:max-w-md',
    button: 'block w-full rounded shadow-md',
    buttonB: 'mt-4 md:mt-0'
  },
  spacing: {
    wrapper: 'mx-auto md:space-x-4 lg:ml-auto lg:mr-0',
    button: 'items-center justify-center px-6 py-4',
  },
  colors: {
    button: 'text-white',
    buttonA: 'bg-blue-500 hover:bg-blue-700',
    buttonB: 'bg-green-500 hover:bg-green-700',
  },
  typography: {
    button: 'font-medium'
  },
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Variant = 'default';

export type Structure = {
  wrapper?: string;
  button? : string;
  buttonA?: string;
  buttonB?: string;
};

export default structure;