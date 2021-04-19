import React from 'react'
import css from './Statistics.module.css'

const Statistics = ({title, stats}) => {
  return <section className={css.statistics}>
    
    {title && <h3 className={css.title}>{title}</h3>}
   
    <ul className={css.statList}>
      {stats.map(item => {
        const {id, label, percentage} = item
        return <li className={css.item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{ percentage}%</span>
    </li>
      })}
    </ul>
</section>
}

export default Statistics;