import ConditionalRendering from "./ConditionalRendering";
import Demo from "./Demo";
import DemoForm from "./DemoForm";
import EventDemo from "./EventDemo";
import MapDemo from "./MapDemo";
import Products from "./Products";
import PropsDemo from "./PropsDemo";
import Receiver from "./Receiver";
import Registration from "./Registration";
import Sender from "./Sender";

import Profile from "./Profile";

import { name, email, namesArray, Button } from './Profile'

export default function AllDemo() {
    return (
        <>
            <Sender></Sender>
            <Receiver></Receiver>
            <Registration />
            <DemoForm />
            <EventDemo />
            <h3> This is my first React app !</h3>
            <h3>Products demo</h3>
            <Products />
            <h3> Map demo</h3>
            <MapDemo />
            <h3>Conditional rendering demo</h3>
            <ConditionalRendering />
            <PropsDemo />
            <Demo />
            <p>Ford India </p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{namesArray[1]}</p>

            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
            <Button></Button>

        </>
    )
}