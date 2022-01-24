<script>
  import { dateRange } from '$lib/util'

  const { startDate, endDate } = dateRange

  const calendarYears = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 }, 
    (v, i) => startDate.getFullYear() + i)

  const calendarMonths = Array.from({ length: 12 }, (v, i) => i)

  function dateIsOutOfBounds(date) {
    return date < dateRange.startDate || date > dateRange.endDate
  }

  export let pageDate
  pageDate.year = () => pageDate.getFullYear()
  pageDate.month = () => pageDate.getMonth()

  let open = true
  let selectedYear = pageDate.year
</script>

<details bind:open>
  <summary 
    data-emoji-before="📅"
    >
    <h2>
      Archive
      &mdash;
      {pageDate.toLocaleString([], { month: 'short', year: 'numeric' })}
    </h2>
    <span class="toggle-hint">
      (click to {open ? 'close' : 'open'} calendar)
    </span>
  </summary>

  <div 
    class="calendar"
    style:--nYears={calendarYears.length}
    >
    {#each calendarYears as year}
      <label
        class="year"
        class:current={year === pageDate.year}
        class:selected={year === selectedYear}
        >
        <input 
          type="radio" 
          bind:group={selectedYear} 
          value={year}
        >
        <span>{year}</span>
      </label>

      <div class="months">
        {#each calendarMonths as month}

          {@const date = new Date(year, month)}
          {@const shortMonth = date.toLocaleString([], { month: 'short' })}

          {#if dateIsOutOfBounds(date)}
            <span class="out-of-bounds">
              {shortMonth}
            </span>
          {:else}
            <a 
              href="/archive/{year}/{date.toLocaleString([], { month: '2-digit' })}"
              class="month"
              class:current={year === pageDate.year && month === pageDate.month}
              >
              {shortMonth}
            </a>
          {/if}
        {/each}
      </div>

    {/each}
  </div>
</details>

<style>
  details {
    font-size: var(--font-m);
    position: sticky;
    top: var(--gap);
    margin-top: var(--big-gap);
    background: var(--bg-color);
    z-index: 1;

    background: var(--bg-color);
    border: 1px solid #ccc;
    padding: var(--gap);
  }

  summary {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    cursor: pointer
  }

  h2 {
    font: inherit;
    margin: 0;
    flex: 1 0 auto;

    font-size: var(--font-s);
  }

  .toggle-hint {
    font-size: var(--font-xs);
  }

  .calendar {
    display: grid;
    grid-template-columns: repeat(var(--nYears, 2), auto);
    gap: var(--gap);
    margin: var(--gap) 0;
  }

  .year {
    grid-row: 1;
  }

  .months {
    grid-row: 2;
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: repeat(var(--cols, 4), minmax(4ch, 1fr));
  }

  .year:not(.selected) + .months {
    display: none;
  }

  @media (min-width: 60ch) {
    .calendar {
      grid-template-columns: auto 1fr;
      gap: var(--bigger-gap);
    }

    .year {
      grid-row: auto;
      grid-column: 1;
      justify-self: left;
    }

    .months {
      grid-row: auto;
      grid-column: 2;
      --cols: 6;
    }

    .year:not(.selected) + .months {
      display: grid;
    }
  }

  @media (min-width: 100ch) {
    .months {
      --cols: 12;
    }
  }

  .year.current h3 {
    color: red;
  }

  .year.current .month.current {
    color: red;
  }

  .out-of-bounds {
    color: var(--fg-color-lighter);
  }
</style>