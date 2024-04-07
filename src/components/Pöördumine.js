import React from "react"
import moment from 'moment'

export default function Pöördumine({kirjeldus, sis_aeg, tahtaeg}) {
    return(
        <>
            <p>Kirjeldus: {kirjeldus},  Sisestamise aeg: {sis_aeg}, Tähtaeg: {moment(tahtaeg).format("H:mm:ss D MMM YYYY")}</p>   
        </>
    )
}