<script>
  import { dateRange } from '$lib/util'

  const { startDate, endDate } = dateRange

  const calendarYears = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 }, 
    (v, i) => startDate.getFullYear() + i
  )

  const calendarMonths = Array.from({ length: 12 }, (v, i) => i)

  function dateIsOutOfBounds(date) {
    return date < dateRange.startDate || date > dateRange.endDate
  }

  export let pageDate
  $: pageDate.year = pageDate.getFullYear()
  $: pageDate.month = pageDate.getMonth()

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
        >
        <input 
          type="radio" 
          bind:group={selectedYear} 
          value={year}
        >
        <span>{year}</span>
      </label>

      <div 
        class="months"
        class:selected={year === selectedYear}
        >
        {#each calendarMonths as month}

          {@const date = new Date(year, month)}
          {@const shortMonth = date.toLocaleString([], { month: 'short' })}

          {#if dateIsOutOfBounds(date)}
            <span class="month out-of-bounds">
              {shortMonth}
            </span>
          {:else}
            <a 
              href="/archive/{year}/{date.toLocaleString('en-US', { month: '2-digit' })}"
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
    font-size: var(--font-s);
    position: sticky;
    top: var(--gap);
    margin-top: var(--big-gap);
    background: var(--bg-color);
    z-index: 1;

    background: var(--bg-color);
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    padding: var(--gap);
  }

  details[open] {
    background: var(--bg-color-dark);
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
    font-weight: bold;
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

    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .year {
    grid-row: 1;
  }

  .months {
    grid-row: 2;
    grid-column: 1 / -1;

    display: grid;
    gap: var(--shim);
    grid-template-columns: repeat(var(--cols, 4), minmax(4ch, 1fr));
  }

  .month {
    padding: var(--gap);
    box-shadow: none;
    border-radius: 0.5em;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-decoration-color: transparent;
  }

  a.month:not(.current) {
    text-decoration-color: var(--fg-color-lighter);
  }

  a.month:hover, a.month:focus {
    background: var(--bg-color);
  }

  .month.current {
    font-weight: bold;
    background: var(--bg-color);
    text-decoration: none;
  }

  .months:not(.selected) {
    display: none;
  }

  .year input[type=radio] {
    display: none;
  }

  .year input[type=radio] + span {
    display: block;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: var(--shim);
  }

  .year input[type=radio]:not(:checked) + span {
    color: var(--fg-color-light);
    font-weight: normal;
  }

  .year input[type=radio]:checked + span {
    background: var(--bg-color);
    border-color: transparent;
  }

  .out-of-bounds {
    color: var(--fg-color-lighter);
    cursor: not-allowed;
    font-weight: normal;
    /* display: none; */
  }

  @media (min-width: 60ch) {
    .calendar {
      grid-template-columns: auto 1fr;
      gap: var(--gap);
      align-items: baseline;
      font-size: var(--font-s);
    }

    .year {
      grid-row: auto;
      grid-column: 1;
      justify-self: left;
      padding: 0;
    }

    .months {
      grid-row: auto;
      grid-column: 2;
      --cols: 6;
    }

    .months:not(.selected) {
      display: grid;
    }

    .month {
      padding: var(--shim);
    }

    .year input[type=radio]:not(:checked) + span,
    .year input[type=radio]:checked + span {
      background: transparent;
      border: none;
      font-weight: bold;
      color: inherit;
    }
  }

  @media (min-width: 100ch) {
    .months {
      --cols: 12;
    }
  }
</style>
