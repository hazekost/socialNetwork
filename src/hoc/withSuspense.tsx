import {ComponentType} from "react";
import React from "react";
import {Preloader} from "../components/common/Preloader/Preloader";

export const WithSuspense = (Component: ComponentType) => {
    return () => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component/>
        </React.Suspense>
    }
}