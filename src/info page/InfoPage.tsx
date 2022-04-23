import React, {useEffect, useState} from 'react';

const InfoPage = () => {

    const [date, setDate] = useState("")

    useEffect(()=>{
       fetch(
           'https://api.github.com/repos/Quuba/portfolio-website/branches/master'
       ).then(
           res => res.json()
       ).then(
           data => {
               const t_date = new Date(data.commit.commit.committer.date)
               setDate(t_date.toLocaleDateString())
           }
       )
    },[])
    
    return (
        <div>
            <h2>Info</h2>
            {date != "" && <h3>Website was last updated on {date}</h3>}
        </div>
    );
};

export default InfoPage;