import Home from "@/Pages/Home";
import Records from "@/Pages/Records";
import Columns from "@/Pages/Columns";

import { MemoIcon, MenuIcon, ChallengeIcon, InfoIcon } from "@/assets/icons";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/records",
    element: Records,
    title: "自分の記録",
    icon: <MemoIcon />,
  },
  {
    path: "/challenge",
    element: Home,
    title: "チャレンジ",
    icon: <ChallengeIcon />,
  },
  {
    path: "/info",
    element: Home,
    title: "お知らせ",
    icon: (
      <span className="relative">
        <span className="absolute flex justify-center items-center top-0 -right-1 h-4 w-4 rounded-full bg-orange-dark text-xs text-light font-thin">
          1
        </span>
        <InfoIcon />
      </span>
    ),
  },
  {
    path: "/menu",
    icon: <MenuIcon />,
    subRoutes: [
      { path: "/records", title: "自分の記録", element: Home },
      { path: "/weight-chart", title: "体重グラフ", element: Home },
      { path: "/goal", title: "目標", element: Home },
      { path: "/course", title: "選択中のコース", element: Home },
      { path: "/columns", title: "コラム一覧", element: Columns },
      { path: "/settings", title: "設定", element: Home },
    ],
  },
];

export default routes;
