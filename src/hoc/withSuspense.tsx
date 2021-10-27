import { ComponentType, Suspense } from "react"

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={"...Loading"}>
            <Component {...props} />
        </Suspense>
    }
}