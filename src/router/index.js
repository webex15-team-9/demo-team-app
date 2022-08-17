import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import MemoApp from "@/views/MemoApp.vue"
import QuizApp from "@/views/QuizApp.vue"
import PaletteApp from "@/views/PaletteApp.vue"
import Original from "@/views/Original.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/memo",
    name: "MemoApp",
    component: MemoApp,
  },
  {
    path: "/quiz",
    name: "QuizApp",
    component: QuizApp,
  },
  {
    path: "/palette",
    name: "PaletteApp",
    component: PaletteApp,
  },
  {
    path: "/original",
    name: "Original",
    component: Original,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
