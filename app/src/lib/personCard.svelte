<script lang="ts">
  import type { Person } from '$lib/people';
  import SocialLinks from '$lib/socialLinks.svelte';

  export let person: Person;

  const location: string[] = [];
  if (person.city) {
    location.push(person.city);
  }
  if (person.country) {
    location.push(person.country);
  }
</script>

<div class="card is-flex is-flex-direction-column">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{person.name}</p>
        <p class="subtitle is-6 mb-0">{person.title}, {person.company}</p>

        {#if location.length > 0}
          <p class="subtitle is-6 mb-0">{location.join(', ')}</p>
        {/if}

        <SocialLinks {person} />
      </div>
    </div>

    {#if person['online-only']}
      <div class="tags">
        <span class="tag is-warning">Online Only</span>
      </div>
    {/if}

    <div class="tags">
      {#each person.languages as lang}
        <span class="tag">{lang}</span>
      {/each}
    </div>

    <div class="tags">
      {#each person.topics as topic}
        <span class="tag">{topic}</span>
      {/each}
    </div>
  </div>

  <footer class="card-footer">
    <a href={person.scheduling} target="_blank" class="card-footer-item">
      Schedule a call
    </a>
  </footer>
</div>

<style lang="scss" scoped>
  .card {
    height: 100%;
    .card-content {
      height: 100%;
    }
  }
</style>
