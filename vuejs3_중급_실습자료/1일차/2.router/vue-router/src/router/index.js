import { createRouter, createWebHistory } from "vue-router";
// import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// router01
import BoardList1 from "@/components/router01/BoardList.vue";
import FileList1 from "@/components/router01/FileList.vue";
import PictureList1 from "@/components/router01/PictureList.vue";

// router02
import BoardList2 from "@/components/router02/BoardList.vue";
import BoardDetail2 from "@/components/router02/BoardDetail.vue";

// router03
import BoardList3 from "@/components/router03/BoardList.vue";
import BoardDetail3 from "@/components/router03/BoardDetail.vue";

// router04
import BoardList4 from "@/components/router04/BoardList.vue";
import BoardDetail4 from "@/components/router04/BoardDetail.vue";

// router05
import TheBoardView from "@/views/TheBoardView.vue";
import BoardList5 from "@/components/router05/BoardList.vue";
import BoardDetail5 from "@/components/router05/BoardDetail.vue";
import BoardWrite5 from "@/components/router05/BoardWrite.vue";
import BoardModify5 from "@/components/router05/BoardModify.vue";

// router06
import TheBoardView6 from "@/views/TheBoardView6.vue";
import BoardList6 from "@/components/router06/BoardList.vue";
import BoardDetail6 from "@/components/router06/BoardDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: HomeView,
    },
    // router01
    {
      path: "/r01/board",
      component: BoardList1,
    },
    {
      path: "/r01/file",
      component: FileList1,
    },
    {
      path: "/r01/picture",
      component: PictureList1,
    },
    // router02
    {
      path: "/r02/board",
      component: BoardList2,
    },
    {
      path: "/r02/board/:no",
      component: BoardDetail2,
    },
    // router03
    {
      path: "/r03/board",
      name: "board3",
      component: BoardList3,
    },
    {
      path: "/r03/board/:no",
      name: "boardview3",
      component: BoardDetail3,
    },
    // router04
    {
      path: "/r04/board",
      name: "board4",
      component: BoardList4,
    },
    {
      path: "/r04/board/:no",
      name: "boardview4",
      component: BoardDetail4,
    },
    //router05
    {
      path: "/r05/board",
      name: "board5",
      component: TheBoardView,
      // redirect: "/r05/board/list",
      redirect: { name: "boardlist5" },
      children: [
        {
          path: "list",
          name: "boardlist5",
          component: BoardList5,
        },
        {
          path: "view/:no",
          name: "boardview5",
          component: BoardDetail5,
        },
        {
          path: "write",
          name: "boardwrite5",
          component: BoardWrite5,
        },
        {
          path: "modify/:no",
          name: "boardmodify5",
          component: BoardModify5,
        },
      ],
    },
    //router06
    {
      path: "/r06/board",
      name: "board6",
      component: TheBoardView6,
      // redirect: "/r06/board/list",
      redirect: { name: "boardlist6" },
      children: [
        {
          path: "list",
          name: "boardlist6",
          component: BoardList6,
        },
        {
          path: "view/:no",
          name: "boardview6",
          component: BoardDetail6,
          props: true,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
