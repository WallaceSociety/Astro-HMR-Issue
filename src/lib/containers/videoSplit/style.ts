export const structure: Record<Variant, { [key: string]: Structure }> = {
  default: {
    base: {
      liner: 'max-w-screen-xl mx-auto',
      textColumn: 'flex flex-col',
      buttonWrapper: 'w-full',
      videoColumn: 'flex h-full',
      video: 'w-full aspect-video',
    },
    spacing: {
      textColumn: 'mx-auto py-6 px-4 md:mx-0 justify-center items-center',
      videoColumn: 'justify-center items-center px-4 py-16',
    },
    background: {
      wrapper: 'bg-orange-100',
    },
    typography: {
      textColumn: 'prose text-justify',
    },
  },
};

// -------------------------------------------------------------
// --- No Styles Below This Line
// -------------------------------------------------------------

export type Variant = 'default';

export type Structure = {
  wrapper?: string;
  liner?: string;
  textColumn?: string;
  buttonWrapper?: string;
  videoColumn?: string;
  video?: string;
};

export default structure;
