import React from 'react'
import Calculator from "../components/Calculator"
import Link from 'next/link'

export default () =>
    <div className={'mainWrapper'}>
        <div className={'wrapper'}>
            <Calculator />
        </div>
        <div>
            <Link href="/history">
                <a className={'link'}>history</a>
            </Link>
        </div>
    </div>
