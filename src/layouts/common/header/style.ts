export const structure: Record<Variant, { [key: string]: Structure }> = {
  default: {
    base: {
      wrapper: 'w-full max-w-screen-xl flex flex-col flex-wrap md:flex-row',
      brandWrapper: '',
    },
    position: {
      wrapper: 'items-center p-5 mx-auto',
    },
    typography: {
      homeLink: 'hover:text-blue-700',
      brand: 'font-medium text-gray-900 text-xl'
    },
  },
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Variant = 'default';

export type Structure = {
  wrapper?: string;
  brandWrapper?: string;
  homeLink?: string;
  logo?: string;
  brand?: string;
  tagline?: string;
};

export default structure;
