import {
    flyFromBottomRight,
    flyFromBottomLeft,
    flyFromDown,
    flyFromLeft,
    flyFromRight,
    flyFromTopLeft,
    flyFromTopRight,
    flyFromUp,
    popIn,
    popOut,
    popOutFade,
    popInFade,
    flyPastFromLeft,
    flyPastFromRight,
    rotateFadeIn,
    rotateFadeOut
} from './text-animations/text-animations-export';

export const TextAnims = [
    {
        title: "flyFromLeft",
        component: flyFromLeft,
        duration: 500
    },
    {
        title: "flyFromRight",
        component: flyFromRight,
        duration: 500
    },
    {
        title: "flyFromUp",
        component: flyFromUp,
        duration: 500
    },
    {
        title: "flyFromDown",
        component: flyFromDown,
        duration: 500
    },
    {
        title: "flyFromTopLeft",
        component: flyFromTopLeft,
        duration: 500
    },
    {
        title: "flyFromTopRight",
        component: flyFromTopRight,
        duration: 500
    },
    {
        title: "flyFromBottomLeft",
        component: flyFromBottomLeft,
        duration: 500
    },
    {
        title: "flyFromBottomRight",
        component: flyFromBottomRight,
        duration: 500
    },
    {
        title: "popIn",
        component: popIn,
        duration: 500
    },
    {
        title: "popOut",
        component: popOut,
        duration: 500
    },
    {
        title: "popInFade",
        component: popOutFade,
        duration: 500
    },
    {
        title: "popOutFade",
        component: popInFade,
        duration: 500
    },
    {
        title: "flyPastFromLeft",
        component: flyPastFromLeft,
        duration: 1000
    },
    {
        title: "flyPastFromRight",
        component: flyPastFromRight,
        duration: 1000
    },
    {
        title: "rotateFadeIn",
        component: rotateFadeIn,
        duration: 2000
    },
    {
        title: "rotateFadeOut",
        component: rotateFadeOut,
        duration: 2000
    }
]