import React from 'react'

const InfoBody = ({description}) => {
    return (
        <div className="row text-white">
            <div className="col col-md-8 offset-md-2" dangerouslySetInnerHTML={{__html: description}}>
            </div>
        </div>
    )
}

export default React.memo(InfoBody);