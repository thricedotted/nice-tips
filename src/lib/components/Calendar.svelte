<script context="module">
  const range = {
    startDate: new Date(2021, 10),
    endDate: new Date()
  }

  function dateIsOutOfBounds({ month, year }) {
    const date = new Date(year, month)
    const { startDate, endDate } = range

    return date < startDate || date > endDate
  }

  export function validateMonthYear({ month, year }) {
    let intMonth = parseInt(month)
    let intYear = parseInt(year)

    if (isNaN(intYear)) {
      throw Error(`${year} is not a number`)
    }

    else if (isNaN(intMonth)) {
      throw Error(`${month} is not a number`)
    }

    else if (intMonth < 1 || intMonth > 12) {
      throw Error(`${month} is not a valid month number`)
    }

    const date = new Date(intYear, intMonth)
    const { startDate, endDate } = range

    if (date < startDate) {
      intYear = startDate.getFullYear()
      intMonth = startDate.getMonth() + 1
    }

    else if (date > endDate) {
      intYear = endDate.getFullYear()
      intMonth = endDate.getMonth() + 1
    }

    return {
      year: intYear,
      month: intMonth - 1
    }
  }
</script>

<script>
  import { page } from '$app/stores'

  const { startDate, endDate } = range

  const calendarYears = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 }, 
    (v, i) => startDate.getFullYear() + i)

  const calendarMonths = Array.from({ length: 12 }, (v, i) => i)

  function getSelected(params) {
    try {
      return validateMonthYear(params)    
    }
    catch {
      const { endDate } = range

      return { 
        year: endDate.getFullYear(),
        month: endDate.getMonth(),
      }
    }
  }

  $: selected = getSelected($page.params)
</script>

<details open>
  <summary 
    data-emoji-before="📅"
    >
    Archive
    &mdash;
    {new Date(selected.year, selected.month).toLocaleString([], { month: 'short', year: 'numeric' })}
  </summary>

  {#each calendarYears as year}
  <div 
    class="year"
    class:selected={year === selected.year}
    >
    <h2>{year}</h2>

    <div class="months">
      {#each calendarMonths as month}
        {#if dateIsOutOfBounds({ month, year })}
          <span class="out-of-bounds">
            {new Date(year, month).toLocaleString([], { month: 'short' })}
          </span>
        {:else}
          <a 
            href="/archive/{year}/{`${month + 1}`.padStart(2, '0')}"
            class="month"
            class:selected={month === selected.month}
            >
            {new Date(year, month).toLocaleString([], { month: 'short' })}
          </a>
        {/if}
      {/each}
    </div>
  </div>
  {/each}
</details>

<style>
  details {
    font-size: var(--font-m);
    position: sticky;
    top: var(--gap);
    background: var(--bg-color);
    z-index: 1;

    background: var(--bg-color);
  }

  h2 {
    font: inherit;
  }

  .year {
    display: flex;
    align-items: baseline;
    gap: var(--bigger-gap);
  }

  .months {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols, 4), minmax(4ch, 1fr));
  }

  @media (min-width: 60ch) {
    .months {
      --cols: 6;
    }
  }

  @media (min-width: 100ch) {
    .months {
      --cols: 12;
    }
  }

  .year.selected h2 {
    color: red;
  }

  .year.selected .month.selected {
    color: red;
  }

  .out-of-bounds {
    color: var(--fg-color-lighter);
  }
</style>