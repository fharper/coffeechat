<script lang="ts">
  import PersonCard from '$lib/personCard.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<div class="section">
  <div class="container">
    <div class="columns is-multiline">
      {#each data.people as person}
        <div class="column is-one-third">
          <PersonCard {person} />
        </div>
      {/each}
    </div>
  </div>
</div>
