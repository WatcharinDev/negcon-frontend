import { NextPage } from 'next'
import React from 'react'
type Props = {
    params: { id: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};


const ResetPasswordPage: NextPage<Props> = ({ params }) => {
    return (
        <div>params:{params?.id}</div>
    )
}

export default ResetPasswordPage