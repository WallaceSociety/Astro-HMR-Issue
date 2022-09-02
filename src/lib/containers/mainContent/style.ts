export const structure: Record<Variant, { [key: string]: Structure }> = {
  default: {
    base: {
      wrapper: 'mx-auto mt-8 p-4 lg:p-0 max-w-screen-lg'
    },
    typography: {
      wrapper: 'prose lg:prose-lg xl:prose-xl'
    }
  },
  sidebar: {
    base: {
      wrapper: 'flex space-x-8'
    }
  }
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Variant = 'default' | 'sidebar';

export type Structure = {
  wrapper?: string;
  leftWrapper?: string;
  rightWrapper?: string;
};

export default structure;
