import React from "react";
import moment from 'moment';
import 'moment-timezone';

export default function Pöördumine({kirjeldus, sisestamiseAeg, lahendamiseTähtaeg}) {
    const formattedSisestamiseAeg = moment(sisestamiseAeg).format("H:mm D MMM YYYY");
    const formattedLahendamiseTähtaeg = moment(lahendamiseTähtaeg).tz('Europe/Helsinki').format("H:mm D MMM YYYY");

    return (
        <>
            <p>Kirjeldus: {kirjeldus},  Sisestamise aeg: {formattedSisestamiseAeg}, Tähtaeg: {formattedLahendamiseTähtaeg}</p>
        </>
    );
}