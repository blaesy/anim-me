import { FlyFromBottomRight } from "./animations/flyFromBottomRight";
import { FlyFromBottomLeft } from "./animations/flyFromBottomLeft";
import { FlyFromDown } from "./animations/flyFromDown";
import { FlyFromLeft } from "./animations/flyFromLeft";
import { FlyFromRight } from "./animations/flyFromRight";
import { FlyFromTopLeft } from "./animations/flyFromTopLeft";
import { FlyFromTopRight } from "./animations/flyFromTopRight";
import { FlyFromUp } from "./animations/flyFromUp";
import { PopIn } from "./animations/popIn";
import { PopOut } from "./animations/popOut";
import { PopOutFade } from "./animations/popOutFade";
import { PopInFade } from "./animations/popInFade";
import { FlyPastLeft } from "./animations/flyPastLeft";

export const TextAnims = [
    {
        title: "flyFromLeft",
        component: FlyFromLeft,
        duration: 500
    },
    {
        title: "flyFromRight",
        component: FlyFromRight,
        duration: 500
    },
    {
        title: "flyFromUp",
        component: FlyFromUp,
        duration: 500
    },
    {
        title: "flyFromDown",
        component: FlyFromDown,
        duration: 500
    },
    {
        title: "flyFromTopLeft",
        component: FlyFromTopLeft,
        duration: 500
    },
    {
        title: "flyFromTopRight",
        component: FlyFromTopRight,
        duration: 500
    },
    {
        title: "flyFromBottomLeft",
        component: FlyFromBottomLeft,
        duration: 500
    },
    {
        title: "flyFromBottomRight",
        component: FlyFromBottomRight,
        duration: 500
    },
    {
        title: "popIn",
        component: PopIn,
        duration: 500
    },
    {
        title: "popOut",
        component: PopOut,
        duration: 500
    },
    {
        title: "popInFade",
        component: PopOutFade,
        duration: 500
    },
    {
        title: "popOutFade",
        component: PopInFade,
        duration: 500
    },
    {
        title: "flyPastLeft",
        component: FlyPastLeft,
        duration: 2000
    },
]