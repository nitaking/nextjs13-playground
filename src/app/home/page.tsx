import {inspect} from "util";
import styles from "../page.module.css"

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>新着記事</h1>
            <ul>
                <li>
                    <a href="/home/1">記事1</a>
                </li>
                <li>記事2</li>
                <li>記事3</li>
            </ul>
        </main>
    )
}
