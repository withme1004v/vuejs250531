<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img src="@/assets/mmcafe.png" class="rounded mx-auto d-block" id="logo" alt="..." />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto ms-5 my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <router-link :to="{ name: 'board' }" class="nav-link">커뮤니티공간</router-link>
            <!-- <a class="nav-link" href="#">커뮤니티공간</a> -->
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              HELP DESK
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">공지사항</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">매장이용안내</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">단골매장소식</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="검색..." aria-label="Search" />
          <button class="btn btn-outline-success" type="button">search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 9.375rem;
}
</style>
