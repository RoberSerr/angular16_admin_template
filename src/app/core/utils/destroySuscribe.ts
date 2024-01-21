import { DestroyRef, inject } from "@angular/core"
import { Subject, takeUntil } from "rxjs"

/**
 * Custom takeUntilDestroy
 * @returns 
 */
export const destroySuscribe = () => {
    const subject = new Subject()
    inject(DestroyRef).onDestroy(() => {
        subject.next(true)
        subject.complete()
    })

    return <T>() => takeUntil<T>(subject.asObservable())
}