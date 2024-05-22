import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => { // aw id haman  [Id]navi id zirmajmooay meeting foldera
    return (
        <div>MeetingRoom #{params.id}</div>
    )
}

export default Meeting