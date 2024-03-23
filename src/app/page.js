import Image from "next/image";
import styles from "./page.module.css";
import LogForm from "@/LoginForm";

export default function Home() {
  return (
    <div className={styles.bg} >
      <LogForm/>
    </div>
  );
}
