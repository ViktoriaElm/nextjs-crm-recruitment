import Link from "next/link";

export default function Nav() {
    return (<>
        <nav>
            <ul>
            {/* <li><Link href="/">Главная</Link></li> */}
                <li><Link href="/ListOfCandidates">База</Link></li>
                {/* <li><Link href="/">Вакансии</Link></li>
                <li><Link href="/">Отчеты</Link></li>
                <li><Link href="/">Календарь</Link></li>
                <li><Link href="/">Шаблоны</Link></li> */}
            </ul>
        </nav>
    </>);
}