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
  const { startDate, endDate } = range

  const calendarYears = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 }, 
    (v, i) => startDate.getFullYear() + i)

  const calendarMonths = Array.from({ length: 12 }, (v, i) => i)

  export let pageMonth = endDate.getMonth()
  export let pageYear = endDate.getFullYear()

  let open = true
  let selectedYear = pageYear
</script>

<details bind:open>
  <summary 
    data-emoji-before="📅"
    >
    <h2>
      Archive
      &mdash;
      {new Date(pageYear, pageMonth).toLocaleString([], { month: 'short', year: 'numeric' })}
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
    <!-- <div 
      class="year"
      class:current={year === pageYear.year}
      > -->
      <label
        class="year"
        class:current={year === pageYear.year}
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
          {#if dateIsOutOfBounds({ month, year })}
            <span class="out-of-bounds">
              {new Date(year, month).toLocaleString([], { month: 'short' })}
            </span>
          {:else}
            <a 
              href="/archive/{year}/{`${month + 1}`.padStart(2, '0')}"
              class="month"
              class:current={month === pageYear.month}
              >
              {new Date(year, month).toLocaleString([], { month: 'short' })}
            </a>
          {/if}
        {/each}
      </div>
    <!-- </div> -->
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