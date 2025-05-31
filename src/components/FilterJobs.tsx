import { useState } from "react";
import { mockData } from "../lib/mock";
import { mockDataSchema, expOptionsSchema } from "../lib/definitions";
import styles from "../styles/filter-jobs.module.css";

function filterJobs(data: mockDataSchema[], filter: string) {
    switch (filter) {
        case 'без опыта':
            return data.filter(job => job.experience === 'без опыта');
        case '1-3 года':
            return data.filter(job => job.experience === '1-3 года');
        case '3-5 лет':
            return data.filter(job => job.experience === '3-5 лет');
        case '5 лет и более':
            return data.filter(job => job.experience === '5 лет и более');
        default:
            return data;
    }
}

export function FilterJobs() {

    const expOptions: expOptionsSchema = [
        { value: "любой", label: "любой" },
        { value: "без опыта", label: "без опыта" },
        { value: "1-3 года", label: "1-3 года" },
        { value: "3-5 лет", label: "3-5 лет" },
        { value: "5 лет и более", label: "5 лет и более" },
    ]
    const [expFilter, setExpState] = useState('любой');

    const filteredJobs = filterJobs(mockData, expFilter);

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <span className={styles.filterTitle}>
                    фильтр
                </span>
                <div className={styles.filterExpWrapper}>
                    <span className={styles.filterExpLabel}>
                        опыт:
                    </span>
                    <select 
                        name="expFilter"
                        className={styles.select}
                        onChange={(e) => setExpState(e.target.value)} 
                    >
                        {expOptions.map((opt) => (
                            <option 
                                value={opt.value} 
                                key={opt.value}
                                className={styles.option}
                            >
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <ul className={styles.listItems}>
                {
                    filteredJobs.map((item) => {
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
                                            подробнее
                                    </button>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
