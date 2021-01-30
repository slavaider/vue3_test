<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link
            tag="a"
            class="nav-link"
            to="/"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/counter"
          >
            Counter
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/todo"
          >
            Todo
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/tabs"
          >
            Tabs
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/users"
          >
            Users
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/repos"
          >
            Repos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-link"
            to="/teleport"
          >
            teleport
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="container mt-2">
      <router-view />
    </div>
  </div>
</template>
