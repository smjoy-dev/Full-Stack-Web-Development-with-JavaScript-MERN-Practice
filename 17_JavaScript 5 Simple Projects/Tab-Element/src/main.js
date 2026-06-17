function show(tab) {

    const contentEL = document.getElementById('content');

    switch (tab) {

        case 'a':
            contentEL.innerHTML = `<h1>Tab A</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
            break;
        case 'b':
            contentEL.innerHTML = `<h1>Tab B</h1><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`;
            break;
        case 'c':
            contentEL.innerHTML = `<h1>Tab C</h1><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`;
            break;
    }

}