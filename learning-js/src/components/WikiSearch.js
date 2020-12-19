import React, {useState, useEffect} from 'react'
import wiki from '../api/wiki'
import WikiSearchRenderer from './WikiSearchRenderer'



function WikiSearch() {

    const [searchTerm, setSearchTerm] = useState('programming');
    //const [onFormSubmit, setOnFormSubmit] = useState(false);

    const [searchRes, setSearchRes] = useState([])

    useEffect(()=>{

            const loadResults = async () => {
                const res =	await wiki.get('',{
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: searchTerm,
                    }
                });
                //setOnFormSubmit(false);
                setSearchRes(res.data.query.search);
                
						};

						if (searchTerm && !searchRes.length){
							loadResults();
						}else{
							const timerId = setTimeout(() => {

								if(searchTerm){
									loadResults();
								}
							}, 1000);

							return ()=>{
								clearTimeout(timerId);
							}		
						}
						// eslint-disable-next-line		 
    }, [searchTerm]);

    /*const onSearchReq = (e) => {
        e.preventDefault();
        setOnFormSubmit(true);
    }*/

    return (
        <div>
            <div className=" ui container">
                <form className="ui segment form" onSubmit ={e =>e.preventDefault()}>
                    <div className="field">
                        <label>Search Wiki</label>
                        <input
                            type="text"
                            value={searchTerm}
                            placeholder="Search..."
                            onChange={(e)=>setSearchTerm(e.target.value)} 
                        />
                    </div>
                </form>
            </div>
            <WikiSearchRenderer searchRes={searchRes}/>
        </div>
    )
}

export default WikiSearch
