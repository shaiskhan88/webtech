document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('command-input');
    const terminalOutput = document.getElementById('terminal-output');

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = inputField.value.trim();
            inputField.value = '';
            processCommand(command);
        }
    });

    function processCommand(command) {
        if (command === 'nmap 192.168.1.100') {
            simulateNmap();
        } else {
            terminalOutput.innerHTML += `<div><span class="prompt">user@hacknet:~$</span> ${command}</div><div>Command not found: ${command}</div>`;
        }
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function simulateNmap() {
        const scanOutput = [
            'Starting Nmap 7.80 ( https://nmap.org ) at 2024-10-01 12:00',
            'Nmap scan report for 192.168.1.100',
            'Host is up (0.0011s latency).',
            'Not shown: 996 closed ports',
            'PORT    STATE SERVICE',
            '22/tcp  open  ssh',
            '80/tcp  open  http',
            '443/tcp open  https',
            'MAC Address: 00:14:22:01:23:45 (Unknown)',
            'Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds'
        ];

        scanOutput.forEach((line, index) => {
            setTimeout(() => {
                terminalOutput.innerHTML += `<div>${line}</div>`;
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, index * 500);
        });
    }
});
