import s from "./Users.module.css"

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Paginator: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    return <div>
        {pagesArray.map((p, i) => {
            return <span key={i}
                onClick={() => props.onPageChanged(p)}
                className={props.currentPage === p ? s.selectedPage : ""}>{p} </span>
        })}
    </div>
}