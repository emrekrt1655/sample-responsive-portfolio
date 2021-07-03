import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import { useState, useEffect } from 'react'
import {
    featuredPortfolio,
    frontendPortfolio,
    mobilePortfolio,
    backendPortfolio
} from '../../data'


export default function Portfolio(){
    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])
    const portfolioList = [
        {
            id:'featured',
            title:"Featured",
            key:0
        },
        {
            id:'frontend',
            title:"Front End App",
            key:1
        },
        {
            id:'mobile',
            title:"Mobile App",
            key:2
        },
        {
            id:'backend',
            title:"Backend App",
            key:3
        },
    ]

    useEffect(()=> {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;
            case "frontend":
                setData(frontendPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "backend":
                setData(backendPortfolio)
                break;
            default:
                setData(featuredPortfolio)
                break;
        }
    }, [selected])

    return(
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {
                    portfolioList.map((item)=>(
                        <PortfolioList title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id ={item.id}
                        key={item.key}/>
                    ))
                }
            </ul>
            <div className="container">

                {
                    data.map((d)=>(
                        <div className="item" key={d.id} >
                        <img src={d.img} alt="foto" />
                        <h3>{d.title}</h3>
                    </div>
                    ))
                }

            
            
            
               
                
            </div>
            
        </div>
    )
}