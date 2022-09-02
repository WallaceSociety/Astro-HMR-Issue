export const structure: Record<Variant, { [key: string]: Structure }> = {
  default: {
    base: {
      heading: 'text-base font-bold tracking-wide text-gray-900',
      iconWrapper: 'flex items-center my-4 space-x-3',
      icon: 'icon w-6 h-6 bg-gray-500 hover:bg-green-500',
    },
  },
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Variant = 'default';

export type Structure = {
  heading?: string;
  iconWrapper?: string;
  icon?: string;
};

export default structure;