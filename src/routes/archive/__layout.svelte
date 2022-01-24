<script context="module">
  import { normalizeParams } from './_util'
  import { monthYearToBoundedDate } from '$lib/util'

  export async function load({ fetch, params }) {
    try {
      const date = monthYearToBoundedDate(params)

      // normalize month and year in URL
      const { month, year } = normalizeParams(date)

      if (params.month !== month || params.year !== year) {

        return {
          status: 301,
          redirect: `/archive/${year}/${month}`
        }
      }

      return {
        stuff: { date },
        props: { date }
      }

    }

    catch (error) {
      return {
        status: 400,
        error
      }
    }
  }
</script>

<script>
  import Calendar from '$lib/components/Calendar.svelte'

  export let date = new Date()
</script>

<svelte:head>
  <style>
    .page {
      --page-max-width: 60ch;
    }
  </style>
</svelte:head>

<div class="welcome">
  <p>
    Welcome to the Tip archive!
    Whenever somebody <span class="saves">saves</span> a Tip, I bring it here for safekeeping.
  </p>
</div>

<Calendar pageDate={date} />

<slot></slot>

<style>
  .welcome {
    position: relative;
    font-size: var(--font-s);
    background: var(--bg-color-dark);
    padding: var(--big-gap);
    margin-top: var(--big-gap);
  }

  .welcome p {
    margin: 0;
  }

  /* TODO: just put a clip path with the correct shape on .welcome */
  .welcome::before {
    content: ' ';
    position: absolute;
    top: -0.4rem;
    left: 1px;
    background: inherit;
    width: 1rem;
    height: 1rem;
    clip-path: polygon(50% 0, 0 50%, 100% 50%);
  }

  .saves::before, .saves::after {
    content: "💖";
  }
</style>
