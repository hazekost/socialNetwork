import { useState } from "react"
import s from "./Paginator.module.css"

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChanged: (page: number) => void
}

export const Paginator: React.FC<UsersPropsType> = (props) => {

    let { currentPage, onPageChanged, pageSize, portionSize, totalCount } = props

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
        {pagesArray.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
            return <span key={p}
                onClick={() => onPageChanged(p)}
                className={currentPage === p ? `${s.selectedPage} ${s.pageNumber}` : s.pageNumber}>{p}</span>
        })}
        {portionsCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
}