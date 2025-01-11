
interface User{
    id: number;
    name:string
}

export default async function Page() {



    const resdata= await getData();
    const data = resdata.props.user
    return (
        <div>
            <h1>hello</h1>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
        </div>
    );
}

async function getData(){
    return{
        props: {
            user: {
                id: 1,
                name: 'John Doe'
            }
        }
    }
}