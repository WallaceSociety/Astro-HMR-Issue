export const structure = (position: Position): Record<Variant, { [key: string]: Structure }> => {
  const structure = {
    default: {
      layout: {
        wrapper: 'relative w-full',
        img: 'absolute object-cover w-full h-full',
        overlay: 'relative flex flex-col w-full h-full',
        heading: 'max-w-none',
        columnWrapper: 'flex flex-wrap grow',
        column: 'w-full md:w-1/2',
      },
      spacing: {
        img: 'inset-0',
        column: '', // Spacing should happen in content not the column
      },
      typography: {
        heading: 'prose lg:prose-lg xl:prose-xl',
      },
    },
    light: {
      background: {
        overlay: 'bg-white bg-opacity-40',
      },
    },
    dark: {
      background: {
        overlay: 'bg-black bg-opacity-40',
      },
    },
  };

  // Prop Options
  if (position == 'center') {
    structure.default.spacing.column = 'mx-auto mb-4 last:mb-0 md:mb-0';
  }

  if (position == 'right') {
    structure.default.spacing.column = 'ml-auto mb-4 last:mb-0 md:mb-0';
  }

  return structure;
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Position = 'left' | 'center' | 'right';

export type Variant = 'default' | 'light' | 'dark';

export type Structure = {
  wrapper?: string;
  img?: string;
  overlay?: string;
  heading?: string;
  columnWrapper?: string;
  column?: string;
};

export default structure;
