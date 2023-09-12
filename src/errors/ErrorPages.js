import ErrorStyles from "./ErrorPages.module.css"

export function BadRequestErrorPage() {

    return (
        <>

            <div className={ErrorStyles.warningimg} />

            <h1>
                400 에러 : BadRequestErrorPage
            </h1>
        </>

    )
}

export function UnauthorizedErrorPage() {

    return (
        <>
            <div className={ErrorStyles.warningimg} />
            <h1>
                401 에러 : UnauthorizedErrorPage
            </h1>
        </>
    )
}

export function ForbiddenErrorPage() {

    return (
        <>

            <div className={ErrorStyles.warningimg} />

            <h1>
                403 에러 : ForbiddenErrorPage
            </h1>
        </>

    )
}

export function ServerErrorPage() {

    return (
        <>

            <div className={ErrorStyles.warningimg} />

            <h1>
                500 에러 : ServerErrorPage
            </h1>
        </>

    )
}

export function ErrorBadResponsePage() {
    return (
        <>

            <div className={ErrorStyles.warningimg} />

            <h1>
                500 에러 : ErrorBadResponsePage
            </h1>
        </>

    )

}

