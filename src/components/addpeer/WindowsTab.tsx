import React, {useState} from 'react';

import { Button } from "antd";
import TabSteps from "./TabSteps";
import { StepCommand } from "./types"

export const WindowsTab = () => {

    const releaseVersion = '0.6.2'
    const [steps, setSteps] = useState([
        {
            key: 1,
            title: 'Download and run Windows installer:',
            commands: (
                <Button type="primary" href={`https://github.com/netbirdio/netbird/releases/download/v${releaseVersion}/netbird_installer_${releaseVersion}_windows_amd64.exe`} target="_blank">Download Netbird</Button>
            ),
            copied: false
        } as StepCommand,
        {
            key: 2,
            title: 'Click on "Connect" from the Netbird icon in your system tray.',
            commands: '',
            copied: false,
            showCopyButton: false
        },
        {
            key: 3,
            title: 'Log in your browser.\n',
            commands: '',
            copied: false,
            showCopyButton: false
        }
    ])

    return (
        <TabSteps stepsItems={steps}/>
    )
}

export default WindowsTab