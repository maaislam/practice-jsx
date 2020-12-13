import React from 'react';

const WikiSearchRenderer = (props) => {

    const results = props.searchRes.map((res)=>{
        return (
            <div className="item" key={res.pageid}>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                    {res.snippet}
                </div>
            </div>
        )
    });


    return (
        <div className="ui celled list">
           {results}
        </div>
    );
}

export default WikiSearchRenderer;
