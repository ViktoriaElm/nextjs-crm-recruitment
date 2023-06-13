import CommonBase from "../components/CommonBase.js";

// вместо резюме пустить пока посты
const
    api = 'https://jsonplaceholder.typicode.com/users',
    columns = [
        { name: 'Имя', getEl: obj => obj.name },
        { name: 'Должность', getEl: obj => obj.username },
        { name: 'E-mail', getEl: obj => obj.email},
        { name: 'WhatsApp', getEl: obj => obj.phone},
        { name: 'Город', getEl: obj => obj.address.city },
    ];

    export default function ListOfCandidates(data) {
        return <CommonBase columns={columns} />;
    }
    
export async function getStaticProps(context) {
    const data = await (await fetch ('https://jsonplaceholder.typicode.com/users')).json();
    return {
        props: { data },
    }
}