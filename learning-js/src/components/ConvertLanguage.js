import React, { useState, useEffect } from 'react';
import googleTranslate from "../api/googleTranslate"

const ConvertLanguage = ({ text, language }) => {
const [translatedText, setTranslatedText] = useState('')

    useEffect(()=>{
        const translationReq = async () => {
            const res = await googleTranslate.post('',{},{
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            })
            setTranslatedText(res.data.data.translations[0].translatedText)
        }
        translationReq();



    },[text,language])


    return (
        <div className="ui segment container">
            <h1 className="ui center aligned header">{translatedText}</h1>
        </div>
    );
}

export default ConvertLanguage;
