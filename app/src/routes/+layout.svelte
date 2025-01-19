<script lang="ts">
  import Footer from '$lib/footer.svelte';
  import Navbar from '$lib/navbar.svelte';
  import '../app.scss';
</script>

<Navbar />

<slot />

<Footer />
