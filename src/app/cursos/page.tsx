import styles from "./cursos.module.css";
export default async function CursosPage() {
  return (
    <main className={styles.cursos}>
      <h1 className={styles.titulo}>Cursos de Front End e UI Design</h1>
      <p>Tenha acesso a diversos cursos</p>
    </main>
  );
}
