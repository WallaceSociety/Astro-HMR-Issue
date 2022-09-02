export const structure: Record<Variant, { [key: string]: Structure }> = {
    default: {
      base: {
        liner: 'mx-auto max-w-screen-xl',
        brandLink: 'inline-flex',
        column: 'md:w-full lg:w-1/2',
      },
      spacing: {
        wrapper: 'mt-8 py-4 md:pt-16 ',
        left: 'mx-8 mt-8 md:mt-0 xl:ml-0',
        right: 'mx-8 xl:mt-8',
        brandLink: 'items-center mb-8',
        brand: 'ml-2',
        aboutWrapper: 'mt-2',
        subheading: 'mb-2',
        nestedLeft: 'mt-8 lg:mt-0',
        nestedRight: 'mt-8 lg:mt-0',
        copyrightWrapper: 'my-8 py-8 mx-8 xl:mx-0',
      },
      typography: {
        wrapper: '',
        brand: 'text-xl font-bold tracking-wide text-gray-800 uppercase',
        text: 'prose text-sm',
        subheading: 'text-base font-bold tracking-wide text-gray-900',
        copyright: 'text-sm text-gray-600'
      },
      border: {
        wrapper: 'border-t-2 border-slate-300',
        copyrightWrapper: 'border-t-2 border-slate-100',
      }
    },
  };

  // -------------------------------------------------------------
  // --- No Styles Below This Line
  // -------------------------------------------------------------

  export type Variant = 'default';

  export type Structure = {
    wrapper?: string;
    liner?: string;
    column?: string;
    left?: string;
    brandLink?: string;
    logo?: string;
    brand?: string;
    subheading?: string;
    text?: string;
    aboutWrapper?: string;
    right?: string;
    nestedLeft?: string;
    nestedRight?: string;
    copyrightWrapper?: string;
    copyright?: string;
  };

  export default structure;