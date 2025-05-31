import { mockData } from "../lib/mock"
import styles from "../styles/filter-jobs.module.css"   

export function FilterJobs() {
    return (
        <ul className={styles.container}>
            {
                mockData.map((item) => {
                    return (

                        <div className={styles.itemWrapper}>
                            <li 
                                key={item.id}
                                className={styles.item}
                            >
                                <h2 className={styles.title}>{item.title}</h2>
                                <p className={styles.salary}>{item.salary}</p>
                                <p className={styles.location}>{item.location}</p>
                                <p className={styles.experience}>{item.experience}</p>
                                <button className={styles.button}>
                                        Подробнее
                                </button>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}
