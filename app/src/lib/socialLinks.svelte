<script lang="ts">
  import linkedinIcon from '$lib/icons/linkedin.svg';
  import twitterIcon from '$lib/icons/twitter.svg';
  import mastodonIcon from '$lib/icons/mastodon.svg';
  import type { Person } from '$lib/people';

  export let person: Person;

  interface ILink {
    icon?: string;
    classes?: string;
    img?: string;
    link?: string;
  }

  const links: ILink[] = [
    {
      img: linkedinIcon,
      link: person.linkedin,
    },
    {
      img: mastodonIcon,
      link: person.mastodon,
    },
    {
      img: twitterIcon,
      link: person.twitter,
    },
    {
      icon: 'web',
      classes: 'has-text-grey-light',
      link: person.website,
    },
  ];
</script>

<div class="is-flex">
  {#each links as item}
    {#if item.link}
      <a href={item.link} target="_blank">
        {#if item.img}
          <img
            src={item.img}
            alt={person.name}
            class="mr-2 mt-2"
            width="24px"
          />
        {:else}
          <span class="mr-2 mt-2 icon {item.classes}">
            <i class="mdi mdi-24px mdi-{item.icon}"></i>
          </span>
        {/if}
      </a>
    {/if}
  {/each}
</div>
