<template>
  <h1>Home</h1>
  <div>
    <router-link
      to="/quiz"
      class="navigation__link"
      exact-active-class="navigation__link--exact-active"
      >Vue クイズ</router-link
    ><br />
    <router-link
      to="/palette"
      class="navigation__link"
      exact-active-class="navigation__link--exact-active"
      >Vue パレット</router-link
    ><br />
    <router-link
      to="/memo"
      class="navigation__link"
      exact-active-class="navigation__link--exact-active"
      >Vue メモ</router-link
    ><br />
  </div>
</template>
