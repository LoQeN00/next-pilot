import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1>Cześć, założenie strony polega na tym że wchodzi się na /admin-panel, w którym możemy rewalidować nasze strony. W tym demie dostępna jest strona /test na której z getStaticProps pobieramy bieżący czas, i kiedy na panelu admina klikniemy odśwież to wtedy tą stronę rewalidujemy i pobieramy czas na nowo</h1>
    </div>
  )
}
