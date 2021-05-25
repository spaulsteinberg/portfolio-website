import React from 'react'

const SkillTile = (props) => {
    return (
        <div className="text-left">
            <strong>{props.item.title}</strong>
            <span>: </span>
            {props.item.content ?
                props.item.content.join(', ')
                : null
            }
        </div>
    )
}

export default React.memo(SkillTile);
