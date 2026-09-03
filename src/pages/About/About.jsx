import { Code2, Smartphone, Users, ExternalLink } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroLogo}>M</div>
        <div>
          <h1 className={styles.heroTitle}>Portal do Aluno Mackenzie</h1>
          <p className={styles.heroSub}>Redesign Conceitual e Responsivo</p>
        </div>
      </div>

      <div className={styles.disclaimer}>
        Este é um projeto independente e não oficial. A Universidade Presbiteriana Mackenzie, sua marca, logotipos e demais elementos institucionais pertencem aos seus respectivos titulares. Este protótipo foi desenvolvido exclusivamente para fins acadêmicos, demonstrativos, de estudo de UX/UI e portfólio.
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}><Users size={20} /></div>
          <h2 className={styles.cardTitle}>Autor</h2>
          <p className={styles.cardText}><strong>Gustavo Brito Rodrigues de Sousa</strong></p>
          <p className={styles.cardText}>Idealização, UX/UI e Desenvolvimento Front-End</p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}><Smartphone size={20} /></div>
          <h2 className={styles.cardTitle}>Problema identificado</h2>
          <p className={styles.cardText}>
            O portal atual apresenta limitações de responsividade, especialmente no Quadro de Horários,
            que exige rolagem horizontal ou rotação do celular para visualização adequada.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}><Code2 size={20} /></div>
          <h2 className={styles.cardTitle}>Tecnologias</h2>
          <ul className={styles.techList}>
            <li>React</li>
            <li>JavaScript</li>
            <li>Vite</li>
            <li>React Router DOM</li>
            <li>CSS Modules</li>
            <li>Lucide React</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}><ExternalLink size={20} /></div>
          <h2 className={styles.cardTitle}>Objetivo</h2>
          <p className={styles.cardText}>
            Propor uma experiência mais responsiva, organizada e acessível para funcionalidades acadêmicas
            utilizadas principalmente em dispositivos móveis, preservando a identidade visual institucional.
          </p>
        </div>
      </div>

      <div className={styles.principle}>
        <blockquote>
          "O usuário não deve precisar adaptar seu dispositivo à interface. A interface deve se adaptar ao dispositivo do usuário."
        </blockquote>
      </div>
    </div>
  );
}
