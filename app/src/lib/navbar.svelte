<script lang="ts">
  import githubIcon from '$lib/icons/github.svg';
  import logo from '$lib/icons/logo.png';
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a
        class="navbar-item has-text-white is-size-2 has-text-weight-bold"
        href="/"
      >
        <img src={logo} alt="Logo" />
        Coffee Chats
      </a>

      <!-- svelte-ignore a11y_missing_attribute -->
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              class="button is-text"
              aria-label="Source code"
              href="https://github.com/fharper/coffeechat"
              target="_blank"
            >
              <img src={githubIcon} alt="Source code" width="36px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
