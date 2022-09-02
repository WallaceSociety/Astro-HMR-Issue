export default function tailwind(tailwind, amendVariant, amendStyle, overideStyle) {
  const variant = overideStyle ? { ...overideStyle } : { ...tailwind.default, ...tailwind[amendVariant], ...amendStyle };
  const structure = {};
  for (const [index, cat] of Object.entries(variant)) {
    for (const [elemIndex, elm] of Object.entries(cat)) {
      structure[elemIndex] = structure[elemIndex] ? [structure[elemIndex], elm].join(' ') : elm.trim();
    }
  }
  return structure;
}

export function tailwindNoVariant(tailwind) {
  const structure = {};
  for (const [index, cat] of Object.entries(tailwind)) {
    for (const [elemIndex, elm] of Object.entries(cat)) {
      structure[elemIndex] = structure[elemIndex] ? [structure[elemIndex], elm].join(' ') : elm.trim();
    }
  }
  return structure;
}


// Typed Version won't work as export because structre is always different
// export default function tailwind(): Structure {
//   const variant = { ...styles.default };
//   const structure = {} as Structure;

//   for (const [index, cat] of Object.entries(variant)) {
//     for (const [elemIndex, elm] of Object.entries(cat)) {
//       const elmKey = elemIndex as keyof typeof cat;
//       structure[elmKey] = structure[elmKey] ? [structure[elmKey], elm].join(' ') : elm.trim();
//     }
//   }
//   return structure;
// }