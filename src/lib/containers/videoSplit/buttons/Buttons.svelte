<script lang="ts">
  import { tailwindNoVariant as tailwind } from '../../../tailwind';
  import structure from './style';
  import type { Structure } from './style';

  // Props
  export let btnA: string = 'Download';
  export let btnB: string = 'Subscribe';
  export let btnALink: string = '#top';
  export let btnBLink: string = '#top';

  // Click Handler
  const handleClick = (btn: string) => (e: MouseEvent) => {
    if (btn === 'A' && btnALink.charAt(0) === '#') {
      scrollIntoView(btnALink);
    }
    if (btn === 'A' && btnALink.charAt(0) !== '#') {
      window.location.href = btnALink;
    }
    if (btn === 'B' && btnBLink.charAt(0) === '#') {
      scrollIntoView(btnBLink);
    }
    if (btn === 'B' && btnBLink.charAt(0) !== '#') {
      window.location.href = btnBLink;
    }
    return false;
  };

  // Scroller
  function scrollIntoView(scrollTo) {
    const el = document.querySelector(scrollTo);
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }

  const { wrapper, button, buttonA, buttonB } = tailwind(structure) as Structure;
</script>

<div class={wrapper} data-class="wrapper">
  <button on:click={handleClick('A')} type="button" class={[button, buttonA].join(' ')} data-class="buttonA"> {btnA} </button>
  <button on:click={handleClick('B')} type="button" class={[button, buttonB].join(' ')} data-class="buttonB"> {btnB} </button>
</div>
