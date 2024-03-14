import { peoples } from '../resources/data'
import './MapDemo.css'


function ProfileCard(props) {
    let people = props.people;

    let url = 'https://i.imgur.com/' + people.imageId + 's.jpg';


    return (
        <>
            <div className="profile">
                <h3>name:{people.name}</h3>
                <img src={url} alt={people.name} />
                <p>profession:{people.profession}</p>
                <p>accomplishment:{people.accomplishment}</p>
            </div>

        </>
    );

}

// function ProfileTable(props) {
//     let employees = props.employees;
//     let profession = props.profession;

function ProfileTable({ employees, profession }) {
    return (
        <>
            <h3> Display {profession} people in Table format:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Profession</th>
                        <th>Accomplishment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((p) => <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.profession}</td>
                            <td>{p.accomplishment}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    )

}

export default function MapDemo() {

    const fruits = ["Apple", "Grapes", "Guva"];
    const chemists = peoples.filter((p) => p.profession === 'chemist');
    const physicist = peoples.filter((p) => p.profession === 'physicist');


    return (
        <>
            <ol>
                {fruits.map((f, index) => <li key={index}>{f}</li>)}
            </ol>

            <ProfileTable employees={peoples} profession='all'></ProfileTable>

            <ProfileTable employees={chemists} profession='chemist'></ProfileTable>

            <ProfileTable employees={physicist} profession='physicist'></ProfileTable>

            <ProfileCard people={peoples[0]}></ProfileCard>

            <h6>List of all my People:</h6>
            {peoples.map(
                (p) => <ProfileCard key={p.id} people={p}></ProfileCard>
            )}

        </>
    );
}
