import React, {useEffect, useState} from "react";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from "../components/Loading";
import {getSetupKeys} from "../api/ManagementAPI";
import ArrowCircleRightIcon from "@heroicons/react/outline/ArrowCircleRightIcon";
import Highlight from "../components/Highlight";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const AddPeerComponent = () => {

        const timeline = [
            {
                id: 1,
                target: 'Select setup key to register peer:',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
                content: ""
            },
            {
                id: 2,
                target: 'Add Wiretrustee\'s repository:',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
                content: (
                    <Highlight language="bash">
                        {`curl -fsSL https://pkgs.wiretrustee.com/stable/ubuntu/focal.gpg | sudo apt-key add - \ncurl -fsSL https://pkgs.wiretrustee.com/stable/ubuntu/focal.list | sudo tee /etc/apt/sources.list.d/wiretrustee.list`}
                    </Highlight>
                )
            },
            {
                id: 3,
                target: 'Install Wiretrustee:',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
                content: (
                    <Highlight language="bash">
                        {`sudo apt-get update \nsudo apt-get install wiretrustee`}
                    </Highlight>
                )
            },
            {
                id: 4,
                target: 'Login and run Wiretrustee:',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
                content: (
                    <Highlight className="bash">
                        {"sudo wiretrustee login --setup-key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx \nsudo systemctl start wiretrustee"}
                    </Highlight>
                )
            },
            {
                id: 5,
                target: 'Get your IP address:',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
                content: (
                    <Highlight language="bash">
                        {`ip addr show wt0`}
                    </Highlight>
                )
            },
            {
                id: 6,
                target: 'Repeat on other machines.',
                icon: ArrowCircleRightIcon,
                iconBackground: 'bg-gray-600',
            },
        ]


        const [setupKeys, setSetupKeys] = useState("")
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [setupKey, setSetupKey] = useState("");

        const {
            getAccessTokenSilently,
        } = useAuth0();

        const handleError = error => {
            console.error('Error to fetch data:', error);
            setLoading(false)
            setError(error);
        };

        useEffect(() => {
            getSetupKeys(getAccessTokenSilently)
                .then(responseData => setSetupKeys(responseData))
                .then(() => setLoading(false))
                .catch(error => handleError(error))
        }, [getAccessTokenSilently])

        return (
            <>
                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl leading-tight text-gray-900 font-mono font-bold">Add Peer</h1>
                        </div>
                    </header>

                    <main>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="px-4 py-8 sm:px-0">
                                {loading && (<Loading/>)}
                                {error != null && (
                                    <span>{error.toString()}</span>
                                )}
                                {setupKeys && (
                                    <>
                                        <div>

                                            <div className="md:grid md:grid-cols-1 md:gap-6">
                                                <div className="mt-5 md:mt-0 md:col-span-1">
                                                    <div
                                                        className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start ">
                                                        <div className="flow-root">
                                                            <ul role="list" className="-mb-8">
                                                                {timeline.map((event, eventIdx) => (
                                                                    <li key={event.id}>
                                                                        <div className="relative pb-8">
                                                                            {eventIdx !== timeline.length - 1 ? (
                                                                                <span
                                                                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                                                    aria-hidden="true"/>
                                                                            ) : null}
                                                                            <div
                                                                                className="relative flex space-x-3">
                                                                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'h-8 w-8 squared-full flex items-center justify-center ring-10 ring-white'
                      )}
                  >
                    <event.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                  </span>
                                                                                </div>
                                                                                <div
                                                                                    className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                                                    <div>
                                                                                        <p className="font-mono text-bold text-black-900">
                                                                                            {event.target}
                                                                                            <div
                                                                                                className="mt-2 text-sm text-gray-700">
                                                                                                {event.content}
                                                                                            </div>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </main>
                </div>
            </>
            /*<>
                {loading && (
                    <Loading/>
                )}
                {error != null && (
                    <div className="result-block-container">
                        <span>{error.toString()}</span>
                    </div>
                )}
                {setupKeys && (
                    <div className="mb-5">
                        <h3>Add Peer</h3>
                        <br/>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                            <Form.Label column sm={4}>
                                <p className="lead">
                                    <Badge bg="dark" text="light">1</Badge> &nbsp; Select setup key to register peer:
                                </p>
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    as="select"
                                    value={setupKey}
                                    onChange={e => {
                                        setSetupKey(e.target.value);
                                    }}
                                >
                                    <option>
                                    </option>
                                    {Array.from(setupKeys).map((key, index) =>
                                        <option
                                            key={index}
                                            value={key.Key}>
                                            {key.Name}
                                        </option>
                                    )}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        {setupKey && (<Alert variant="secondary">
                            {setupKey.toUpperCase()}
                        </Alert>)}
                        <br/>
                        <Tabs defaultActiveKey="linux" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="linux" title="Linux">
                                <br/>

                                <p className="lead">
                                    <Badge bg="dark" text="light">2</Badge> &nbsp; Add Wiretrustee's repository: </p>
                                <Highlight language="bash">
                                    {`curl -fsSL https://pkgs.wiretrustee.com/stable/ubuntu/focal.gpg | sudo apt-key add - \ncurl -fsSL https://pkgs.wiretrustee.com/stable/ubuntu/focal.list | sudo tee /etc/apt/sources.list.d/wiretrustee.list`}
                                </Highlight>

                                <br/>
                                <p className="lead">
                                    <Badge bg="dark" text="light">3</Badge> &nbsp; Install Wiretrustee: </p>
                                <Highlight language="bash">
                                    {`sudo apt-get update \nsudo apt-get install wiretrustee`}
                                </Highlight>

                                <br/>
                                <p className="lead">
                                    <Badge bg="dark" text="light">4</Badge> &nbsp; Login and run Wiretrustee: </p>
                                <Highlight className="bash">
                                    {"sudo wiretrustee login --setup-key xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx \nsudo systemctl start wiretrustee"}
                                </Highlight>

                                <br/>
                                <p className="lead">
                                    <Badge bg="dark" text="light">5</Badge> Get your IP address: </p>
                                <Highlight language="bash">
                                    {`ip addr show wt0`}
                                </Highlight>
                                <p className="lead">
                                    <Badge bg="dark" text="light">6</Badge> Repeat on other machines</p>
                            </Tab>
                            <Tab eventKey="macos" title="MacOS">

                            </Tab>
                            <Tab eventKey="windows" title="Windows">

                            </Tab>
                        </Tabs>
                    </div>
                )}
            </>*/
        );
    }
;

export default withAuthenticationRequired(AddPeerComponent,
    {
        onRedirecting: () => <Loading/>,
    }
);
