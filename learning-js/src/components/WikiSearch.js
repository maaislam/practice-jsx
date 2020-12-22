import React, {useState, useEffect} from 'react'
import wiki from '../api/wiki'
import WikiSearchRenderer from './WikiSearchRenderer'
import Loader from './Loader';


function WikiSearch() {

    const [searchTerm, setSearchTerm] = useState('javascript');
    //const [onFormSubmit, setOnFormSubmit] = useState(false);

    const [searchRes, setSearchRes] = useState([]);

    const [totalHits, setTotalHits] = useState(null);
    

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
                setTotalHits(res.data.query.searchinfo.totalhits)
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

    const renderResults = () => {
        if(searchRes.length>0){
            return <WikiSearchRenderer searchRes={searchRes}/>
        }else if(totalHits===0){
           return <Loader message="No result found. Try a different search term." loaderSize="huge"/>
        }else{
            return <Loader />
        }
    }
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
            <div className="ui segment container" style={{minHeight: '100px'}}>{renderResults()}</div>
        </div>
    )
}

export default WikiSearch
