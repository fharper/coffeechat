<script lang="ts">
  import PersonCard from '$lib/personCard.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<div class="section">
  <div class="container is-size-3">
    List of awesome people offering their time 🎉 <strong>for free</strong> 🎉
    to have a
    <a
      href="https://www.indeed.com/career-advice/career-development/coffee-chat"
      target="_blank">coffee chat</a
    > with others about different topics, mostly in a mentorship kind of way.
  </div>
</div>

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
