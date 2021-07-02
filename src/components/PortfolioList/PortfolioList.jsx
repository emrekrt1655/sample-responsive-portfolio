import  './portfolioList.scss'

export default function PortfolioList ({title, active, setSelected, id, k}) {
    return(
        <li key={k} className={active ? "portfolioList active" : "portfolioList "}
        onClick={()=>setSelected(id)}
        >
            {title}
        </li>
    )
} 