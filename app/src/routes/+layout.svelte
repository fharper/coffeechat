<script lang="ts">
  import Footer from '$lib/footer.svelte';
  import Navbar from '$lib/navbar.svelte';
  import '../app.scss';
</script>

<svelte:head>
  <title>Coffee chats</title>
</svelte:head>

<Navbar />

<slot />

<Footer />
